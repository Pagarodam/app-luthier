import { IncomingForm } from 'formidable';
import fs from 'fs';
import { promisify } from 'util';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const data = await new Promise(async (resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) return reject(err);

      const mv = promisify(fs.rename);
      const oldPath = files.file.filepath;
      const newPath = `./public/uploads/${files.file.originalFilename}`;
      await mv(oldPath, newPath);

      res.status(200).json({ fields, files });
    });
  });
}
