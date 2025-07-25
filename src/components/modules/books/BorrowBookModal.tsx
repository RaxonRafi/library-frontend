import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import type { IBorrow } from "@/redux/features/books/type";

import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";


type Props = {
  bookId: string;
};

export function BorrowBooksModal({ bookId }: Props) {
  const form = useForm<IBorrow>();
  const [open, setOpen] = useState(false);
  const [borrowBook] = useBorrowBookMutation()

const onSubmit = async (borrowData: IBorrow) => {
  try {
    await borrowBook({
      ...borrowData,
      book: bookId,
    }).unwrap();
    toast.success("Book borrowed successfully!");
    setOpen(false); 
    form.reset();
  } catch (err) {
    console.error("Error borrowing book:", err);
    if (
      err && typeof err === "object" && "data" in err
    ) {
      form.setError("quantity", {
        type: "manual",
        message: "Not enough copies available!",
      });
      return;
    }
    toast.error("Failed to borrow book.");
  }
};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-500">borrow</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
        </DialogHeader>
        <DialogDescription>
            Fill up this form to borrow books
        </DialogDescription>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* quantity */}
            <FormField
              control={form.control}
              name="quantity"
              rules={{ required: "Quantity is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input placeholder="enter quantity.." {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> 
            <FormField
                control={form.control}
                name="dueDate"
                rules={{ required: "DueDate is required" }}
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Due Date</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                            )}
                            >
                            {field.value ? (
                                format(field.value, "PPP")
                            ) : (
                                <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined}
                            onSelect={field.onChange}
                            captionLayout="dropdown"
                            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Borrow</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
