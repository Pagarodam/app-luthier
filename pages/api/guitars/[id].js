import dbConnect from 'lib/dbConnect';
import Guitar from 'lib/models/Guitars';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const guitar = await Guitar.findById(id);
        if (!guitar) {
          return res.status(400).json({ success: false });
        }
        res
          .status(200)
          .json({ success: true, data: guitar })
          .populate({
            path: 'tapa',
            model: Wood,
          })
          .populate({
            path: 'aro',
            model: Wood,
          })
          .populate({
            path: 'fondo',
            model: Wood,
          })
          .populate({
            path: 'diapason',
            model: Wood,
          });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const {
          name,
          description,
          price,
          style,
          image,
          tapa,
          aro,
          fondo,
          diapason,
        } = req.body;
        const guitar = await Guitar.findByIdAndUpdate(id, {
          name,
          description,
          price,
          style,
          image,
          tapa,
          aro,
          fondo,
          diapason,
        });
        res.status(200).json({ success: true, data: guitar });
      } catch (error) {
        res.status(418).json({ message: "Yes I'm a teapot" });
      }
      break;

    case 'DELETE':
      try {
        const guitar = await Guitar.findByIdAndDelete(id);
        res.status(200).json({ success: true, data: guitar });
      } catch (error) {
        res.status(418).json({ message: "Yes I'm a teapot", error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
