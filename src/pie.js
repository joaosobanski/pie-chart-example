// please install npm install react-apexcharts apexcharts
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
function Piechart() {
    return (
        <React.Fragment>
            <div className="aaa">
                a
                <Chart
                    options={{
                        labels: [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ],
                        theme: {
                            monochrome: {
                                enabled: false
                            }
                        },
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: "100%"
                                },
                                legend: {
                                    show: false
                                }
                            }
                        }]
                    }}
                    series={[44, 55, 41, 17, 15]}
                    type="pie"
                    width="300" />
            </div>
        </React.Fragment>
    );
}
export default Piechart;