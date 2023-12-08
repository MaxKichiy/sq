import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  varchar,
  mediumint,
  timestamp,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const users = mysqlTable(
  "users",
  {
    id: mediumint("id", { unsigned: true }).autoincrement().notNull(),
    firstName: varchar("first_name", { length: 50 }).notNull(),
    lastName: varchar("last_name", { length: 50 }),
    phone: varchar("phone", { length: 20 }),
    email: varchar("email", { length: 100 }),
    address: varchar("address", { length: 200 }),
    verifiedAt: timestamp("verified_at", { mode: "string" }),
  },
  (table) => {
    return {
      usersIdPk: primaryKey({ columns: [table.id], name: "users_id_pk" }),
    };
  },
);
