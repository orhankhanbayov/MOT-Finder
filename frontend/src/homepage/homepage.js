import React, { useState, useEffect } from 'react';
import background from '../public/images/background3.jpg';

const HomePage = () => {
  const [list, SetList] = useState([]);
  const [userLat, SetUserLat] = useState(0);
  const [userLong, SetUserLong] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      SetUserLat(position.coords.latitude);
      SetUserLong(position.coords.longitude);
    });
  }, []);

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
    console.log(js);
  };

  return (
    <div
      style={{
        backgroundImage: 'url(' + background + ')',
        backgroundSize: 'cover',
        height: '100vh',
        color: '#f5f5f5',
      }}
    >
      <div>
        <button type="button" onClick={getList}>
          get mot
        </button>
      </div>
    </div>
  );
};
// const styles = {};

export default HomePage;
