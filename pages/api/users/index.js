import dbConnect from 'lib/dbConnect';
import User from 'lib/models/Users';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const { method } = req;
  const session = await getSession({ req });

  if (!session || session.user.role !== 'admin') {
    return res.status(401).json({
      message:
        'Upps, vaya algo ha fallado. No tienes permisos para acceder a esta página.'
    });
  } else {
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
            image
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
}
