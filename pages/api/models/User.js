import { mongoose, Schema } from 'mongoose';
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  avatar: String,
  whatsapp: String,
  bio: String,
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// model
/* const User = mongoose.model('User', userSchema);

export default User; */
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
