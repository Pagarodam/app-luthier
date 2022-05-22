import Formidable from 'Formidable';
const fs = require('fs');

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadForm = (next) => (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      const form = new Formidable.IncomingForm({
        multiples: true,
        keepExtensions: true,
      });
      form.once('error', console.error);
      form
        .on('fileBegin', (name, file) => {
          console.log('start uploading: ', file.filename);
        })
        .on('aborted', () => console.log('Aborted...'));
      form.once('end', () => {
        console.log('Done!');
      });
      await form.parse(req, async (err, fields, files) => {
        if (err) {
          throw String(JSON.stringify(err, null, 2));
        }
        console.log(
          'moving file: ',
          files.file.filepath,
          ' to ',
          `public/uploads/${files.file.originalFilename}`,
        );
        fs.renameSync(
          files.file.filepath,
          `public/uploads/${files.file.originalFilename}`,
        );
        req.form = { fields, files };
        return resolve(next(req, res));
      });
    } catch (error) {
      return resolve(res.status(403).send(error));
    }
  });
};

function handler(req, res) {
  try {
    if (req.method === 'POST') {
      res.status(200).send(req.form);
    } else {
      throw String('Method not allowed');
    }
  } catch (error) {
    res.status(400).json({ message: JSON.stringify(error, null, 2) });
  }
}

export default uploadForm(handler);
