import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import FacebookProvider from 'next-auth/providers/facebook';

export default NextAuth({
  secret: process.env.SECRET,
  session: {
    jwt: true,
  },
  database: process.env.MONGODB_URI,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: '<no-reply@example.com>',
    }),
  ],
  pages: {
    signin: '/login',
  },
});
