import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./index.css";
import {Navbar, Col} from "reactstrap"

const HeaderV = props => {
    return (
      <Navbar style={styles.azul} dark expand="md">
              <Col md = {3}> 
                 <img style={styles.logo} src = {props.image} alt ={props.title} />     
              </Col>
              <Col md = {3}>
              <Link to="/seeReports" className ="text-white">REPORTES</Link>
              </Col>
              <Col md = {3}>
                  <button type="button" className="btn btn-link text-white"> OFERTA DE PROYECTOS</button>
              </Col>
              <Col md = {3}>
              <Link to="/login" className ="text-white">CERRAR SESIÓN</Link>
              </Col>
      </Navbar>
  )
}
export default HeaderV;

// codigo para ver los proyectos
//<link to="/seeProjects" className="btn btn-link text-white"> OFERTA DE PROYECTOS</link>

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