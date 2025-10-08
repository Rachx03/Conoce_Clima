'use client'
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const getWeather = async () => {
    try {
      let queryCity = city.trim();
      let queryCountry = "";

      // Verificamos si el usuario escribió "Ciudad, País"
      if (queryCity.includes(",")) {
        const parts = queryCity.split(",");
        queryCity = parts[0].trim();
        queryCountry = parts[1].trim();
      }

      // Construimos la query para la API
      let query = queryCity;
      if (queryCountry) {
        query += `,${queryCountry}`;
      }

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=b8e61840fd417b875ea3004290253855&units=metric&lang=es`
      );

      if (!res.ok) throw new Error("Ciudad no encontrada");
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      alert(error.message);
      setWeather(null);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6"
      style={{ backgroundImage: "url('/fondo.png')" }}
    >
      <h1 className="text-4xl font-semibold text-center text-gray-600 mb-8 drop-shadow-lg shadow-gray-900">
        Clima en Tiempo Real
      </h1>

      <div className="flex mb-6 w-full max-w-md items-center gap-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ej: Montevideo, UY"
          className="flex-1 p-3 rounded-md border text-gray-600 border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <button
          onClick={getWeather}
          className="bg-gray-700 text-white px-4 py-3 rounded-full hover:bg-gray-800 transition font-semibold shadow-md"
        >
          Buscar
        </button>
      </div>

      {weather && (
        <div className="bg-gray-400/20 backdrop-blur-md p-6 rounded-xl shadow-xl w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-5xl font-extrabold text-gray-900 mb-2">
            {weather.main.temp}°C
          </p>
          <p className="capitalize text-gray-700 mb-4">
            {weather.weather[0].description}
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="mx-auto mb-4"
          />
          <div className="flex justify-between text-gray-800 text-sm">
            <p>Humedad: {weather.main.humidity}%</p>
            <p>Viento: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}

      <p className="absolute bottom-4 right-4 text-center w-full text-gray-500 text-sm select-none">
        © 2025 TuNombre. Todos los derechos reservados.
      </p>
    </div>
  );
}
