import dbConnect from 'lib/dbConnect';
import Guitar from 'lib/models/Guitars';
import Cart from 'lib/models/Cart';
import User from 'lib/models/Users';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const carts = await Cart.find({})
          .populate({
            path: 'products',
            model: Guitar
          })
          .populate({
            path: 'user',
            model: User
          });
        res.status(200).json({ success: true, data: carts });
      } catch (error) {
        res.status(418).json({ success: false, error });
      }
      break;

    case 'POST':
      try {
        const cart = new Cart(req.body);
        await cart.save();

        res.status(200).json({ success: true, data: cart });
      } catch (error) {
        res.status(418).json({ success: false, error });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
