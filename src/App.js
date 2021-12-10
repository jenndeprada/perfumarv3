import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CartProvider } from './context/CartContext';

function App() {
  

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
            < NavBar />
            <Routes>
              <Route path="/"element={< ItemListContainer />}/>
              <Route path="/detail/:itemId"element={< ItemDetailContainer />}/>
              <Route path="/category/:categoryId"element={< ItemDetailContainer />}/>
              <Route path="*"element={<Navigate to="/"/>}/> 
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );

}

export default App;
