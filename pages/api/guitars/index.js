import dbConnect from '../../../lib/dbConnect';
import Guitar from '../../../lib/models/Guitars';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const guitars = await Guitar.find({});
        res.status(200).json({ success: true, data: guitars });
      } catch (error) {
        res.status(418).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const { name, description, price, image, style, component } = req.body;
        const guitar = await Guitar.create({
          name,
          description,
          price,
          image,
          style,
          component,
        });
        res.status(200).json({ success: true, data: guitar });
      } catch (error) {
        res.status(418).json({ success: false });
      }
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}
