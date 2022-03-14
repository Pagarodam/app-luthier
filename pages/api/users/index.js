import dbConnect from '../lib/dbConnect';
import User from '../models/User';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({});
        return res.status(200).json({ success: true, data: users });
      } catch (error) {
        return res.status(400).json({ success: false });
      }

    case 'POST':
      try {
        const user = await User.create(req.body);
        return res.status(201).json({ success: true, data: user });
      } catch (error) {
        return res.status(400).json({ success: false });
      }

    default:
      res.setHeaders('Allow', ['GET', 'POST']);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
}
