import mongoose from 'mongoose';

const WoodSchema = new mongoose.Schema({
  nameWood: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  quality: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
  },
  price: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
  },
  image: {
    type: String,
    required: [true, 'La imagen es obligatoria'],
  },
  style: {
    type: String,
    required: [true, 'El estilo es obligatorio'],
  },
  component: {
    type: String,
    required: [true, 'El componente es obligatorio'],
  },
});

WoodSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const wood = mongoose.model('Wood', WoodSchema);

export default wood;
