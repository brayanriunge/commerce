import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

function ProductCard(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);
  // let { image, price, title, id } = props.data;

  // //Using useState hook to hold and update the states of variables

  // const { addItem } = useCart();

  // function addToCart() {
  //   addItem(props.data);
  // }

  return (
    <section>
      {products.map((product) => (
        <Card style={{ width: "18rem", height: "auto" }}>
          <div
            style={{
              products,
              background: "white",
              height: "15rem",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "inherit",
            }}
          >
            <div style={{ width: "9rem" }}>
              <Card.Img
                variant="top"
                src={product.image}
                className="img-fluid"
              />
            </div>
          </div>

          <Card.Body>
            <Card.Title
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {product.title}
            </Card.Title>
            <Card.Title>
              Ksh. <span className="h3">{product.price}</span>
            </Card.Title>
            <Button onClick={() => addToCart()}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
}

export default ProductCard;
