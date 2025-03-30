import { sql } from "drizzle-orm";
import { db } from "@/db";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { formAction } from "@/app/actions";

export default async function Home() {
  return (
    <main className="flex flex-col justify-center gap-6 max-w-5xl mx-auto py-12">
      <div>
        <h1 className="text-3xl text-center font-semibold">
          Create New Invoice
        </h1>
      </div>

      <form action={formAction} className="flex flex-col gap-6 w-lg mx-auto">
        <div>
          <Label htmlFor="name" className="mb-2 font-semibold">
            Customer Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 font-semibold">
            Customer Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div>
          <Label htmlFor="amount" className="mb-2 font-semibold">
            Amount
          </Label>
          <Input id="amount" name="amount" type="text" />
        </div>
        <div>
          <Label htmlFor="description" className="mb-2 font-semibold">
            Description
          </Label>
          <Textarea id="description" name="description"></Textarea>
        </div>
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </main>
  );
}
