import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { roleEnum } from "./enums";
import { timestamps } from ".";



export const users = pgTable("users",{
    id: uuid("id").defaultRandom().primaryKey(),
    email: varchar("email").notNull().unique(),
    passwordHash: varchar("password").notNull(),
    role: roleEnum("role").default("admin").notNull(),
    ...timestamps,
})

