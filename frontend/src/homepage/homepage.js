import React, { useState, useEffect } from 'react';
import background from '../public/images/background3.jpg';
import './homepage.css';
import logo from '../public/images/logo.png';
import location from '../public/images/pin.png';
import Autocomplete from 'react-google-autocomplete';

const HomePage = () => {
  const [list, SetList] = useState([]);
  const [userLat, SetUserLat] = useState(0);
  const [userLong, SetUserLong] = useState(0);
  const [reload, setReload] = useState(false);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      SetUserLat(position.coords.latitude);
      SetUserLong(position.coords.longitude);
    });
  };

  useEffect(() => {
    getLocation();
  }, [reload]);

  const getList = async () => {
    const data = { lat: userLat, long: userLong };
    const response = await fetch('/stations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    let js = await response.json();
    SetList((prev) => js);
    setReload(!reload);
  };

  return (
    <div
      style={{
        backgroundImage: 'url(' + background + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cener',
        height: '100vh',

        color: '#FFF5E2',
      }}
    >
      <div>
        <div className="container">
          <div className="logo">
            <img className="logoimg" src={logo} alt="Logo" />
          </div>
          <div className="result-container">
            <div className="search-container">
              <Autocomplete
                id="address"
                type={'regions'}
                apiKey={'AIzaSyCEzRPKQcPxZ-1OPZUuIzgp-i0OqgvS0Ts'}
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
              />
              <input
                id="locationimg"
                type="image"
                alt="locationimg"
                src={location}
                onClick={getList}
              />
            </div>
            <div id="list">
              {list &&
                list.stations &&
                list.stations.map((station) => (
                  <div className="station" key={station._id}>
                    {station.name} <br></br>
                    {station.Town} <br></br>
                    {station.Address1} <br></br>
                    {station.Postcode}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
