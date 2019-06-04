import React, { Component } from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'
export class enviarMensagem extends Component {

	state = {
        "mensagem": "",
        "emailDocente": "",
        "emailDiscente": "" // seria recuperado por meio do SISAV
    }
    handleChange = (e) =>  {
        this.setState({[e.target.name] : e.target.value});
      }


    onSubmitMensagem = (e) => {
        this.props.handleEnviarMensagem(this.state)
    }

    render() {
    return (
        <div className="container">
            <form onSubmit={(e) => this.onSubmitMensagem(e)}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend" style={{width:"800px"}} >
                        <span className="input-group-text" id="basic-addon1">Email</span>
                        <input name='Email' value="anderson@din.uem.br" disabled="true" type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <span className="input-group-text" style={{width:"800px"}} >Mensagem</span>
                <div className="input-group mr-2" style={{paddingBottom:"20px",width:"800px",height:"300px"}}>
                    <div className="input-group-prepend">
                        
                    </div>
                        <textarea name='mensagem' value={this.state.mensagem} onChange={(e) => this.handleChange(e)}   className="form-control" aria-label="With textarea"></textarea>
                        
                </div> 
                <button type="submit" value='Submit' className="btn btn-dark" style={{paddingTop:"10px",float: 'left'}} >Enviar Mensagem</button>            
            
            </form>
            <NavLink type="submit" className="btn btn-danger" to="/" >Cancelar</NavLink>
        </div>
    
    )
  }
}

export default enviarMensagem
