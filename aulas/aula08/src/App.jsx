import { TarefaProvider } from "./contexts/TarefaContext";
import FormTarefa from "./pages/FormTarefa";
import ListTarefa from "./pages/ListTarefa";

function App() {
  return (
    <TarefaProvider>
      <h1>Lista de Tarefas</h1>
      <FormTarefa />
      <ListTarefa />
    </TarefaProvider>
  );
}

export default App;