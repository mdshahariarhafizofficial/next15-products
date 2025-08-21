import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const demoUser = {
          id: "1",
          name: "Demo User",
          email: "demo@example.com",
          password: "password123",
        };

        if (
          credentials?.email === demoUser.email &&
          credentials?.password === demoUser.password
        ) {
          const { password: _pw, ...user } = demoUser;
          return user;
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = { id: user.id, name: user.name, email: user.email };
      return token;
    },
    async session({ session, token }) {
      if (token?.user) session.user = token.user;
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return `${baseUrl}/products`;
    },
  },
  pages: {
    signIn: "/login",
  },
};

// ✅ App Router compatible
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
