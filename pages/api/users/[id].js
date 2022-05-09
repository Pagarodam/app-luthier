import dbConnect from 'lib/dbConnect';
import User from 'lib/models/Users';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const user = await User.findById(id);
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const { email, rol, avatar, address = '' } = req.body;
        const user = await User.findByIdAndUpdate(id, {
          email,
          rol,
          avatar,
          address,
        });
        res.status(200).json(user);
      } catch (error) {
        res.status(418).json({ message: "Yes I'm a teapot" });
      }
      break;

    case 'DELETE':
      try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);
      } catch (error) {
        res.status(418).json({ message: "Yes I'm a teapot" });
      }
      break;

    default:
      res.status(400).json({ message: 'Method not allowed' });
      break;
  }
}
