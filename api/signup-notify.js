export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // 👉 Use EmailJS, Nodemailer, or Formspree API here
    console.log("New signup:", email); // You can see this in Vercel Logs

    // For now, just log it
    res.status(200).json({ success: true, message: "Admin notified." });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
