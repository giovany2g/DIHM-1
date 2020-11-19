//landingPage
import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./index.css";

export default class getReports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios.get("http://localhost:5000/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.posts,
        });
        console.log("post: ", this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:5000/posts/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.getPosts();
    });
  };
  render() {
    return (
      <div className="container m-5">
        <div className="title">Lista de Reportes Entregados</div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" className="campos">
                #
              </th>
              <th scope="col" className="campos">
                Eleaboracion
              </th>
              <th scope="col" className="campos">
                Fecha ini.
              </th>
              <th scope="col" className="campos">
                Fecha fin
              </th>
              <th scope="col" className="campos">
                Estudiante
              </th>
              <th scope="col" className="campos">
                Institucion
              </th>
              <th scope="col" className="campos">
                Status
              </th>
              <th scope="col" className="campos">
                Horas
              </th>
              <th scope="col" className="campos">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{post.elaboracion}</td>
                <td>{post.inicio}</td>
                <td>{post.fin}</td>
                <td>{post.estudiante}</td>
                <td>{post.institucion}</td>
                <td>{post.estado}</td>
                <td>{post.horas}</td>
                <td>
                  <Link to={`/edit/${post._id}`}>
                    <button type="button" className="btn btn-warning">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </Link>{" "}
                  <Link to={`/posts/${post._id}`}>
                    <button type="button" className="btn btn-success">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </Link>{" "}
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.onDelete(post._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
