"use client";

import { useGetTodos } from "@/hooks/useGetTodos";
import { useForm } from "react-hook-form";

export default function TodoForm() {
  const { handleSubmit, register, reset } = useForm<{ title: string }>();
  const { mutate } = useGetTodos();

  return (
    <form
      onSubmit={handleSubmit(async (value) => {
        const res = await fetch("/api/todo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        });
        console.log(res);
        reset();
        mutate();
      })}
    >
        <input
          type="text"
          placeholder="Enter your todo"
          {...register("title")}
        />
        <button
          type="submit"
        >
            Add
        </button>
    </form>
  );
}