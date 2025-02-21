import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFieldArray, useFormContext } from "react-hook-form";
import { MdOutlineDeleteOutline } from "react-icons/md";

const IngredientList = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "ingredients", // unique name for your Field Array
  });

  return (
    <div className="flex flex-col gap-4 w-full mt-2 md:pb-0 border-b md:border-none border-gray-200 pb-4">
      {fields.map((field, index) => (
        <div className="" key={index}>
          <FormField
            control={control}
            name={`ingredients.${index}.name`}
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Input
                    className="w-full bg-[#f8f6f2] placeholder:text-gray-300"
                    {...field}
                    placeholder="Gạo"
                  />
                </FormControl>
                <Button
                  className="bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white"
                  size={"icon"}
                  type="button"
                  onClick={() => remove(index)}
                >
                  <MdOutlineDeleteOutline size={20} />
                </Button>
              </FormItem>
            )}
          />
        </div>
      ))}

      <div className="w-full flex justify-center mt-2">
        <Button
          className=""
          size={"sm"}
          variant={"ghost"}
          type="button"
          onClick={() => append({ name: "" })}
        >
          + Thêm nguyên liệu
        </Button>
      </div>
    </div>
  );
};

export default IngredientList;
