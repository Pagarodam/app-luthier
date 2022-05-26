import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'El mail es obligatorio'],
  },
  role: {
    type: String,
    required: [true, 'El rol es obligatorio'],
  },
  image: {
    type: String,
    required: [true, 'El avatar es obligatorio'],
  },
  address: {
    type: Object,
  },
  banned: {
    type: Boolean,
  },
  emailVerified: {
    type: Boolean,
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
