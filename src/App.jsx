import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import ProductListing from "./pages/ProductListing";
import ItemDetail from "./pages/ItemDetail";
import productData from "./util/products.json";
import Footer from "./components/footer/Footer";
import "./app.scss";

const App = () => {
  const [itemsInBasket, setItemsInBasket] = useState([]);

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(productData);
    if (localStorage.getItem("basket")) {
      setItemsInBasket(JSON.parse(localStorage.getItem("basket")));
    }
  }, []);

  const addToBasket = itemId => {
    const addedItem = itemList.find(item => item.id === itemId);

    setItemsInBasket(prevState => {
      const alreadyInBasket = prevState.map(i => i.id).indexOf(addedItem.id);
      if (alreadyInBasket !== -1) {
        const updatedItem = prevState[alreadyInBasket];
        updatedItem.quantity++;
        prevState = prevState.filter((item, index) => index !== alreadyInBasket);
        return [...prevState, updatedItem];
      } else {
        return [...prevState, { ...addedItem, quantity: 1 }];
      }
    });

    setTimeout(() => {
      localStorage.setItem("basket", JSON.stringify(itemsInBasket));
    }, 500);
  };

  const clearBasket = () => {
    setItemsInBasket([]);
  };

  return (
    <div>
      <Toaster />
      <Header basket={itemsInBasket} clearBasket={clearBasket} />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/sustainable" />} />
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
