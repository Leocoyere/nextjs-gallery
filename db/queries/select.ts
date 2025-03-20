import "server-only";
import { db } from "@/db";
import { image } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
    
    const user = await auth();

    if (!user.userId) {
        throw new Error("User not authenticated");
    }

    const result = await db.select().from(image).where(eq(image.userId, user.userId)).orderBy(desc(image.createdAt));
    return result;
}