"server-only";

import { db } from "@/db";
import { image } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function deleteImage(id: number) {
    const user = await auth();
    if (!user.userId) throw new Error("User not authenticated");

    await db.delete(image).where(and(eq(image.id, id), eq(image.userId, user.userId)));

    redirect("/");
}