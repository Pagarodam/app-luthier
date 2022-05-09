/* eslint-disable import/no-anonymous-default-export */
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from 'lib/mongodb';

export default (req, res) =>
  NextAuth(req, res, {
    session: {
      jwt: true,
    },
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
      async signIn({ user }) {
        if (!user?.role) {
          user.role = 'client';
          user.address = {};
          user.banned = false;
        }
        return true;
      },
      async jwt(token, user, account) {
        if (account?.accessToken) {
          token.accessToken = account.accessToken;
        }
        if (user?.role) {
          token.role = user.role;
        }
        if (user?.banned) {
          token.banned = user.banned;
        }
        return token;
      },
      async session(session, token) {
        if (token?.accessToken) {
          session.accessToken = token.accessToken;
        }
        if (token?.role) {
          session.user.role = token.role;
        }
        if (token?.banned) {
          token.banned = user.banned;
        }
        return session;
      },
    },
  });
