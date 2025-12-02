import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";


// Schema de validação
const RegisterSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Digite um e-mail válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type RegisterForm = z.infer<typeof RegisterSchema>;

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterSchema),
  });

  function onSubmit(data: RegisterForm) {
    console.log("Register:", data);
  }

  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-[360px] flex flex-col items-center gap-6 px-4">
        <p className="self-start">Inscreva-se</p>
        {/* Botão Google */}
        <button className="w-full border rounded-md py-2 flex items-center justify-center gap-2 text-sm">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-4 h-4" />
          Continuar com o Google
        </button>

        {/* Divider */}
        <div className="flex items-center w-full gap-4 text-xs text-gray-400">
          <div className="flex-1 h-[1px] bg-gray-200" />
          ou
          <div className="flex-1 h-[1px] bg-gray-200" />
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <div className="w-full flex flex-col gap-1">
            <label className="text-xs">Nome</label>
            <Input
              type="Nome"
              placeholder="Digite seu Nome"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col gap-1">
            <label className="text-xs">Email</label>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col gap-1">
            <label className="text-xs">Senha</label>
            <Input
              type="password"
              placeholder="Sua senha"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
            <span className="text-[11px] text-gray-500 cursor-pointer self-start text-start">
              Ao criar uma conta, você concorda com nossos Termos <br />
              de Serviço, Política de Privacidade.
            </span>
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white py-2 text-sm rounded-none"
          >
            CRIAR CONTA
          </Button>
        </form>
      </div>
    </div>
  );
}

