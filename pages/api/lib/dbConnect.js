import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGOMS_DOWNLOAD_URL = process.env.MONGOMS_DOWNLOAD_URL;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    try {
      if (process.env.NODE_ENV === 'test')
        cached.conn = await mongoose.connect(MONGOMS_DOWNLOAD_URL);
      cached.conn = await mongoose.connect(MONGODB_URI, opts);
      cached.promise = cached.conn.connection;
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error(error);
    }
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
