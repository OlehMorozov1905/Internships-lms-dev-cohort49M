import { useEffect, useState } from 'react';
import { IProduct } from "../../types/types";
import styles from './products.module.css';
import { Link } from "react-router-dom";


export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  // * асинхронный запрос на сервер
  const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className={styles.shopContainer}>
        {products.map(el => (
          <div className={styles.shopContainerCard} key={el.id}>
            <h3>{el.title}</h3>
            <div className={styles.imgWrapper}>
              <img src={el.image} alt="" />
            </div>
            <Link to={String(el.id)}>To product</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
