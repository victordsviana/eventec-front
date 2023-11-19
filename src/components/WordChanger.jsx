import React, { useState, useEffect, useRef } from 'react';

const wordArray = ['Eventos', 'Certificados', 'Cursos', 'Fatec', 'Conhecimento', 'Networking', 'Tudo.'];

const WordChanger = () => {
	const [currWord, setCurrWord] = useState(wordArray[0]);
	const [isActive, setIsActive] = useState(true);

	const index = useRef(0);

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				index.current = (index.current + 1) % wordArray.length;
				setCurrWord(wordArray[index.current]);
			}, 1500);
		}
		return () => clearInterval(interval);
	}, [isActive]);

	useEffect(() => {
		if (!isActive && index.current === wordArray.length - 1) {
			setIsActive(true);
		}
	}, [isActive, currWord]);

	return (
		<><div className='eventecAndWords' style={{ textAlign: 'center' }}>
			<h1>Eventec é</h1>
			<h2>{currWord}</h2>
		</div></>
	);
};

export default WordChanger;
