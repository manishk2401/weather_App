import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
// import "./weather.css";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "348ba6ed69f66868426d1a2b1c20a099";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      console.log(data);
      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="weather container border" style={{ width: "50%", minWidth: "500px" }}>
      <h3 className="title m-0 text-center">Weather App</h3>
      <form className="row m-0">
        <div className="form-group col-sm-6 mt-2">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" placeholder="City Name..." name="city" onChange={(e) => handleChange(e)} />
        </div>

        <div className="form-group col-sm-6 mt-2">
          <label htmlFor="country" className="form-label">Country</label>
          <input type="text" className="form-control" id="country" placeholder="Country Name..." name="country" onChange={(e) => handleChange(e)} />
        </div>
      </form>
      <div class="d-grid gap-2">
        <button className="getweather btn btn-success m-2" onClick={(e) => weatherData(e)}>
          Get Weather
        </button>
      </div>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
