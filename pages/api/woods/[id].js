import dbConnect from '../../../lib/dbConnect';
import Wood from '../../../lib/models/Woods';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const wood = await Wood.findById(id);
        if (!wood) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: wood });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const { nameWood, quality, price, image, style, component } = req.body;
        const guitar = await Wood.findByIdAndUpdate(id, {
          nameWood,
          quality,
          price,
          image,
          style,
          component,
        });
        res.status(200).json({ success: true, data: guitar });
      } catch (error) {
        res.status(418).json({ message: "Yes I'm a teapot" });
      }
      break;

    case 'DELETE':
      try {
        const wood = await Wood.findByIdAndDelete(id);
        res.status(200).json({ success: true, data: wood });
      } catch (error) {
        res.status(418).json({ message: "Yes I'm a teapot" });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
