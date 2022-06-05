import dbConnect from 'lib/dbConnect';
import Cart from 'lib/models/Cart';
import User from 'lib/models/Users';
import Guitar from 'lib/models/Guitars';

export default async function handler(req, res) {
  const {
    query: { id },
    method
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const cart = await Cart.find({ user: id });
        res
          .status(200)
          .json({ success: true, data: cart })
          .populate({
            path: 'products',
            model: Guitar
          })
          .populate({
            path: 'user',
            model: User
          });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case 'PUT':
      try {
        const {
          body: { product, quantity }
        } = req;
        const guitar = await Guitar.findByIdAndUpdate(id, {
          $push: {
            products: {
              product,
              quantity
            }
          }
        });
        res.status(200).json({ success: true, data: guitar });
      } catch (error) {
        res.status(418).json({ message: "Yes I'm a teapot", error });
      }
      break;

    case 'DELETE':
      try {
        const cart = await Cart.findByIdAndDelete(id);
        res.status(200).json({ success: true, data: cart });
      } catch (error) {
        res.status(418).json({ message: "Yes I'm a teapot", error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
