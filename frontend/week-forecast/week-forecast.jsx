import React from 'react';
import { Weekday } from '../weekday/weekday.jsx';
import './week-forecast.css';
import { forecast } from '../index.jsx';

export class WeekForecast extends React.Component {
  render() {
    return(
      <div className="week-forecast">
        {
          forecast.map(day => {
            return (
              <Weekday 
                key={day.weekday}                         // should uniqly identify the component. Works without it, but slower.
                weekday={day.weekday} 
                weather={day.weather} 
                tempDay={day.tempDay} 
                tempNight={day.tempNight}
              />
            )
          })
        }
      </div>
    )
  }
}
