import React, { Fragment } from 'react';
import ProjetoPreview from './ProjetoPreview';

const showBuscaProjetos = props => {
	return (
		<Fragment>
			<div className="container">
				<div className="card-panel">
					{props.resultados.map((projeto, i) => (
						<ProjetoPreview key={i} projeto={projeto} />
					))}
				</div>
			</div>
		</Fragment>
	);
};

export default showBuscaProjetos;
