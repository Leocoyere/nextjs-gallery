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

export async function getImageById(id: number) {
    const user = await auth();

    if (!user.userId) {
        throw new Error("User not authenticated");
    }

    const result = await db.select().from(image).where(eq(image.id, id));

    if (!result[0]) {
        throw new Error("Image not found");
    }

    if (result[0].userId !== user.userId) {
        throw new Error("Unauthorized");
    }

    return result[0];
}   