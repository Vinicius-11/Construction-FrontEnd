const root = document.getElementById("root");

/* componentes da aplicação */

// Criação do Cabeçalho
function Cabecalho() {
    const logo = Imagem("https://www.svgrepo.com/show/489120/school.svg", "Logo da Aplicação")
    const titulo = Titulo("Aluno Online");
    const grupo1 = document.createElement("div");
    grupo1.append(logo, titulo);

    const pesquisar = InputSearch();
    const icone = Imagem("", "Icone de Pesquisar");
    const grupo2 = document.createElement("div");
    grupo2.append(pesquisar, icone);

    const header = document.createElement("header");
    header.append(grupo1, grupo2);
    return header;
}

function Principal (){
    const main = document.createElement("main");
    return main;
}

function Rodape(texto){
    const paragrafo = document.createElement("p");
    paragrafo.innerText = texto;
    const footer = document.createElement("footer");
    footer.append(paragrafo);
    return footer;
}

function Botao(nome) {
    const button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.setAttribute("value", nome);
    return button;
}

function Input(id, tipo, rotulo, obrigatorio = false) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerText = rotulo;
    const input = document.createElement("input");
    input.setAttribute("type", tipo);
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    if (obrigatorio) input.setAttribute("required", "");
    const grupo = document.createElement("div");
    grupo.append(label, input);
    return grupo;
}

function InputSearch () {
    const input = document.createElement("input");
    input.setAttribute("type", "search");
    input.setAttribute("placeholder", "Pesquisar...");
    return input;
}

// Criação do Link Esqueceu Senha
function Link(texto, rota){
    const link = document.createElement("a");
    link.setAttribute("href", rota);
    link.innerText = texto;
    return link;
}

// Criação do Titulo da Pagina
function Titulo(texto) {
    const titulo = document.createElement("h1");
    titulo.innerText = texto;
    return titulo;
}

// Criação da img
function Imagem(origem, texto) {
    const img = document.createElement("img");
    img.setAttribute("src", origem);
    img.setAttribute("alt", texto);
    return img;
}

// Criação do Menu
function Menu() {
    const lista = document.createElement("ul");
    const opcoes = [
        {menu: "Home", rota: "/home"},
        {menu: "Perfil", rota: "/perfil"},
        {menu: "Sair", rota: "/login"}
    ];
    opcoes.forEach((opcao) => {
        const link = Link(opcao.menu, opcao.rota);
        link.addEventListener("click", (event) => {
            event.preventDefault();
            navega(event.target.getAttribute("href"));
        })
        const item = document.createElement("li");
        item.append(link);
        lista.append(item);
    });

    const nav = document.createElement("nav");
    nav.append(lista);
    return nav;
    
}

// Criação de um formulario
function Formlogin(){
    const button = Botao("Entrar");
    // button.addEventListener("click", (event) => {
    //     alert("clicou")
    // })

    const email = Input("email", "email", "E-mail");
    const senha = Input("senha", "password", "Senha");

    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("method", "post");
    form.append(email, senha, button);

    // quando clicar a pagina nao vai atualizar
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // chamada ao backend
        navega("/home");
    })
    return form;
}

function FormPerfil() {
    const nome = Input("nome", "text", "Nome");
    const email = Input("email", "email", "E-mail");
    const senha = Input("senha" , "password", "Senha");
    const salvar = Botao("Salvar");
    const form = document.createElement("form")
    form.append(nome, email, senha, salvar);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        navega("/perfil");
    });
    return form;
}

// Utilitarios

// apagar o conteudo da div
function navega(rota) {
    root.innerText = "";
    if (rota === "/login") {
        Login();
    } else if (rota === "/home") {
        Home();
    } else if (rota === "/perfil") {
        Perfil();
    } else {
        root.innerText === "<p>Deu Ruim!</p>";
    }

}

// FUNCIONAMENTO DAS PAGINAS 

function Perfil(){
    const cabecalho = Cabecalho();
    const main = Principal();
    const menu = Menu();
    const form = FormPerfil();
    main.append(menu);
    root.append(cabecalho, main);
}

function Home(){
    const logo = Imagem("https://www.svgrepo.com/show/489120/school.svg");
    const cabecalho = Cabecalho();
    const main = Principal();
    const menu = Menu();
    main.append(menu)
    root.append(cabecalho, main);
}

function Login() {
    const logo = Imagem("https://www.svgrepo.com/show/489120/school.svg", "Logo da Aplicação");
    const titulo = Titulo("Aluno Online");
    const link = Link("Esqueceu a Senha?", "/esqueceu-senha");
    const form = Formlogin();
    const main = Principal();
    main.setAttribute("class", "login-container");
    main.append(logo, titulo, form, link);

    const rodape = Rodape("Copyright (C) 2024");
    root.append(main, rodape);
}

Login();