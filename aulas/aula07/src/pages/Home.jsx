import { useEffect, useState } from "react";
import Menu from "../components/Menu";

function Home() {
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(()=>{
            setCarregando(false);
        }, 3000);
        return() => clearTimeout(timeout);
    }, []);

    return (
        <>
            <header>
                <h1>Aluno Online</h1>
            </header>
            <main>
                <Menu />
                <section>
                    <h2>Página Inicial</h2>
                    {carregando
                    ? <h3>Aguarde...</h3>
                    : <div className="card-grid">
                        <article>
                            <h3>Mural de Avisos</h3>
                            <ul>
                                <li></li>
                            </ul>
                        </article>
                        <article>
                            <h3>Agenda Acadêmica</h3>
                            <ul>
                                <li></li>
                            </ul>
                        </article>
                        <article>
                            <h3>Histórico de Notas</h3>
                            <ul>
                                <li></li>
                            </ul>
                        </article>
                        <article>
                            <h3>Histórico de Faltas</h3>
                            <ul>
                                <li></li>
                            </ul>
                        </article>
                    </div>}
                </section>
            </main>
        </>
    );
}

export default Home;