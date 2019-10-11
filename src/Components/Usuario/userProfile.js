import React, { Component, Fragment } from "react";
import Axios from "axios";
import Header from "../Header/Header";
import PathName from "../pathConst";
import ShowProfile from "./Perfil/View/showProfile";
import EditProfile from "./Perfil/View/editProfile";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";

class userProfile extends Component {
  componentWillMount() {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("access_token");
    const Token = {
      headers: {
        Authorization: token
      }
    };
    this.setState({ Token: Token });
    Axios.get(`${PathName}/api//Usuarios/${userId}`, Token)
      .then(res => {
        this.setState({ usuario: res.data, done: true });
      })
      .catch(err => {
        this.setState({ done: true });
        return Swal.fire({
          type: "error",
          title: "Ops! algo deu errado",
          text: token
            ? err.response.data.error.message
            : "Você precisa estar logado para verificar seus dados"
        });
      });
  }

  state = {
    usuario: [],
    redirectToEdit: false,
    Token: {},
    done: false
  };

  handleClickEditar = () => {
    this.setState({ redirectToEdit: true });
  };

  handleClickVisualizar() {
    this.setState({ redirectToEdit: false });
  }

  render() {
    const { usuario, redirectToEdit, done } = this.state;
    if (!done) {
      return (
        <div style={styleLoading}>
          <ReactLoading type={"bars"} color={"#42a5f5"} />
        </div>
      );
    } else if (redirectToEdit) {
      return <EditProfile usuario={usuario} />;
    } else {
      return (
        <Fragment>
          <Header />
          <ShowProfile
            usuario={usuario}
            handleClickEditar={this.handleClickEditar}
          />
        </Fragment>
      );
    }
  }
}

const styleLoading = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-50px",
  marginLeft: "-50px",
  width: "100px",
  height: "100px"
};

export default userProfile;
