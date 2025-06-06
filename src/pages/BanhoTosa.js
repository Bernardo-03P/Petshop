import React from "react";
import Rotulo from "../components/Rotulo";
import ContentImgLeft from "../components/ContentImgLeft";
import BanhoTosaImg from "../imagens/banho-tosa.jpg"
import CallToAction from "../components/CallToAction";
import ContentImgRight from "../components/ContentImgRight";
import ImgVacina from "../imagens/vacina-cachorro.jpg"

const BanhoTosa = () => {
	return (
		<div>
			<Rotulo TituloPagina='BANHO E TOSA'/>
			<section>
				<ContentImgLeft ImagemLeft={BanhoTosaImg} AltImgLeft='' 
				TxtLeft='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' 
				TxtLeft2='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'/>
			</section>
			<section>
				<CallToAction/>
			</section>
			<section>
				<ContentImgRight ImagemRight={ImgVacina} AltImgRight=''
				Txtright='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
				Txtright2='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'/>
			</section>
		</div>
	);
};

export default BanhoTosa;
