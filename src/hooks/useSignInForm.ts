import { User } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .refine((data) => data.trim() !== "", { message: "Senha é obrigatória" }),
});

const useSignInForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<User> = async (data, event) => {
    event?.preventDefault();
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response?.error) {
        setError("password", { message: "Email ou Senha inválido!" });
      } else {
        router.push("/");
      }
    } catch (error) {
        /*UTILIZAR COMPONENTE DE ERROR */
      console.error("Erro ao fazer login!", error);
    }
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useSignInForm;
