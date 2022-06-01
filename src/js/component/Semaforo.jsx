import React, { useState, useEffect } from "react";

const Semaforo = () => {
	const [red, setRed] = useState(true);
	const [ambar, setAmbar] = useState(false);
	const [green, setGreen] = useState(false);

	let count = 0;
	let time = 2000;

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

	function cambiarAutomaticamente() {
		while (count < 1000) {
			setTimeout(() => {
				cambiarGreen();
			}, time);
			time += 4000;
			setTimeout(() => {
				cambiarAmbar();
			}, time);
			time += 2000;
			setTimeout(() => {
				cambiarRed();
			}, time);
			time += 2000;
			count++;
		}
	}

	return (
		<div className="container-fluid p-0">
			<div
				className="btn-group position-absolute top-0 start-50 translate-middle-x mt-2"
				role="group"
				aria-label="Basic example">
				<button
					type="button"
					className="btn btn-success"
					onClick={cambiarAutomaticamente}>
					Auto
				</button>
				<button type="button" className="btn btn-primary"></button>
			</div>
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
