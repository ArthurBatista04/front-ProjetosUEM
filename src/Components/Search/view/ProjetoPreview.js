import React, { Component, Fragment } from 'react';
import formatDate from '../../formatDate';
import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import tz from 'moment-timezone';
import './centerIfSmall.css';

class ProjetoPreview extends Component {
	buildRow = (key, value) => (
		<div className="row">
			<div className="col m6 s12">
				<b className="left hide-on-small-and-down">{key}</b>
				<b className="really-center-span hide-on-med-and-up">{key}</b>
			</div>

			<div className="col m6 s12">
				<span className="right hide-on-small-and-down">{value}</span>
				<span className="really-center-span hide-on-med-and-up">{value}</span>
			</div>
		</div>
	);

	getText = (style, text) => (
		<Fragment>
			<h5 className="hide-on-small-and-down" style={style}>
				{text}
			</h5>
			<h5 className="hide-on-med-and-up center" style={style}>
				{text}
			</h5>
		</Fragment>
	);
	render() {
		const { projeto } = this.props;
		return (
			<Fragment>
				<div
					className="card-panel hoverable"
					onMouseEnter={() => {
						document.body.style.cursor = 'pointer';
					}}
					onMouseLeave={() => {
						document.body.style.cursor = 'default';
					}}
				>
					<div className="row">
						<div className="col s12">
							{this.getText(titleStyle, projeto.titulo)}
							<div className="basicInfo grey-text text-darken-2">
								{this.buildRow(
									'Orientador:',
									projeto.docente ? projeto.docente.usuario.nome : ''
								)}
								<hr className="style-six" />
								{this.buildRow('Tipo:', projeto.tipo)}
								<hr className="style-six" />
								{this.buildRow(
									'Início do projeto:',
									formatDate(
										moment.tz(projeto.dataInicio, 'America/Sao_Paulo').format()
									)
								)}

								<hr className="style-six" />
								{this.buildRow(
									'Término do projeto:',
									formatDate(
										moment.tz(projeto.dataFim, 'America/Sao_Paulo').format()
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const titleStyle = {
	fontWeight: 'bold',
	fontSize: `${2}rem`,
	fontFamily: 'Nunito'
};

export default ProjetoPreview;
