import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

export default function UseFormContext() {
  const methods = useForm();

  function onSubmit(data) {
    console.log(data);
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col w-96 m-center border-solid border-2 border-red-300 bg-yellow-100 my-ceter mt-12" onSubmit={methods.handleSubmit(onSubmit) }>
        <h3 className="text-center my-2">UseFormContext</h3>
        <Input placeholder={"Your name..."} type={"name"} />
        <Input placeholder={"Your email..."} type={"email"} />
        <Input placeholder={"Your number..."} type={"number"} />
        <Button text={'Send Form'}/>
      </form>
    </FormProvider>
  );
}
