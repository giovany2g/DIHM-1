import Axios from "axios";
import React, { Component } from "react";

export default class editReport extends Component {
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
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://localhost:5000/posts/detail/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          elaboracion: res.data.post.elaboracion,
          inicio: res.data.post.inicio,
          fin: res.data.post.fin,
          estudiante: res.data.post.estudiante,
          institucion: res.data.post.institucion,
          horas: res.data.post.horas,
          estado: res.data.post.estado,
        });
      }
      console.log(res.data.success);
    });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
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
    const id = this.props.match.params.id;
    Axios.put(`http://localhost:5000/posts/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Edited succesfull");
      }
    });
  };
  render() {
    return (
      <div className="container">
        <form>
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
