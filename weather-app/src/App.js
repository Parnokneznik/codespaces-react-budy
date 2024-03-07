import React from 'react';
import './App.css';
import WeatherApp from './WeatherApp'; // Ujistěte se, že cesta k importu je správná

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
      </header>
      <main>
        <WeatherApp />
      </main>
    </div>
  );
}

export default App;
