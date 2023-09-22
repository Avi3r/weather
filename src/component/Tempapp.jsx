import React from "react";
import "./Style.css";
import { useState } from "react";
import { useEffect } from "react";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d13136380540ee3aabbb5f6dbbdd95ec`;

      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      {/* <div className=" container border-2 item"></div> */}

      <div className=" box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        { !city ?  (<p> no data found</p>)
         :  (<div>
            <div className="info my-5">
              <h1 className="location">
                <i className="fa-solid fa-street-view fa-xl"></i>
                {search}
              </h1>
              <h2 className="temp">{city.temp}°Cel</h2>
              <p className="tempmin_max">Min:{city.temp_min}°cel | Max: {city.temp_max}°cel</p>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>)
        }
      </div>
    </>
  );
};

export default Tempapp;

// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=d13136380540ee3aabbb5f6dbbdd95ec
