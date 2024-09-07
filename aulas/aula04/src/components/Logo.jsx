import './Logo.css';

function Logo(props) {
    return <img 
    className="logo" 
    src={props.imagem} 
    alt={props.texto}
    />;
}

export default Logo;








// import style from './Logo.css';
//<img className={style.logo} src="" alt=""/>

// import './Logo.css';
//<img className="logo" src="" alt=""/>