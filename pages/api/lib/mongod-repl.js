import { MongoMemoryReplSet } from 'mongodb-memory-server';

export const replset = MongoMemoryReplSet.create({
  replSet: { count: 4 },
});

export const uri = await replset.getUri();
