import React from "react";
import moment from "moment";
export default function Daily ({data,carbon}) {

    return (
        <div className="today forecast">
            <div className="forecast-header">
                <div className="day">
                    {moment.unix(data['date']).format("DD/MM/YYYY")}

                </div>

            <div className="forecast-content">
                <div className="location">{data['city']}</div>
                <div className="degree">
                    <div className="num">{Math.round(data['temperature'])}<sup>o</sup>C</div>
                    <div className="forecast-icon">
                        <img src={"images/icons/"+data['icon']+".svg"} alt="" width="90" />
                    </div>
                </div>
                <span><img src={"images/icon-.png"} alt="" />{data['humidity']}%</span>
                <span><img src={"images/icon-wind.png"} alt="" />{data['speed']}km/h</span>
                <span><img src={"images/co.png"} alt="" />{carbon}</span>
            </div>
        </div>
        </div>
    );

}

