function InputEmail({register, error}) {
  const regras = {
    required: {value:  true, message: "Email é obrigatório"},
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Formato inválido",
    },
  };

  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input type="email" {...register("email", regras)} />
      {error && <p>{error.message}</p>}
    </>
  );
}
  
  export default InputEmail;