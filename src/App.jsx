import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import ProductListing from "./pages/ProductListing";
import ItemDetail from "./pages/ItemDetail";
import "./app.scss";

const App = () => {
  const [itemsInBasket, setItemsInBasket] = useState([{}]);

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(); // IMPORTS ITEMS FROM JSON FILE AND ADDS TO STATE
  }, []);

  const addToBasket = (itemId) => {
    const addedItem = itemList.find((item) => item.id === itemId);
    setItemsInBasket((prevState) => [...prevState, addedItem]);
  };

  return (
    <div>
      <Header basket={itemsInBasket} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/sustainable"
            element={<ProductListing itemList={itemList} />}
          />
          <Route
            path="/sustainable/:id"
            element={
              <ItemDetail itemList={itemList} addToBasket={addToBasket} />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
