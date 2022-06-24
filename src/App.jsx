import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import ProductListing from "./pages/ProductListing";
import ItemDetail from "./pages/ItemDetail";
import productData from "./util/products.json";
import Footer from "./components/footer/Footer";
import "./app.scss";

const App = () => {
  const [itemsInBasket, setItemsInBasket] = useState([{}, {}]);

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(productData);
    if (localStorage.getItem("basket")) {
      setItemsInBasket(JSON.parse(localStorage.getItem("basket")));
    }
  }, []);

  const addToBasket = itemId => {
    const addedItem = itemList.find(item => item.id === itemId);
    setItemsInBasket(prevState => [...prevState, addedItem]);
    localStorage.setItem("basket", JSON.stringify([...itemsInBasket, addedItem]));
  };

  return (
    <div>
      <Header basket={itemsInBasket} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sustainable" element={<ProductListing itemList={itemList} />} />
          <Route
            path="/sustainable/:id"
            element={<ItemDetail itemList={itemList} addToBasket={addToBasket} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
