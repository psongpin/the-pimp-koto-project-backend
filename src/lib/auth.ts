import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "../db";
import { user, session, account, verification } from "../db/schema/betterAuth";
import { TRUSTED_ORIGINS } from "./constants/origin";

const authSchema = {
  user,
  session,
  account,
  verification,
};

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),
  trustedOrigins: TRUSTED_ORIGINS,
  emailAndPassword: {
    enabled: true,
  },
});
