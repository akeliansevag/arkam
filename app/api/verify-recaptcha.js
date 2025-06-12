// pages/api/verify-recaptcha.js
export default async function handler(req, res) {
  const { token } = req.body;
  const secret = process.env.RECAPTCHA_SECRET;

  // Call Google server-to-server
  const googleRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: 'POST' }
  );
  const data = await googleRes.json();

  if (data.success) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(400).json({ success: false, errors: data['error-codes'] });
  }
}