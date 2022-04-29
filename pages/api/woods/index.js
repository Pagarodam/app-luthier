import dbConnect from '../../../lib/dbConnect';
import Wood from '../../../lib/models/Woods';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const guitars = await Wood.find({});
        res.status(200).json({ success: true, data: guitars });
      } catch (error) {
        res.status(418).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const { nameWood, quality, price, image, style, component } = req.body;
        const guitar = await Wood.create({
          nameWood,
          quality,
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
