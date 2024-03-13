import React, { useState } from "react";
import { useForm, useFormState, FormProvider } from "react-hook-form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

// function Child({ control }) {
//   const { dirtyFields } = useFormState({
//     control,
//   });

//   return dirtyFields.firstName ? <p>Field is dirty.</p> : null;
// }

export default function UseFormState() {
  const methods = useForm();

  function onSubmit(data) {
    console.log(data);
    methods.reset();
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col w-96 m-center border-solid border-2 border-red-300 bg-yellow-100 my-ceter mt-12"
      >
        <h3 className="text-center my-2">UseFormState</h3>
        <Input type={"name"} placeholder={"Your name..."} />
        <Input type={"email"} placeholder={"Your email..."} />
        <Input type={"number"} placeholder={"Your number..."} />
        <Button text={"Send form"} />
      </form>
    </FormProvider>
  );
}
