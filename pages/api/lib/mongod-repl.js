import { MongoMemoryReplSet } from 'mongodb-memory-server';

export const replset = await MongoMemoryReplSet.create({
  replSet: { count: 4 },
});

export const uri = replset.getUri();
