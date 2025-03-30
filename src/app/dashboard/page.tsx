import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center gap-6 max-w-5xl mx-auto py-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Invoices</h1>
        <p>
          <Button variant="ghost" asChild>
            <Link href="/invoices/new">
              <CirclePlus />
              Create Invoice
            </Link>
          </Button>
        </p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] py-3">Date</TableHead>
            <TableHead className="py-3">Customer</TableHead>
            <TableHead className="py-3">Email</TableHead>
            <TableHead className="text-center py-3">Status</TableHead>
            <TableHead className="text-right py-3">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-left py-3">
              27/03/2025
            </TableCell>
            <TableCell className="font-medium text-left py-3">J. Man</TableCell>
            <TableCell className="text-left py-3">jman@gmail.co.ke</TableCell>
            <TableCell className="text-center py-3">
              <Badge className="rounded-full">Open</Badge>
            </TableCell>
            <TableCell className="font-medium text-right py-3">
              $250.00
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-left py-3">
              27/03/2025
            </TableCell>
            <TableCell className="font-medium text-left py-3">J. Man</TableCell>
            <TableCell className="text-left py-3">jman@gmail.co.ke</TableCell>
            <TableCell className="text-center py-3">
              <Badge className="rounded-full">Open</Badge>
            </TableCell>
            <TableCell className="font-medium text-right py-3">
              $250.00
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
