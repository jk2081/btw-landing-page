"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the Zod schema for form validation
const formSchema = z.object({
  email: z.string().email("Invalid email format").nonempty("Email is required"),
});

// Define the TypeScript type based on the Zod schema
type FormData = z.infer<typeof formSchema>;

export default function SubscribeNewsletter() {
  // Use the form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [message, setMessage] = useState("");

  // Define the onSubmit function with correct type
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setMessage(""); // Clear any previous messages

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }), // data.email should now be recognized
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        reset(); // Clear the form after successful submission
      } else {
        setMessage("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message); // Use the error message if available
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="p-2 border rounded-md"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Subscribe
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
