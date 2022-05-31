import React, { useState } from "react";

const Semaforo = () => {
	const [red, setRed] = useState(true);
	const [ambar, setAmbar] = useState(false);
	const [green, setGreen] = useState(false);

	function cambiarRed() {
		setRed(true);
		setAmbar(false);
		setGreen(false);
	}
	function cambiarAmbar() {
		setRed(false);
		setAmbar(true);
		setGreen(false);
	}
	function cambiarGreen() {
		setRed(false);
		setAmbar(false);
		setGreen(true);
	}

	return (
		<div className="container-fluid p-0">
			<div className="soporteSemaforo bg-black"></div>
			<div className="semaforo bg-black rounded d-flex flex-column">
				<div
					className={`${
						red === true ? "luzEncendida" : ""
					} luces bg-danger m-auto`}
					onClick={cambiarRed}></div>
				<div
					className={`${
						ambar === true ? "luzEncendida" : ""
					} luces bg-warning m-auto`}
					onClick={cambiarAmbar}></div>
				<div
					className={`${
						green === true ? "luzEncendida" : ""
					} luces bg-success m-auto`}
					onClick={cambiarGreen}></div>
			</div>
		</div>
	);
};
export default Semaforo;
