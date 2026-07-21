/** Set Clerk keys in .env.local to switch from demo mode to Clerk in production. */
export const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY);
