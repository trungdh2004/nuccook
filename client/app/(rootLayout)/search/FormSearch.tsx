"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
const FormSearch = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex items-center w-full justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center border border-black/20 ring-ring rounded-xl py-1 px-2 w-full  max-w-xl shadow-md gap-2"
        >
          <div>
            <IoSearch size={20} className="text-orange-600" />
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Tìm kiếm công thức các món ăn "
                    {...field}
                    className="outline-none ring-0 shadow-none flex-1 border-none focus-visible:outline-none focus-visible:ring-0 px-0"
                    autoFocus
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" size={"sm"} className="rounded-lg">
            Tìm kiếm
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormSearch;
