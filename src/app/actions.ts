"use server";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { redirect } from "next/navigation";

export async function formAction(formData: FormData) {
  const amount = Math.floor(parseFloat(String(formData.get("amount"))) * 100);
  const description = String(formData.get("description"));

  const results = await db
    .insert(Invoices)
    .values({
      status: "open",
      amount,
      description,
    })
    .returning({
      id: Invoices.id,
    });
  redirect(`/invoices/${results[0].id}`);
}
