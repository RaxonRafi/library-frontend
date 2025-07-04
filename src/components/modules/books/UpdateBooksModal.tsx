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
import { Input } from "@/components/ui/input";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { updateBook } from "@/redux/features/books/bookSlice";
import type { IBooks } from "@/redux/features/books/type";

type Props = {
  book: IBooks;
};

export function UpdateBooksModal({ book }: Props) {
  const form = useForm<IBooks>();
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      form.reset(book);
    }
  }, [open, book, form]);

  const onSubmit = (data: IBooks) => {
    if (data._id) {
      dispatch(updateBook({ id: data._id, data: { ...data } }));
    } else {
      console.error("Book ID is missing.");
    }
    setOpen(false); 
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-amber-500">Edit</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Book</DialogTitle>
          <DialogDescription>Update this book's information</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. The Alchemist" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Author */}
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Paulo Coelho" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Genre */}
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Fiction" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ISBN */}
            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 978-1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Copies */}
            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Enter a short description..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Hidden _id */}
            <input type="hidden" {...form.register("_id")} />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Update</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
