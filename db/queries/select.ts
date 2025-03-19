import { db } from "../index";
import { image } from "../schema";
import { desc } from "drizzle-orm";

export async function getImages() {
    const result = await db.select().from(image).orderBy(desc(image.createdAt));
    return result;
}