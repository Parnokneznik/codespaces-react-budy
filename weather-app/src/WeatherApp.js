// src/WeatherApp.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherApp.css';


const cities = ['Prague', 'London', 'New York', 'Tokyo', 'Sydney'];
const API_KEY = 'f2ec3bb93f6a5769697de8723b967323'; // Nahraďte YOUR_API_KEY_HERE vaším skutečným API klíčem

function WeatherApp() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responses = await Promise.all(
                cities.map(city =>
                    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
                )
            );
            setWeatherData(responses.map(response => response.data));
        };

        fetchData();
    }, []);

    return (
        <div className="weather-dashboard">
            {weatherData.map((cityData, index) => (
                <div key={index} className="city-card">
                    <h2>{cityData.city.name}</h2>
                    {/* Příklad zobrazení počasí pro první den. Můžete přidat logiku pro zobrazení více dnů. */}
                    <p>Temperature: {cityData.list[0].main.temp} °C</p>
                    <p>Humidity: {cityData.list[0].main.humidity} %</p>
                    <p>Wind speed: {cityData.list[0].wind.speed} km/h</p>
                    {/* Přidávejte další data dle potřeby */}
                </div>
            ))}
        </div>
    );
}

export default WeatherApp;
