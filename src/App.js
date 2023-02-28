import React from "react";
import logo from "./logo.svg";
import ColorItem from "./color/index";
import "./App.css";

function App() {
	const colors = ["white", "black", "dodgerblue", "#f9ca24", "#6ab04c", "#30336b"];
	const setTheme = (color) => {
		document.documentElement.style.setProperty("--bg-color", color);
	};
	const setColor = (event) => {
		const currentColor = event.target.style.getPropertyValue("--bg-color");
		setTheme(currentColor);
	};
	return (
		<div className="App">
			<div className="color-switcher">
				<button>S</button>
				<h1 className="">Select Color</h1>
				<div className="color-list">
					{colors.map((color, idx) => (
						<ColorItem key={idx} colour={color} setColor={setColor} />
					))}
				</div>
			</div>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
