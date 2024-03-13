import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function UseFormFieldArray() {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      cart: [{ name: "", amount: 0 }],
    },
  });

  const { fields, append, prepend, remove } = useFieldArray({
    control,
    name: "cart",
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-96 m-center border-solid border-2 border-red-300 bg-yellow-100 my-ceter mt-12"
    >
      {fields.map((field, index) => {
        return (
          <section
            key={field.id}
            className="flex justify-between w-96 m-center my-ceter mt-12"
          >
            <div>
              <label
                htmlFor=""
                className="flex flex-col justify-center text-center my-2"
              >
                <span>Name</span>
                <input
                  type="text"
                  {...register(`cart.${field.id}.name`)}
                  className="bg-yellow-300 hover:bg-yellow-500 focus:border-solid border-5 border-green-800 mb-2"
                />
              </label>
              <label
                htmlFor=""
                className="flex flex-col justify-center text-center my-2"
              >
                <span>Number</span>
                <input
                  type="number"
                  {...register(`cart.${field.id}.amount`)}
                  className="bg-yellow-300 hover:bg-yellow-500 focus:border-solid border-5 border-green-800 mb-2"
                />
              </label>
            </div>
            <button
              className="bg-yellow-400 rounded-md min-w-28 mt-4 h-10"
              onClick={() => {
                remove(index);
              }}
            >
              Delete
            </button>
          </section>
        );
      })}
      <button
        className="bg-yellow-400 rounded-md min-w-28 mt-4"
        onClick={() => {
          append({
            name: "append",
            amount: 123,
          });
        }}
      >
        Append
      </button>
      <button
        className="bg-yellow-400 rounded-md min-w-28 mt-4"
        onClick={() => {
          prepend({
            name: "prepend",
            amount: 321,
          });
        }}
      >
        Prepend
      </button>
      <button type="submit" className="bg-yellow-400 rounded-md min-w-28 mt-4">
        Send Form
      </button>
    </form>
  );
}
