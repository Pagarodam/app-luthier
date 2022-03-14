/* eslint-disable @typescript-eslint/no-non-null-assertion */
import MongoMemoryReplSet from '../pages/api/lib/mongod-repl';
import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

jest.setTimeout(100000);

describe('Single MongoMemoryServer', () => {
  let con;
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    con = await MongoClient.connect(mongoServer.getUri(), {});
  });

  afterAll(async () => {
    if (con) {
      await con.close();
    }
    if (mongoServer) {
      await mongoServer.stop();
    }
  });

  it('should successfully set & get information from the database', async () => {
    const db = con.db(mongoServer.instanceInfo.dbName);

    expect(db).toBeDefined();
    const column = db.collection('test');
    const result = await column.insertMany([{ a: 1 }, { b: 1 }]);
    expect(result.insertedCount).toStrictEqual(2);
    expect(await column.countDocuments({})).toBe(2);
  });
});

describe('multi-member replica set', () => {
  it('should enter running state', async () => {
    const replSet = await MongoMemoryReplSet.create({ replSet: { count: 3 } });
    expect(replSet.servers.length).toEqual(3);
    expect(replSet.getUri().split(',').length).toEqual(3);

    await replSet.stop();
  }, 40000);

  it('should be possible to connect replicaset after waitUntilRunning resolveds', async () => {
    const replSet = await MongoMemoryReplSet.create({ replSet: { count: 3 } });

    const con = await MongoClient.connect(replSet.getUri(), {});

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const db = await con.db('admin');
    const admin = db.admin();
    const status = await admin.replSetGetStatus();
    expect(status.members.filter((m) => m.stateStr === 'PRIMARY')).toHaveLength(
      1
    );
    expect(
      status.members.filter((m) => m.stateStr === 'SECONDARY')
    ).toHaveLength(2);

    await con.close();
    await replSet.stop();
  });
});
