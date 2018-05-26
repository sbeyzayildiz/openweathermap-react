
import React from "react";

export default function View({daily,weekly}) {
    return (

        <div>
            <div className="forecast-table">
                <div className="container">
                    <div className="forecast-container">
                        {daily }
                        {weekly}
                    </div>
                </div>
            </div>
        </div>
    );
}