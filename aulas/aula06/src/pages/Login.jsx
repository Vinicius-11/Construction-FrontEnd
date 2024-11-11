import {useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Login</h1>
            <button onClick={() => navigate("/home")}>Entrar</button>
        </>
    );
}

export default Login;