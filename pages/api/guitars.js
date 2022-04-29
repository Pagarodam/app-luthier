import dbConnect from '../../lib/dbConnect';
import Guitar from '../../models/Guitar';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const guitars = await Guitar.find({});
        res.status(200).json({ success: true, data: guitars });
      } catch (error) {
        res.status(418).json({ message: "Yes I'm a teapot" });
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
        res.status(418).json({ message: "Yes I'm a teapot" });
      }
      break;

    case 'PUT':
      try {
        const { name, description, price, image, style, component } = req.body;
        const guitar = await Guitar.findByIdAndUpdate(req.params.id, {
          name,
          description,
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
        const guitar = await Guitar.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, data: guitar });
      } catch (error) {
        res.status(418).json({ message: "Yes I'm a teapot" });
      }
      break;

    case 'PATCH':
      try {
        const { name, description, price, image, style, component } = req.body;
        const guitar = await Guitar.findByIdAndUpdate(req.params.id, {
          name,
          description,
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

    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
  const guitars = await Guitar.find();

  res.status(200).json(guitars);
}
