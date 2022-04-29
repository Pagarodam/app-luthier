import mongoose from 'mongoose';

const GuitarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  component: {
    type: String,
    required: true,
  },
});

export default mongoose.model.Guitar || mongoose.model('Guitar', GuitarSchema);
