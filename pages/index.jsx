import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);

  //Fetching product data from API using fetch and the useEffect Hook and displaying them
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((r) => r.json())
      .then((json) => {
        setProductData(json); //Updating the state of product data to the fetched product array
        console.log(productData);
      });
  }, []); //Empty dependencies array to fetch the data only once

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <h1>Search Products</h1>
          <InputGroup className="mb-3">
            <InputGroup.Text></InputGroup.Text>
            <Form.Control
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputGroup>
        </Col>
        {/**Using search filter to filter the displayed products */}
        {/* <SearchFilter
          value={searchInput}
          data={productData}
          renderResults={(results) => (
            <Row className="justify-content-center">
              {results.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))}
            </Row>
          )}
        /> */}
      </Row>
    </Container>
  );
}

export default Home;
