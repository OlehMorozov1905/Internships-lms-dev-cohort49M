import { useEffect, useState } from 'react';
import { IProduct } from "../../types/types";
import Cart from "../cart/Cart";
import ShopProduct from "../shopProduct/ShopProduct";
import styles from './products.module.css';
import { useCart } from "../../context/cartContext";


export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { addToCart } = useCart();


  // * асинхронный запрос на сервер
  const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Cart />
      <div className={styles.shopContainer}>
        {products.map(el => (
          <>
            <div>
              <ShopProduct key={el.id} price={el.price} id={el.id} title={el.title} image={el.image} />
              <button onClick={()=> addToCart({id: el.id, title: el.title, price:el.price, quantity:1})}>добавить</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
