import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../util/mango";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      adapter: MongoDBAdapter(clientPromise),
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth(authOptions);
