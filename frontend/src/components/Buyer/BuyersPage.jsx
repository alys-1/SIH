import React from "react";
import styles from "./BuyersPage.module.css"; // Importing CSS module

const BuyersPage = () => {
  const products = [
    {
      name: "Corn",
      available: "100 Kg",
      description: "Fresh corn from organic farms",
      imgSrc: "https://via.placeholder.com/250x150",
    },
    {
      name: "Wheat",
      available: "50 Kg",
      description: "Premium wheat, ideal for baking",
      imgSrc: "https://via.placeholder.com/250x150",
    },
    {
      name: "Rice",
      available: "200 Kg",
      description: "High-quality rice, perfect for everyday meals",
      imgSrc: "https://via.placeholder.com/250x150",
    },
    {
      name: "Barley",
      available: "120 Kg",
      description: "Healthy barley, rich in nutrients",
      imgSrc: "https://via.placeholder.com/250x150",
    },
    {
      name: "Soybeans",
      available: "80 Kg",
      description: "Freshly harvested soybeans",
      imgSrc: "https://via.placeholder.com/250x150",
    },
    {
      name: "Oats",
      available: "90 Kg",
      description: "High-fiber organic oats",
      imgSrc: "https://via.placeholder.com/250x150",
    },
  ];

  return (
    <div>
      <center>
        {/* Heading outside the container */}
        <header className={styles.pageHeader1}>
          <h1>Search and Filter Produce</h1>
        </header>
      </center>

      {/* Main Container */}
      <div className={styles.container}>
        <header>
          <h1 className={styles.title}>Popular Products</h1>
        </header>

        <div className={styles.productsContainer}>
          {products.map((product, index) => (
            <div className={styles.product} key={index}>
              <img
                src={product.imgSrc}
                alt={product.name}
                className={styles.productImage}
              />
              <h2 className={styles.productTitle}>{product.name}</h2>
              <p className={styles.quantity}>Available: {product.available}</p>
              <p className={styles.productDescription}>{product.description}</p>
              <button className={styles.button}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyersPage;
