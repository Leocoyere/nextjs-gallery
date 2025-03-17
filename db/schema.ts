import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const images = pgTable('nextjs-gallery_images', {
    id: serial('id').primaryKey(),
    url: text('url').notNull(),
});

export type InsertImage = typeof images.$inferInsert;
export type SelectImage = typeof images.$inferSelect;