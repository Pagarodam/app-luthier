import getUsers from './pages/users.js';

//test getUser
describe('getUser', function () {
  it('should return the users', async function () {
    const users = await getUsers();
    expect(users.length).to.be.above(0);
  });
});
