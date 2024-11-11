const root = document.getElementById("root");

// Criação da main - do conteudo da pagina
function Conteudo(...elementos){
    const main = document.createElement("main");
    elementos.forEach((elemento) => main.append(elemento));
    return main;
  }
  

// Criação do Rodape
function Rodape(texto){
    const paragrafo = document.createElement("p");
    paragrafo.innerText = texto;
    const footer = document.createElement("footer");
    footer.append(paragrafo);
    return footer;
  }
   

// Criação do H1 do Titulos das paginas

function Titulo(texto){
    const h1 = document.createElement("h1");
    h1.innerText = texto;
    return h1;
  }
  

// Criação do Icones que vao ser usados
function Icone(origem, texto){
  const img = document.createElement("img");
  img.setAttribute("src", origem);
  img.setAttribute("alt", texto);
  return img;
}

  
  

// Criação do Input 
function Input(id, tipo, rotulo){
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerText = rotulo;
    const input = document.createElement("input");
    input.setAttribute("type", tipo);
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    const div = document.createElement("div");
    div.append(label, input);
    return div;
  }
  
  

// Criação do InputSubmit que vai ter o input
function InputSubmit(valor){
    const input = document.createElement("input");
    input.setAttribute("type", "submit");
    input.setAttribute("value", valor);
    return input;
  }
  

// Criação da função link 
function Link(rota, texto){
    const a = document.createElement("a");
    a.setAttribute("href", rota);
    a.innerText = texto;
    return a;
  }
  

// Criação da função para que o formulario nao seja enviado
function onLogin(event){
    event.preventDefault();
    Navega("/home");
 }
 

// Criação do Login
function FormLogin(){
    const form = document.createElement("form");
    form.setAttribute("action", "/login");
    form.setAttribute("method", "post");
    const inputEmail = Input("email", "email", "E-mail");
    const inputSenha = Input("senha", "password", "Senha");
    const inputEntrar = InputSubmit("Entrar");
    form.append(inputEmail, inputSenha, inputEntrar);
    form.addEventListener("submit", onLogin);
    return form;
  }


// Criação do Formulario da Pagina Login
function PageLogin(){
    const logo = Icone("https://www.svgrepo.com/show/411955/learn.svg", "Logo da Aplicação");
    const titulo = Titulo("Aluno Online");
    const form = FormLogin();
    const link = Link("/esqueceu-senha", "Esqueceu sua Senha?");
    const conteudo = Conteudo(logo, titulo, form, link);
    conteudo.setAttribute("class", "login-container")
    const rodape = Rodape("Copyright (C) 2024");
    root.append(conteudo, rodape);
    document.title = "Login - Aluno Online";
  }
  
  
// Criação da função do NAVEGA, para trocar as paginas
function Navega(rota){
    root.innerHTML = null;
    if (rota === "/login") {
      PageLogin();
    } else if (rota === "/home") {
      PageHome();
    } else if (rota === "/perfil") {
      PagePerfil();
    } else {
      root.innerHTML = "<p>Página não encontrada!</p>";
    }
  }
  

// Criação da funçao navega junto com o login para recarregar a pagina
Navega("/login");

function InputSearch(){
    const input = document.createElement("input");
    input.setAttribute("type", "search");
    input.setAttribute("placeholder", "Pesquisar...");
    return input;
  }
  

// Criação do Cabeçalho
function Cabecalho() {
    const logo = Icone(
      "https://www.svgrepo.com/show/411955/learn.svg",
      "Logo da Aplicação"
    );
    const titulo = Titulo("Aluno Online");
    const grupo1 = document.createElement("div");
    grupo1.append(logo, titulo);
    const input = InputSearch();
    const icone = Icone(
      "https://www.svgrepo.com/show/507851/search-square.svg",
      "Ícone de Pesquisar"
    );
    const grupo2 = document.createElement("div");
    grupo2.append(input, icone);
    const header = document.createElement("header");
    header.append(grupo1, grupo2);
    return header;
  }
  

// Criação da função do click no menu
function onClickMenu(event){
    event.preventDefault();
    Navega(event.target.getAttribute("href"));
 }
 

// Criação do Menu, HOME, PERFIL, SAIR
function Menu() {
    const opcoes = [
      { rota: "/home", titulo: "Home" },
      { rota: "/perfil", titulo: "Perfil" },
      { rota: "/login", titulo: "Sair" },
    ];
    const lista = document.createElement("ul");
    opcoes.forEach((opcao) => {
      const link = Link(opcao.rota, opcao.titulo);
      link.addEventListener("click", onClickMenu);
      const item = document.createElement("li");
      item.append(link);
      lista.append(item);
    });
    const nav = document.createElement("nav");
    nav.append(lista);
    return nav;
  }
  

// Criação do Subtitulo
function Subtitulo(texto){
    const h2 = document.createElement("h2");
    h2.innerText = texto;
    return h2;
  }
  

// Criação do PAINEL 
function Painel(nome) {
    const titulo = document.createElement("h3");
    titulo.innerText = nome;
    const lista = document.createElement("ul");
    const painel = document.createElement("article");
    painel.append(titulo, lista);
    return painel;
  }
  

// Criação da Seção da pagina
function Secao(nome, conteudo) {
    const titulo = Subtitulo(nome);
    const section = document.createElement("section");
    section.append(titulo, conteudo);
    return section;
  }
  

// Criação da Pagina HOME
function PageHome() {
    const menu = Menu();
    const grupo = document.createElement("div");
    const itens = [
      "Mural de Avisos",
      "Agenda Acadêmica",
      "Histórico de Notas",
      "Histórico de Faltas",
    ];
    itens.forEach((item) => grupo.append(Painel(item)));
    const secao = Secao("Página Inicial", grupo);
    const conteudo = Conteudo(menu, secao);
    const cabecalho = Cabecalho();
    root.append(cabecalho, conteudo);
    document.title = "Home - Aluno Online";
  }
  

// Criaçao da função Salvar
function onSalvar(event){
    event.preventDefault();
    Navega("/perfil");
 }
 

//  Criaçaõ do perfil
function FormPerfil() {
    const form = document.createElement("form");
    form.setAttribute("action", "/perfil");
    form.setAttribute("method", "post");
    const inputNome = Input("nome", "text", "Nome");
    const inputEmail = Input("email", "email", "E-mail");
    const inputSenha = Input("senha", "password", "Senha");
    const inputSalvar = InputSubmit("Salvar");
    form.append(inputNome, inputEmail, inputSenha, inputSalvar);
    form.addEventListener("submit", onSalvar);
    return form;
  }
  

// Criação da pagina do Perfil - organização
function PagePerfil() {
    const menu = Menu();
    const form = FormPerfil();
    const secao = Secao("Perfil do Aluno", form);
    const conteudo = Conteudo(menu, secao);
    const cabecalho = Cabecalho();
    root.append(cabecalho, conteudo);
    document.title = "Perfil - Aluno Online";
  }
      
  