import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'El mail es obligatorio'],
  },
  rol: {
    type: String,
    required: [true, 'El rol es obligatorio'],
  },
  avatar: {
    type: String,
    required: [true, 'El avatar es obligatorio'],
  },
  address: {
    type: String,
  },
});

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.models?.User || mongoose.model('User', UserSchema);
