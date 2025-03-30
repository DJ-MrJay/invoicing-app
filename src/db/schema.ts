import {
  pgTable,
  serial,
  timestamp,
  integer,
  text,
  pgEnum,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ["open", "paid", "overdue"]);

export const Invoices = pgTable("invoices", {
  id: serial("id").primaryKey().notNull(),
  createTs: timestamp("create_ts").defaultNow().notNull(),
  status: statusEnum("status").notNull(),
  amount: integer("amount").notNull(),
  description: text("description").notNull(),
});
