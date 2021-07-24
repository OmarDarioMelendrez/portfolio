import React from "react";
import "./AboutMe.css";

function AboutMe() {
	return (
		<section className="aboutMe" id="about">
			<div className="aboutMe__container">
				<h2>Hola soy Omar Dario. Mucho gusto.</h2>
				<p>
					Me llamo Omar Darío, actualmente estoy egresando de un
					Bootcamp intensivo de programación Fullstack donde me
					dediqué a programar durante más de 12 horas diariamente para
					cumplir mi deseo que es poder trabajar en esta profesión que
					me apasiona y me divierte mucho.
					<br />
					<br />
					Quiero especializarme como backend developer, para lo cual
					me encuentro mejorando mis skills actuales con proyectos y
					aprendiendo las tecnologías necesarias.
          <br/>
          AWS, Serverles,
					seguridad, Graph QL.
				</p>
			</div>
		</section>
	);
}

export default AboutMe;
