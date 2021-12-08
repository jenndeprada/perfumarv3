import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemDetailContainer";


function App() {
  return (
    <div className="App">
      < NavBar />
      < ItemListContainer />
      < ItemDetailContainer />
    </div>
  );
}

export default App;
