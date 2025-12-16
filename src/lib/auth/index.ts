import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { authSchema } from "@/db/schema";
import { db } from "@/db";

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_APP_URL!,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
});
