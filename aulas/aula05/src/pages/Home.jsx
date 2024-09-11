import Menu from "../components/Menu";

function Home (props) {
    return (
        <>
            <h1>Pagina Inicial</h1>
            <Menu navegaPara={props.navegaPara}/>
        </>
    );
}
  
export default Home;