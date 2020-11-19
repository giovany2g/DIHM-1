import React, { Component } from "react";
import Axios from "axios";

export default class detailReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://localhost:5000/posts/detail/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });
      }
      console.log("post: ", this.state.post);
    });
  }

  render() {
    const {
      elaboracion,
      inicio,
      fin,
      estudiante,
      institucion,
      horas,
      estado,
    } = this.state.post;
    return (
      <div className="container">
        <dl className="row">
          <dt className="col-sm-3">Fecha de elaboracion</dt>
          <dd className="col-sm-9">{elaboracion}</dd>
          <dt className="col-sm-3">Fecha de inicio</dt>
          <dd className="col-sm-9">{inicio}</dd>
          <dt className="col-sm-3">Fecha de finalisacion</dt>
          <dd className="col-sm-9">{fin}</dd>
          <dt className="col-sm-3">Estudiante</dt>
          <dd className="col-sm-9">{estudiante}</dd>
          <dt className="col-sm-3">Institucion</dt>
          <dd className="col-sm-9">{institucion}</dd>
          <dt className="col-sm-3">Estado</dt>
          <dd className="col-sm-9">{estado}</dd>
          <dt className="col-sm-3">Horas</dt>
          <dd className="col-sm-9">{horas}</dd>
        </dl>
      </div>
    );
  }
}
