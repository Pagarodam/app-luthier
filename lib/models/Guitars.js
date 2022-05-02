import mongoose from 'mongoose';

const GuitarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  description: {
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
  tapa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wood',
    required: [true, 'La tapa es obligatoria'],
  },
  aro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wood',
    required: [true, 'El aro es obligatorio'],
  },
  fondo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wood',
    required: [true, 'El fondo es obligatorio'],
  },
  diapason: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wood',
    required: [true, 'El diapasón es obligatorio'],
  },
});

GuitarSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.models?.Guitar ||
  mongoose.model('Guitar', GuitarSchema);
