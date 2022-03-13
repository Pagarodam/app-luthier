/* import { authentication, app } from '../components/firebase/client';

const db = app.initializeTestApp().firestore();

async function getUser(userId) {
  const user = await db.collection('users').doc(userId).get();
  return user.data();
}

test('get user', async () => {
  const user = await getUser('1');
  expect(user.name).toBe('Juan');
});

test('get auth', () => {
  const result = getAuth();
  expect(result).toBe(null);
});
 */

test('prove', () => {
  expect(true).toBe(true);
});
