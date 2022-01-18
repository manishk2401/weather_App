import React from 'react';
// import "./displayweather.css";



export default function DisplayWeather(props) {
  console.log(props);
  const { data } = props;
  const iconurl = "http://openweathermap.org/img/wn/" + `${data.cod !== "404" ? data.weather[0].icon : null}` + ".png";
  console.log(data);

  return (
    <div className="displayweather">
      {data.cod !== "404" ? (
        <React.Fragment>
          <div className="maincard mx-4 my-2 p-3 border rounded" style={{ backgroundColor: "#abaaaa2e" }}>
            <h5 className="cardtitle m-0">
              {data.name} , {data.sys.country}. Weather
            </h5>
            <div className="cardsubtitle text-secondary">
              As of {new Date().toLocaleTimeString()}
            </div>
            <div className='d-flex justify-content-center align-items-baseline'>
              <h1 className='text-center m-0' style={{ fontSize: "70px" }}>
                {" "}
                {Math.floor(data.main.temp - 273.15)}
                <sup>o</sup>
              </h1>
              <span className="weather-main">{data.weather[0].main}</span>
              <img className="weather-icon" src={iconurl} alt="" srcset="" />
            </div>
            <p className="weather-description text-center">
              {" "}
              {data.weather[0].description}
            </p>
          </div>

          <div className="weatherdetails row justify-content-md-evenly">
            <div className="section1 col-sm-5">
              <table className='table table-striped'>
                <tr>
                  <td>
                    <h6>High/Low</h6>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Humidity</h6>
                  </td>
                  <td>
                    <span>{data.main.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Pressure</h6>
                  </td>
                  <td>
                    <span>{data.main.pressure} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Visibility</h6>
                  </td>
                  <td>
                    <span>{data.visibility / 1000} Km</span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="section2 col-sm-5">
              <table className='table table-striped'>
                <tr>
                  <td>
                    <h6>Wind</h6>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Wind Direction</h6>
                  </td>
                  <td>
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Sunrise</h6>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Sunset</h6>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        // alert('Not Found')
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  )
}
