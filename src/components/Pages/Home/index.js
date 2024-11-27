import Header from '../../Header';
import { AppContainer } from './styles';
import Pesquisa from '../../Pesquisa';
import UltimosLancamentos from '../../UltimosLancamentos';

function App() {

  return (
    <AppContainer>
      <Header />
      <Pesquisa/>
        <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
