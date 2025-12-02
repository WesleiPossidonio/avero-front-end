import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '../../../../components/ui/input';
import { Button } from '../../../../components/ui/button';
import { Label } from '../../../../components/ui/label';

const passwordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .max(100, 'A senha deve ter no máximo 100 caracteres'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

type PasswordFormData = z.infer<typeof passwordSchema>;

export const UpdatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit = async (data: PasswordFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Senha alterada:', data);

      alert('Senha alterada com sucesso!');
      reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : String(error ?? 'Erro desconhecido');
      alert('Erro ao alterar senha: ' + message);
    }
  };

  return (
    <div className="w-full max-w-4xl flex gap-12 justify-center py-20">
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-[85%] flex flex-col gap-6">
        <h3 className="text-sm font-semibold">Alterar a senha</h3>

        {/* Nova Senha */}
        <div className="flex flex-col gap-1">
          <Label htmlFor="newPassword" className="text-sm">Nova senha</Label>
          <Input
            id="newPassword"
            type="password"
            {...register('newPassword')}
            className="border p-2 text-sm"
          />
          {errors.newPassword && (
            <p className="text-xs text-red-500">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirmar */}
        <div className="flex flex-col gap-1">
          <Label htmlFor="confirmPassword" className="text-sm">Confirme sua senha</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            className="border p-2 text-sm"
          />
          {errors.confirmPassword && (
            <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-52 h-12 bg-black text-white font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
        </Button>
      </form>
    </div>
  );
};
