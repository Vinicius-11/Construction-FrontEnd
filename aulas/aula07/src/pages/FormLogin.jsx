import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';

function FormLogin() {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm();

  return (
    <form onSubmit={handleSubmit((data) => { navigate("/home")})}>
      <InputEmail register={register} error={errors.email} />
      <InputSenha register={register} error={errors.senha} />
      <button>Entrar</button>
    </form>
  );
}
  
  export default FormLogin;