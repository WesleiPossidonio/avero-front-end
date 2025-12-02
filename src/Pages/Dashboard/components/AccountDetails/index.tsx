import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useUser } from '@/hooks/useUser';

const accountSchema = z.object({
  fullName: z
    .string()
    .min(3, 'O nome deve ter pelo menos 3 caracteres')
    .max(100, 'O nome deve ter no máximo 100 caracteres'),
  email: z
    .string()
    .email('Digite um email válido')
    .min(1, 'O email é obrigatório')
});

type AccountFormData = z.infer<typeof accountSchema>;

export const AccountDetails = () => {
  const { userDataLogin } = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
  });

  const onSubmit = async (data: AccountFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Dados atualizados:', data);
      alert('Alterações salvas com sucesso!');
    } catch (error) {
      alert('Erro ao salvar alterações: ' + error);
    }
  };

  return (
    <div className="w-full max-w-4xl flex gap-12 justify-center py-4 md:py-20">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[85%] flex flex-col gap-6">
        <h3 className="text-sm font-semibold">Detalhes da conta</h3>

        {/* Avatar */}
        <div className="mb-4">
          <Avatar className="w-16 h-16 bg-indigo-100">
            <AvatarFallback className="text-indigo-600 font-medium text-lg">
              AN
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Nome */}
        <div className="flex flex-col gap-1">
          <Label htmlFor="fullName" className="text-sm">Nome completo</Label>
          <Input
            id="fullName"
            type="text"
            {...register('fullName')}
            className="border p-2 text-sm"
            defaultValue={userDataLogin.name}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="text-sm">Email</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            className="border p-2 text-sm"
            defaultValue={userDataLogin.email}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
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
