import React from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

let countSymbol = 0;

function UseWacth({ control }) {
  useWatch({
    name: ["name", "email", "number"],
  });

  // countSymbol += 0.5;
  countSymbol++;

  return (
    <div className="flex justify-center w-full mt-3">
      <p>Count click: {countSymbol}</p>
    </div>
  );
}

export default function UseFormWatch() {
  const { control } = useForm();
  const methods = useForm();

  function onSubmit(data) {
    console.log(data);
    methods.reset();
  }

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col w-96 m-center border-solid border-2 border-red-300 bg-yellow-100 my-ceter mt-12"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <h3 className="text-center my-2">UseFormWatch</h3>
        <Input placeholder={"Your name..."} type={"name"} />
        <Input placeholder={"Your email..."} type={"email"} />
        <Input placeholder={"Your number..."} type={"number"} />
        <Button text={"Send Form"} />
        <UseWacth control={control} />
      </form>
    </FormProvider>
  );
}
