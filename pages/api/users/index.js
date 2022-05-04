import dbConnect from 'lib/dbConnect';
import User from 'lib/models/Users';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json(users);
      } catch (error) {
        res.status(418).json(error);
      }
      break;

    case 'POST':
      try {
        const { email, role, image } = req.body;
        const user = await User.create({
          email,
          role,
          image,
        });
        res.status(200).json(user);
      } catch (error) {
        res.status(418).json(error);
      }
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}
