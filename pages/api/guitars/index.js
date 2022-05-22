import dbConnect from 'lib/dbConnect';
import Guitar from 'lib/models/Guitars';
import Wood from 'lib/models/Woods';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const guitars = await Guitar.find({})
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
        res.status(200).json({ success: true, data: guitars });
      } catch (error) {
        res.status(418).json({ success: false, error });
      }
      break;

    case 'POST':
      try {
        const guitar = new Guitar(req.body);
        await guitar.save();

        res.status(200).json({ success: true, data: guitar });
      } catch (error) {
        res.status(418).json({ success: false, error });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
