import React from "react";
import {
	FaCss3,
	FaGithub,
	FaHtml5,
	FaJs,
	FaReact,
	FaNodeJs,
} from "react-icons/fa";
import {SiMaterialUi, SiMongodb, SiPostgresql,SiAmazonaws, SiJest} from 'react-icons/si'
import Gatsby from "../../images/gatsby.svg";
import "./Skills.css";

function Skills() {
	return (
		<section className="skills">
			<div className="skills__container">
				<h3>Skills de desarrollo</h3>
				<div className="skills__wrapper">
					<div className="col">
						<ul className="nav-skills">
							<li>
								<FaHtml5 /> Html
							</li>
							<li>
								<FaCss3 /> Css
							</li>
							<li>
								<FaJs /> Javascript
							</li>
							<li>
								<SiMaterialUi /> MaterialUi
							</li>

						</ul>
					</div>
					<div className="col col-middle">
						<ul className="nav-skills">
							<li>
								<FaReact /> React.js
							</li>
							<li>
								<SiAmazonaws /> Aws
							</li>
							<li>
								<SiJest /> Jest
							</li>
							<li>
								<FaGithub /> Git y Github
							</li>
						</ul>
					</div>
					<div className="col">
						<ul className="nav-skills">
							<li>
								<FaNodeJs /> Nodejs
							</li>
							<li>APIREST</li>
							<li>
								<SiMongodb /> MongoDB
							</li>
							<li>
								<SiPostgresql /> Postgresql
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
