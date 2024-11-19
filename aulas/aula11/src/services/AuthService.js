import axios from "axios";

function autenticar(dados) {
  return axios
    .post("http://localhost:3000/login", {
      email: dados.email,
      password: dados.senha,
    })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { sucesso: false, msg: error.response.data };
      } else {
        return { sucesso: false, msg: error.message };
      }
    });
}

function cadastrar(dados) {
  return axios
    .post("http://localhost:3000/register", {
      email: dados.email,
      password: dados.senha,
      perfil: "aluno"
    })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { sucesso: false, msg: error.response.data };
      } else {
        return { sucesso: false, msg: error.message };
      }
    });
}

function alterar(dados) {
  return axios.put(`http://localhost:3000/users/${dados.id}`,{
    email: dados.email,
    password: dados.senha
  })
  .then((response) => {
    return { sucesso: true, dados: response.data };
  })
  .catch((error) => {
    if (error.response) {
      return { sucesso: false, msg: error.response.data };
    } else {
      return { sucesso: false, msg: error.message };
    }
  });
}

export { autenticar, cadastrar, alterar };
