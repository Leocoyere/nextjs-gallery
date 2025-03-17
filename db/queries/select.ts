import { db } from "../index";
import { images } from "../schema";

export async function getImages() {
    const result = await db.select().from(images);
    return result;
}