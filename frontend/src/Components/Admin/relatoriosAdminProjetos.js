import React, { Component } from 'react'
import ProjetosCadastrados from "./projetosCadastrados.js";
import AreasProjetos from "./areasProjetos.js";

export class relatoriosAdminProjetos extends Component {
    render() {
        return (
                <div className="container">
                    <center>
                        <ProjetosCadastrados />
                        <AreasProjetos />
                    </center>
                </div>
            
        )
    }
}

export default relatoriosAdminProjetos
