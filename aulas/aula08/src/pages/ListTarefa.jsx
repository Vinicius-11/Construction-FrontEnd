import { useContext, useEffect } from "react";
import { TarefaContext } from "../contexts/TarefaContext";

function ListTarefa() {
  const { tarefas, remover, carregar } = useContext(TarefaContext);

  useEffect(() => {
    carregar();
  }, []);

  return (
    <ul>
      {tarefas.map((item, index) => (
        <li key={index}>
          {item.tarefa}
          <button onClick={() => remover(item)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTarefa;