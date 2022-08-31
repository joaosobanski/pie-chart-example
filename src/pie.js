// please install npm install react-apexcharts apexcharts
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
function Piechart() {

    const teste = (e) => {
        alert(e)
    }

    return (
        <React.Fragment>
            <div className="aaa">
                <Chart
                    options={{
                        labels: [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday"
                        ],
                        legend: {
                            labels: {
                                colors: [],
                                useSeriesColors: true
                            },
                        },
                        chart: {
                            events: {
                                dataPointSelection: (event, chartContext, config) => {
                                    teste(config.dataPointIndex)
                                }
                            }
                        },
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
                    width="500" />
            </div>
        </React.Fragment>
    );
}
export default Piechart;