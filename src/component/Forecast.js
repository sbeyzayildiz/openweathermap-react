import React from "react";
import moment from "moment";

export default function Forecast ({icon,temp,date,temp_min,description}) {

    return (
        <div className="forecast">
            <div className="forecast-header">
                <div className="day"> {moment.unix(date).format("DD/MM/YYYY ")}</div>
            </div>
            <div className="forecast-content">
                <div className="forecast-icon">
                    <img src={"images/icons/"+icon+".svg"} alt="" width="48"/>
                </div>
                <div className="degree">{Math.round(temp)}<sup>o</sup>C</div>
                <small>{Math.round(temp_min)}<sup>o</sup></small><br/>
                <small>{description}</small>
            </div>
        </div>

    );

}

