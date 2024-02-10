import React from "react";
import { Button, Card } from "react-bootstrap";

function ProductCard(props) {
  let { image, price, title, id } = props.data;

  //Using useState hook to hold and update the states of variables

  const { addItem } = useCart();

  function addToCart() {
    addItem(props.data);
  }

  return (
    <Card style={{ width: "18rem", height: "auto" }}>
      <Link to={`/product-details/${id}`}>
        <div
          style={{
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
            <Card.Img variant="top" src={image} className="img-fluid" />
          </div>
        </div>
      </Link>
      <Card.Body>
        <Card.Title
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Card.Title>
        <Card.Title>
          Ksh. <span className="h3">{price}</span>
        </Card.Title>
        <Button onClick={() => addToCart()}>
          <BsCartPlus size="1.8rem" />
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
