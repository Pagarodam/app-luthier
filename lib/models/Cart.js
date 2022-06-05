import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guitar',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    required: true
  }
});

CartSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export default mongoose.models?.Cart || mongoose.model('Cart', CartSchema);
