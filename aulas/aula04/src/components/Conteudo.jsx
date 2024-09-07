function Conteudo (props) {
    return( 
        <main className={props.estilo}>{props.children}</main>
    );
}

export default Conteudo;

// {props.children} = Exibe um componente que tem filhos (varias tags)