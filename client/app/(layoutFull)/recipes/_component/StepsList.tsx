"use client";
import DndContainer from "@/components/dndKit/DndContainer";
import DndItem, { DragItem } from "@/components/dndKit/DndItem";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useFieldArray, useFormContext } from "react-hook-form";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoList } from "react-icons/io5";
import { RecipesFormValue } from "./RecipesFormInit";

const StepsList = () => {
  const { control } = useFormContext<RecipesFormValue>();
  const { fields, append, remove, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "steps", // unique name for your Field Array
  });

  return (
    <div className="mt-4 gap-4 flex flex-col w-full">
      <DndContainer
        list={fields}
        setList={() => {}}
        dragEnd={(event) => {
          const { active, over } = event;
          if (!over || active.id === over.id) return;

          const oldIndex = fields.findIndex((c) => c.id === active.id);
          const newIndex = fields.findIndex((c) => c.id === over.id);
          move(oldIndex, newIndex);
        }}
        renderItem={(item, index) => (
          <DndItem id={item.id} className="flex gap-2 w-full bg-white">
            <div className="flex flex-col gap-1">
              <div className="size-6 rounded-full bg-gray-500 flex items-center justify-center text-white">
                {index}
              </div>

              <DragItem className="w-full flex justify-center">
                <button type="button" className="cursor-move">
                  <IoList size={24} />
                </button>
              </DragItem>
            </div>
            <div className="flex-1">
              <FormField
                control={control}
                name={`steps.${index}.name`}
                render={({ field }) => (
                  <FormItem className=" space-y-0">
                    <FormControl>
                      <Textarea
                        className="w-full rounded-md placeholder:text-base  ring-0  bg-[#f8f6f2] placeholder:text-gray-400 py-1 resize-none"
                        rows={3}
                        {...field}
                        maxLength={500}
                        placeholder="Mô tả món ăn "
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size={"sm"} variant={"outline"}>
                    <HiOutlineDotsHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" side="bottom">
                  <DropdownMenuItem
                    onClick={() => {
                      insert(index + 1, { name: "" });
                    }}
                    className="cursor-pointer"
                  >
                    Thêm bước
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      remove(index);
                    }}
                    className="cursor-pointer"
                  >
                    Xóa bước
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </DndItem>
        )}
      />

      <div className="mt-4 flex justify-center">
        <Button
          size={"sm"}
          type="button"
          variant={"ghost"}
          onClick={() => {
            append({ name: "" });
          }}
        >
          + Thêm bước
        </Button>
      </div>
    </div>
  );
};

export default StepsList;
