import React from "react";

export default function Source ({getWeather}) {

    return (
	<div>
		<div className="hero" data-bg-image="images/banner.png">
				<div className="container">
					<form onSubmit={getWeather} className="find-location">
						<input type="text" name="city" placeholder="Şehiri seçiniz..."/>
						<button>Ara</button>
					</form>

				</div>
			</div>
	</div>
);
}

