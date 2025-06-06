import React from "react";
import StaticBanner from "../components/StaticBanner";
import BannerAdestramento from "../imagens/adestramento/banner-adestramento.jpg";
import ContentPhotos from "../components/ContentPhotos";
import ImgAdestramento1 from "../imagens/adestramento/adestramento1.jpg";
import ImgAdestramento2 from "../imagens/adestramento/adestramento2.jpg";
import ImgAdestramento3 from "../imagens/adestramento/adestramento3.jpg";
import ImgAdestramento4 from "../imagens/adestramento/adestramento4.jpg";
import Faq from "../components/Faq";
import Rodapé from "../components/Rodapé";

const Adestramento = () => {
	return (
		<div>
			<section>
				<StaticBanner ImagemBanner={BannerAdestramento} TituloBanner='Banner adestramento'/>
			</section>
			<section className="Adestramento">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ante magna, facilisis ut auctor id, rhoncus dapibus lacus. Cras accumsan nibh nulla, et pulvinar ante efficitur commodo. Nam eu lacus sit amet lectus egestas aliquet.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ante magna, facilisis ut auctor id, rhoncus dapibus lacus. Cras accumsan nibh nulla, et pulvinar ante efficitur commodo. Nam eu lacus sit amet lectus egestas aliquet.</p>
				<div className='contentPhoto'>
					<ContentPhotos ImgAdestramento={ImgAdestramento1} TituloAdestramento=''/>
					<ContentPhotos ImgAdestramento={ImgAdestramento2} TituloAdestramento=''/>
					<ContentPhotos ImgAdestramento={ImgAdestramento3} TituloAdestramento=''/>
					<ContentPhotos ImgAdestramento={ImgAdestramento4} TituloAdestramento=''/>
				</div>
			</section>
			<section className="faq">
				<Faq/>
			</section>
			<footer>
				<Rodapé/>
			</footer>
		</div>
	);
};

export default Adestramento;
