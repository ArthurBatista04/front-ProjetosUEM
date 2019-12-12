import React, {Component, Fragment} from 'react';
import Axios from 'axios';
import PathConst from './pathConst';
import Header from './Header/Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import {CarouselContainer} from './carouselCss/carouselStyle';

import foto from '../images/facebook_cover_photo_2.png';

class Home extends Component {
	componentWillMount() {
		Axios.get(`${PathConst}/api/relatorioAdmins/1`).then(res => {
			const numberViews = {
				qntdVisualizacoesTotal: res.data.qntdVisualizacoesTotal + 1
			};

			Axios.patch(`${PathConst}/api/relatorioAdmins/1`, numberViews).then(
				response => {
					// console.log(response.data);
				}
			);
		});
	}

	render() {
		return (
			<Fragment>
				<Header />
				<CarouselContainer>
					<Carousel
						showArrows={true}
						showStatus={false}
						showThumbs={false}
						infiniteLoop={true}
					>
						<div>
							<img className='center-align' src={foto} alt='projeto uem logo' />
						</div>
					</Carousel>
				</CarouselContainer>
			</Fragment>
		);
	}
}

export default Home;
