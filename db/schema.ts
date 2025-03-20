import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const image = pgTable('nextjs-gallery_image', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    url: varchar('url', { length: 1024 }).notNull(),

    userId: varchar('user_id', { length: 256 }).notNull(),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at'),
});

export type InsertImage = typeof image.$inferInsert;
export type SelectImage = typeof image.$inferSelect;