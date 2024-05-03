import { User } from "@/types/User";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().refine((data) => data.trim() !== "", {
    message: "Nome é obrigatório",
  }),
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(8, { message: "Senha deve ter no mínimo 8 caracteres" })
    .refine(
      (data) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/.test(
          data
        ),
      {
        message:
          "Senha deve conter pelo menos um número, uma letra maiúscula, uma letra minúscula e um caractere especial",
      }
    ),
});

export const useSignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<User>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<User> = async (data, event) => {
    event?.preventDefault();

    try {
      /*Checar API*/
      await axios
        .post("/api/register", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          router.push("/");
        });
    } catch (error) {
      /*UTILIZAR COMPONENTE DE ERROR QUANDO CRIAR */
      console.error("Erro durante o registro:", error);
      setError("root", {
        message: "Erro durante o registro. Por favor, tente novamente.",
      });
    }
  };

  return { register, handleSubmit, errors, onSubmit };
};
