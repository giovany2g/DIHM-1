import React from 'react';
import {Col, Container, Row, Label} from "reactstrap"

const FooterV = props => {
    return (
        <Container>
            <footer style={styles.azul}>
                <Row>
                <Col md = {3}>
                <Label className ="text-white"  >Universidad del caribe ©2020</Label>
                </Col>
                <Col md = {3}>
                    <button type="button" className="btn btn-link text-white"> Ubicación</button>
                </Col>
                <Col md = {3}> 
                    <img style={styles.logo} src = {props.image} alt ={props.title} />     
                </Col>
                <Col md = {3}>
                    <button type="button" className="btn btn-link text-white"> Politicas de privacidad</button>
                </Col>
                </Row>
            </footer>
        </Container>

    )
}
export default FooterV;

const styles ={
    logo: {
       maxWidth:200,
       background: "#F0F4F8",
       border: 3,
       solid: "#0E153B",
       borderRadius: 50,
    },
    azul:{
        backgroundColor: "#0E153B",
    }
  }