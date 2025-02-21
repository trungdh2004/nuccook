"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdDelete, MdOutlineEditCalendar } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";
import { z } from "zod";
import IngredientList from "./IngredientList";
import StepsList from "./StepsList";

const formSchema = z.object({
  title: z.string(),
  image: z
    .object({
      url: z.string().url(),
      file: z.instanceof(File).optional(),
    })
    .optional(),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  serves: z.string(),
  time: z.string(),
  ingredients: z.array(z.object({ name: z.string() })),
  steps: z.array(z.object({ name: z.string() })),
});

export type RecipesFormValue = z.infer<typeof formSchema>;

const RecipesFormInit = () => {
  const form = useForm<RecipesFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      ingredients: [
        {
          name: "xin chào bạn",
        },
      ],
      steps: [{ name: "hihi" }, { name: "hehe" }, { name: "hí hí" }],
    },
  });
  const [previewUrl, setPreviewUrl] = useState("");

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full  px-4">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <section className="sm:grid gap-6 mb-10 md:mb-14 grid-cols-[min(35%,300px),1fr]">
              <div className="mb-4 sm:mb-0">
                <div className="border rounded-md overflow-hidden relative min-h-10">
                  <div className="inset-0 absolute flex items-center justify-center bg-black/50 hidden"></div>

                  <div className="p-2 bg-[#f8f6f2] w-full h-full">
                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center justify-center aspect-[340/240] sm:aspect-[120/170]">
                              <div
                                className={cn(
                                  "w-full h-full flex items-center justify-center",
                                  previewUrl ? "hidden" : ""
                                )}
                              >
                                <div>
                                  <Image
                                    src={"/image.png"}
                                    alt="photo"
                                    width={64}
                                    height={64}
                                    className="mx-auto pointer-events-none"
                                  />

                                  <p className="font-semibold mt-2 text-gray-400">
                                    Tải ảnh
                                  </p>
                                </div>
                              </div>

                              {previewUrl && (
                                <div className="w-full h-full relative">
                                  <div className="absolute z-10 top-2 left-2">
                                    <Button
                                      variant={"destructive"}
                                      onClick={() => {
                                        console.log("hihi");
                                        setPreviewUrl("");
                                        field.onChange({
                                          url: "",
                                          file: null,
                                        });
                                      }}
                                      size={"icon"}
                                    >
                                      <MdDelete />
                                    </Button>
                                  </div>

                                  <Image
                                    src={previewUrl}
                                    alt="photo"
                                    layout="fill"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}

                              <input
                                type="file"
                                accept="image/jpeg, image/png,image/svg,image/jpg,image/webp"
                                className="absolute inset-0 cursor-pointer opacity-0"
                                onChange={(event) => {
                                  const file = event?.target
                                    ?.files?.[0] as File;

                                  if (!file) return;
                                  const url = URL.createObjectURL(file);

                                  console.log("url", {
                                    file,
                                    url,
                                  });
                                  setPreviewUrl(url);
                                  field.onChange({
                                    url: url,
                                    file: file,
                                  });
                                }}
                              />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="w-full h-12 md:h-14 rounded-md text-lg  md:text-2xl font-bold placeholder:text-lg md:placeholder:text-2xl py-0 ring-0 focus:ring-0 bg-[#f8f6f2] placeholder:text-gray-400"
                            placeholder="Tiêu đề món ăn "
                            {...field}
                            // autoFocus
                            maxLength={100}
                          />
                        </FormControl>
                        <div className="flex items-center justify-end h-4">
                          <span
                            className={cn(
                              "text-xs text-gray-400 hidden",
                              field.value?.length && "block"
                            )}
                          >
                            {field.value?.length} / 100
                          </span>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="hidden lg:block mb-4">
                  <Link href={"/"} className="inline-flex gap-x-2 items-center">
                    <div className="size-10 rounded-full border"></div>
                    <div className="flex-1">
                      <div className="line-clamp-1">
                        <span className="font-semibold text-sm text-gray-500">
                          Trung do huu
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            className="w-full rounded-md placeholder:text-base  ring-0  bg-[#f8f6f2] placeholder:text-gray-400 py-1 resize-none"
                            rows={6}
                            {...field}
                            maxLength={500}
                            placeholder="Mô tả món ăn "
                          />
                        </FormControl>
                        <div className="flex items-center justify-end h-4">
                          <span
                            className={cn(
                              "text-xs text-gray-400 hidden",
                              field.value?.length && "block"
                            )}
                          >
                            {field.value?.length} / 500
                          </span>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </section>
            <div className="sm:grid gap-6 mb-10 md:mb-14 grid-cols-[min(35%,300px),1fr] py-4">
              <section className=" lg:grid lg:grid-rows-[min-content_min-content]">
                <div className="mb-4 flex items-center gap-1 text-gray-600">
                  <PiCookingPot size={20} />
                  <h2 className="font-semibold text-lg ">Nguyên liệu</h2>
                </div>

                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="serves"
                    render={({ field }) => (
                      <FormItem className="w-full flex items-center justify-between space-y-0">
                        <div className="text-base text-gray-500">Phục vụ</div>

                        <FormControl className="w-full max-w-[50%] mt-0">
                          <Input
                            className="w-full h-10 rounded-md bg-[#f8f6f2]  mt-0"
                            {...field}
                            maxLength={50}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <IngredientList />
              </section>
              <div className="w-full pt-4 md:pt-0">
                <div className="mb-4 flex items-center gap-1 text-gray-600">
                  <MdOutlineEditCalendar size={20} />
                  <h2 className="font-semibold text-lg ">Các bước thực hiện</h2>
                </div>
                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem className="lg:max-w-[50%] flex items-center justify-between space-y-0">
                        <div className="text-base text-gray-500">
                          Thời gian nấu ăn
                        </div>
                        <FormControl className="w-full max-w-[50%] mt-0">
                          <Input
                            className="w-full h-10 rounded-md bg-[#f8f6f2]  mt-0"
                            {...field}
                            maxLength={50}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="">
                  <StepsList />
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RecipesFormInit;
