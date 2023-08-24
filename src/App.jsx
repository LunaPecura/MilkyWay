import './App.css';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {

	const apiKey = 'LzgRZhjbLiFQT87zeQBoVpJOa3hl1Rk9U4mnRXza'
	const [data, setData] = useState(null);

	// useEffect(() => {
	// 	// getInitialItem();
	// 	getRandomList();
	// }, [])

	const onButtonClick = () => {
		// getInitialItem();
		getRandomList();
	}

	const getInitialItem = async () => {
		const response = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
		const data = await response.json();
		console.log(data);
		// setCurrentItem(data);
		// setTodaysDate(data.date);
	}
	

	const getRandomList = async () => {
		console.log("right before fetch")
		const res = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=100`
		);
		const data = await res.json();
		// setCurrentList(data);
		// console.log("right before logging data")
		console.log(data.filter(item => item.media_type === "image"));
		setData(data);
	}
	
	return (
		<div className="App">
			<h1>Milky Way of the Day</h1>
			<button onClick={onButtonClick} >See more</button>
			<Card data={data} />
		</div>
	)
}

export default App;
