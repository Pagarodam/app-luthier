import dbConnect from '../../../lib/dbConnect';
import Wood from '../../../lib/models/Woods';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const woods = await Wood.find({});
        res.status(200).json({ success: true, data: woods });
      } catch (error) {
        res.status(418).json({ success: false });
      }
      break;

    case 'POST':
      try {
        console.log('req.body', req.body);
        const { nameWood, quality, price, image, style, component } = req.body;
        const wood = await Wood.create({
          nameWood,
          quality,
          price,
          image,
          style,
          component,
        });
        res.status(200).json({ success: true, data: wood });
      } catch (error) {
        console.log('error', error);
        res.status(418).json({ success: false });
      }
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}
