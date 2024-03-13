import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button/Button";

export default function UseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      text: "",
      email: "",
      number: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data -", data);
    console.log("control -", control);
    reset();
  };

  return (
    <form
      className="flex flex-col w-96 m-center border-solid border-2 border-red-300 bg-yellow-100 my-ceter mt-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-center my-2">UseForm</h3>

      <input
        {...register("name", {
          maxLength: 25,
          minLength: 3,
          required: "Invalid name",
        })}
        type="name"
        placeholder="Your name..."
        className="bg-yellow-300 hover:bg-yellow-500 focus:border-solid border-5 border-green-800 mb-2"
      />
      {errors.name && <div className="text-center">Invalid value</div>}

      <input
        {...register("email", {
          required: "Invalid email",
          pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
        placeholder="Your email..."
        type="email"
        className="bg-yellow-300 hover:bg-yellow-500 focus:border-solid border-5 border-green-800 mb-2"
      />
      {errors.email && <div className="text-center">Invalid email</div>}

      <input
        {...register("number", {
          required: "Invalid number",
          pattern: /[0-9]{5,11}/,
        })}
        placeholder="Your number..."
        type="number"
        className="bg-yellow-300 hover:bg-yellow-500 focus:border-solid border-5 border-green-800 mb-2"
      />
      {errors.number && <div className="text-center">Invalid number</div>}
      <Button text={"Send Form"} />
    </form>
  );
}
