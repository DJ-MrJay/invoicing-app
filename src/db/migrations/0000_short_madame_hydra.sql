CREATE TYPE "public"."status" AS ENUM('open', 'paid', 'overdue');--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"create_ts" timestamp DEFAULT now() NOT NULL,
	"status" "status" NOT NULL,
	"amount" integer NOT NULL,
	"description" text NOT NULL
);
