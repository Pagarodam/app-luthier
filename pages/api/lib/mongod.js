import { MongoMemoryServer } from 'mongodb-memory-server';

export const mongod = await MongoMemoryServer.create();

export const uri = mongod.getUri();
