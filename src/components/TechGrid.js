import React from 'react'
import "./style/global.css"
import threejs from '../assets/images/threejs.png';
import git from '../assets/images/git.png';
import htmlcssjs from '../assets/images/htmlcssjs.jpg';
import java from '../assets/images/java.png';
import mysql from '../assets/images/mysql.jpg';
import react from '../assets/images/react.jpg';
import springboot from '../assets/images/springboot.png';
import bootstrap from '../assets/images/bootstrap.png'



const TechGrid = () => {
    return (
        <>
        <h2 style={{marginBottom: '50px'}}>Tecnologias utilizadas</h2>
        <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src={bootstrap} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={git} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={htmlcssjs} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={java} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={mysql} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={react} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={springboot} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={threejs} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={htmlcssjs} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={java} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={mysql} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={react} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={springboot} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={threejs} height="100" width="250" alt="" />
		</div>
	</div>
</div></>
    )
}

export default TechGrid