import Axios from "axios";
import React, { Component } from "react";
import { setErrors } from "./setErrors";

export default class createReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elaboracion: "",
      inicio: "",
      fin: "",
      estudiante: "",
      institucion: "",
      horas: "",
      estado: "",
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
    elaboracion,
    inicio,
    fin,
    estudiante,
    institucion,
    horas,
    estado
  ) => {
    const errors = setErrors(
      elaboracion,
      inicio,
      fin,
      estudiante,
      institucion,
      horas,
      estado
    );
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === "");
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      elaboracion,
      inicio,
      fin,
      estudiante,
      institucion,
      horas,
      estado,
    } = this.state;
    if (
      this.validate(
        elaboracion,
        inicio,
        fin,
        estudiante,
        institucion,
        horas,
        estado
      )
    ) {
      const data = {
        elaboracion: elaboracion,
        inicio: inicio,
        fin: fin,
        estudiante: estudiante,
        institucion: institucion,
        horas: horas,
        estado: estado,
      };
      console.log(data);
      Axios.post("http://localhost:5000/posts/add", data).then((res) => {
        if (res.data.success) {
          alert("added");
          this.setState({
            elaboracion: "",
            inicio: "",
            fin: "",
            estudiante: "",
            institucion: "",
            horas: "",
            estado: "",
          });
        }
      });
    }
  };
  render() {
    return (
      <div className="container m-5">
        <form className="needs-validation" noValidate>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Fecha de elaboracion
            </label>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="elaboracion"
                value={this.state.elaboracion}
                onChange={this.handleInputChange}
              />
              {this.state.errors.elaboracion && (
                <div className="text-danger">
                  {this.state.errors.elaboracion}
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Fecha de inicio</label>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="inicio"
                value={this.state.inicio}
                onChange={this.handleInputChange}
              />
              {this.state.errors.inicio && (
                <div className="text-danger">{this.state.errors.inicio}</div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Fecha de finalisacion
            </label>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="fin"
                value={this.state.fin}
                onChange={this.handleInputChange}
              />
              {this.state.errors.fin && (
                <div className="text-danger">{this.state.errors.fin}</div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Estudiante</label>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="estudiante"
                value={this.state.estudiante}
                onChange={this.handleInputChange}
              />
              {this.state.errors.estudiante && (
                <div className="text-danger">
                  {this.state.errors.estudiante}
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">institucion</label>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="institucion"
                value={this.state.institucion}
                onChange={this.handleInputChange}
              />
              {this.state.errors.institucion && (
                <div className="text-danger">
                  {this.state.errors.institucion}
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Estado</label>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="estado"
                value={this.state.estado}
                onChange={this.handleInputChange}
              />
              {this.state.errors.estado && (
                <div className="text-danger">{this.state.errors.estado}</div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">horas</label>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="horas"
                value={this.state.horas}
                onChange={this.handleInputChange}
              />
              {this.state.errors.horas && (
                <div className="text-danger">{this.state.errors.horas}</div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            Registrar
          </button>
        </form>
      </div>
    );
  }
}
