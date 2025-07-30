export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // You can save this data, send email, etc. (just printing it for now)
    console.log(name, email, message);

    res.status(200).json({ success: true, msg: "Form received!" });
  } else {
    res.status(405).json({ error: 'Only POST requests allowed' });
  }
}
