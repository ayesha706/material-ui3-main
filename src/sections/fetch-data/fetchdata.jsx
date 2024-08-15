// // API_KEY=  04TTEKMG77NBS7V2

import React, { useState } from 'react';
import axios from 'axios';

const AlphaVantage = () => {
  const [timeSeriesData, setTimeSeriesData] = useState([]);
  const showData = async (e) => {
    e.preventDefault();
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=04TTEKMG77NBS7V2';
    try {
      const response = await axios.get(url);
      // const data = response.data;
      console.log(response.data);
      setTimeSeriesData(response.data['Time Series (5min)']);
    } catch (err) {
      console.log('Error fetching data:', err);
    }
  }
  return (
    <div>
      <button type="submit" onClick={showData}>Fetch Data</button>
      <div>
       {Object.entries(timeSeriesData).map(([time, data]) => (
          <div key={time} className="p-3 border-b border-gray-200">
            <h2 className="text-lg font-bold">{time}</h2>
            <p>Open: {data['1. open']}</p>
            <p>High: {data['2. high']}</p>
            <p>Low: {data['3. low']}</p>
            <p>Close: {data['4. close']}</p>
            <p>Volume: {data['5. volume']}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlphaVantage;

