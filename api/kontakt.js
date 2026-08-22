// Vercel Node serverless function. Uses global fetch — requires Node 18+ runtime (Vercel default).
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  var body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  var honeypot = String(body.predmet_web || "").trim();
  if (honeypot !== "") {
    // Bot tripped the honeypot — respond as if successful, don't tip it off.
    res.status(200).json({ ok: true });
    return;
  }

  var jmeno = String(body.jmeno || "").trim();
  var email = String(body.email || "").trim();
  var telefon = String(body.telefon || "").trim();
  var zprava = String(body.zprava || "").trim();
  var souhlas = !!body.souhlas;

  var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (jmeno.length < 2 || !emailOk || zprava.length < 10 || !souhlas) {
    res.status(400).json({ ok: false, error: "invalid_input" });
    return;
  }

  var apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ ok: false, error: "server_not_configured" });
    return;
  }

  var subject = "Poptávka ze webu — " + jmeno;
  var html =
    "<p><strong>Jméno:</strong> " + escapeHtml(jmeno) + "</p>" +
    "<p><strong>E-mail:</strong> " + escapeHtml(email) + "</p>" +
    (telefon ? "<p><strong>Telefon:</strong> " + escapeHtml(telefon) + "</p>" : "") +
    "<p><strong>Zpráva:</strong><br>" + escapeHtml(zprava).replace(/\n/g, "<br>") + "</p>";

  try {
    var resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Web Studnářství Petráň <onboarding@resend.dev>",
        to: ["petran111@seznam.cz"],
        reply_to: email,
        subject: subject,
        html: html
      })
    });

    if (!resendRes.ok) {
      res.status(502).json({ ok: false, error: "send_failed" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(502).json({ ok: false, error: "send_failed" });
  }
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
