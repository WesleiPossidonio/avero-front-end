import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useUser } from "../../hooks/useUser";


// Schema de validação
const LoginSchema = z.object({
  email: z.string().email("Digite um e-mail válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type LoginForm = z.infer<typeof LoginSchema>;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });

  const { handleGoogleLogin } = useUser()

  function onSubmit(data: LoginForm) {
    console.log("Login:", data);
  }

  return (
    <div className="w-full flex justify-center py-20 px-4">
      <div className="w-[360px] flex flex-col items-center gap-6">
        <p className="self-start mb-4">Faça seu login para continuar</p>
        <button className="w-full border rounded-md py-2 flex items-center
         justify-center gap-2 text-sm" onClick={handleGoogleLogin}>
          <img src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-4 h-4" />
          Continuar com o Google
        </button>

        <div className="flex items-center w-full gap-4 text-xs text-gray-400">
          <div className="flex-1 h-[1px] bg-gray-200" />
          ou
          <div className="flex-1 h-[1px] bg-gray-200" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
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
            <span className="text-[11px] text-gray-500 cursor-pointer text-right">
              Esqueceu sua senha?
            </span>
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white py-2 text-sm rounded-none"
          >
            LOGIN
          </Button>
        </form>

        <p className="text-xs text-gray-500">
          Não tem uma conta?{" "}
          <a href="#" className="underline cursor-pointer">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}

