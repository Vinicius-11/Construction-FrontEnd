import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import InputNome from '../components/InputNome';


function FormPerfil() {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm();

  return (
    <form onSubmit={handleSubmit((data) => { navigate("/perfil")})}>
      <InputNome register={register} error={errors.nome} />
      <InputEmail register={register} error={errors.email} />
      <InputSenha register={register} error={errors.senha} />
      <button>Salvar</button>
    </form>
  );
}
  
export default FormPerfil;