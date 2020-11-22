import Axios from "axios";
import React, { Component } from "react";
import { setErrors } from "./setErrors";
import {FormGroup,Jumbotron, Label,Input, Col, Container, Row} from "reactstrap"

export default class formV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Proyecto: "",
      Empresa: "",
      Datos: "",
      Actividades: "",
      Avances: "",
      Dificultades: "",
      Comentarios: "",
      errors: {},
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validate = (
    Proyecto,
    Empresa,
    Datos,
    Actividades,
    Avances,
    Dificultades,
    Comentarios
  ) => {
    const errors = setErrors(
      Proyecto,
      Empresa,
      Datos,
      Actividades,
      Avances,
      Dificultades,
      Comentarios
    );
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === "");
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      Proyecto,
      Empresa,
      Datos,
      Actividades,
      Avances,
      Dificultades,
      Comentarios
    } = this.state;
    if (
      this.validate(
        Proyecto,
        Empresa,
        Datos,
        Actividades,
        Avances,
        Dificultades,
        Comentarios
      )
    ) {
      const data = {
        Proyecto: Proyecto,
        Empresa: Empresa,
        Datos: Datos,
        Actividades: Actividades,
        Avances: Avances,
        Dificultades: Dificultades,
        Comentarios: Comentarios
      };
      console.log(data);
      Axios.post("http://localhost:5000/posts/add", data).then((res) => {
        if (res.data.success) {
          alert("added");
          this.setState({
            Proyecto: "",
            Empresa: "",
            Datos: "",
            Actividades: "",
            Avances: "",
            Dificultades: "",
            Comentarios: ""
          });
        }
      });
    }
  };
  render() {
    return (
          <Container>
            <Jumbotron>
            <FormGroup row >
                <Label style={styles.azul} className ="text-white" sm={12} >Reporte de actividades</Label>
            </FormGroup>

            <FormGroup row>
                <Label  for="Proyecto" className="text-left" sm={2}>Proyecto</Label>
                <Col sm={10}>
                    <Input type="text" className="form-control" name="Proyecto" id="idProyecto"
                     placeholder="" value={this.state.Proyecto} onChange={this.handleInputChange}/>
                     {this.state.errors.Proyecto && (
                        <div className="text-danger">
                            {this.state.errors.Proyecto}
                        </div> )}
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Empresa" className="text-left" sm={2}>Empresa</Label>
                <Col sm={10}>
                    <Input type="text" className="form-control" name="Empresa" id="idEmpresa" placeholder=""
                    placeholder="" value={this.state.Empresa} onChange={this.handleInputChange}/>
                    {this.state.errors.Empresa && (
                        <div className="text-danger">
                            {this.state.errors.Empresa}
                        </div> )}
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Datos" className="text-left" sm={2}>Datos de contacto de la empresa</Label>
                <Col sm={10}>
                    <Input type="text" className="form-control" name="Datos" id="idDatos" placeholder=""
                    placeholder="" value={this.state.Datos} onChange={this.handleInputChange}/>
                    {this.state.errors.Datos && (
                        <div className="text-danger">
                            {this.state.errors.Datos}
                        </div> )}
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label style={styles.azul} className ="text-white" sm={12} >Reporte</Label>
            </FormGroup>

            <FormGroup row>
                <Label for="Actividades" className="text-left" sm={2}>Descripción de las actividades</Label>
                <Col sm={10}>
                    <Input type="text" className="form-control" name="Actividades" id="idActividades" placeholder=""
                    placeholder="" value={this.state.Actividades} onChange={this.handleInputChange}/>
                    {this.state.errors.Actividades && (
                        <div className="text-danger">
                            {this.state.errors.Actividades}
                        </div> )}
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Avances" className="text-left" sm={2}>Avances de las actividades</Label>
                <Col sm={10}>
                    <Input type="text" className="form-control" name="Avances" id="idAvances" placeholder=""
                    placeholder="" value={this.state.Avances} onChange={this.handleInputChange}/>
                    {this.state.errors.Avances && (
                        <div className="text-danger">
                            {this.state.errors.Avances}
                        </div> )}
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Dificultades" className="text-left" sm={2}>Dificultades presentadas</Label>
                <Col sm={10}>
                    <Input type="text" className="form-control" name="Dificultades" id="idDificultades" placeholder=""
                    placeholder="" value={this.state.Dificultades} onChange={this.handleInputChange}/>
                    {this.state.errors.Dificultades && (
                        <div className="text-danger">
                            {this.state.errors.Dificultades}
                        </div> )}
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Comentarios" className="text-left" sm={2}>Comentarios para el asesor</Label>
                <Col sm={10}>
                    <Input type="text" className="form-control" name="Comentarios" id="idComentarios" placeholder=""
                    placeholder="" value={this.state.Comentarios} onChange={this.handleInputChange}/>
                    {this.state.errors.Comentarios && (
                        <div className="text-danger">
                            {this.state.errors.Comentarios}
                        </div> )}
                </Col>
            </FormGroup>
            <Row >            
            <Col sm={9}>
            <button type="submit" style = {styles.btnCustom} className="btn text-center text-white"
                    onClick={this.onSubmit} > Enviar</button>
            </Col>
            <Col>
            <button type="button" style = {styles.btnCustom} className="btn text-center text-white"> Cancelar</button>
            </Col>
            </Row>  
            </Jumbotron>
        </Container>
    );
  }
}

const styles ={
  azul:{
      backgroundColor: "#0E153B",
      borderRadius: 20,
      fontSize: 26,
  },
  btnCustom: {
      position: "absolute",
      width: 120,
      height: 40,
      backgroundColor: "#0E153B",
      borderRadius: 14, 
  }
}