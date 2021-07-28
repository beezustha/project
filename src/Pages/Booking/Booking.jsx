import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Booking.css";

import axios from "axios";

function Booking() {
  const [arenaData, setArenaData] = useState([]);
  const [groundData, setGroundData] = useState([]);
  useEffect(async () => {
    getArenaData();
    getGroundId();
  }, []);
  const getArenaData = async () => {
    await axios
      .get("http://localhost:8080/api/v1/public/findAll")
      .then((response) => {
        setArenaData(response.data);
        console.log(response);
      });
  };

  const getGroundId = async () => {
    await axios
      .get("http://localhost:8080/api/v1/public/getbyFutsalid")
      .then((resp) => {
        setGroundData(resp.data);
        console.log(resp);
      });
  };
  return (
    <div className="book-form">
      <Container style={{ border: "1px solid black", marginTop: "20%" }}>
        <h1 style={{ color: "Black", marginTop: "20px" }}>Book Your Arena</h1>
        <hr />
        <Row className="mb-5">
          <Form.Group as={Col} controlId="formGridState">
            <h3>Select Arena</h3>
            <Form.Select defaultValue="Choose...">
              {arenaData.data.map((bookData, idx) => {
                return <option value={bookData.id}>{bookData.name}</option>;
              })}{" "}
            </Form.Select>
            <h3>Select Time</h3>
            <Form.Select defaultValue="Choose...">
              <option>7:00-8:00</option>
              <option value="7">7:00-8:00</option>
              <option value="8">8:00-8:00</option>
              <option value="9">9:00-8:00</option>
              <option value="10">10:00-11:00</option>
              <option value="11">11:00-12:00</option>
              <option value="12">12:00-01:00</option>
              <option value="1">01:00-02:00</option>
              <option value="2">02:00-03:00</option>
              <option value="3">03:00-04:00</option>
              <option value="4">04:00-05:00</option>
              <option value="5">05:00-06:00</option>
            </Form.Select>
            <h3>Select Date</h3>
          </Form.Group>
        </Row>

        <Button variant="dark" style={{ margin: "10%" }}>
          Book Now
        </Button>
      </Container>
    </div>
  );
}

export default Booking;
