import { useFormContext } from "react-hook-form";

export default function Input({ type, placeholder }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log('error',errors);

  return (
    <>
      <input
        {...register(type, {
          required: "Invalid value",
          onChange: (e) => console.log(`Field ${type}:`, e.target.value),
        })}
        type={type}
        placeholder={placeholder}
        className="bg-yellow-300 hover:bg-yellow-500 focus:border-solid border-5 border-green-800 mb-2"
      />
      {errors?.[type] && <div className="text-center my-1">Invalid value</div>}
    </>
  );
}
