// please install npm install react-apexcharts apexcharts
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
function Piechart() {
    const [stdudentSubject, setStudentsubject] = useState([]);
    const [studentMarks, setStudentMarks] = useState([]);

    useEffect(() => {
        const sSubject = [];
        const sMarks = [];
        const getStudentdata = () => {
            const resData = [
                {
                    "subject": "Hindi",
                    "marks": "65"
                },
                {
                    "subject": "Math",
                    "marks": "76"
                },
                {
                    "subject": "English",
                    "marks": "85"
                },
                {
                    "subject": "Science",
                    "marks": "65"
                },
                {
                    "subject": "SocialScience",
                    "marks": "64"
                }
            ]
            for (let i = 0; i < resData.length; i++) {
                sSubject.push(resData[i].subject);
                sMarks.push(parseInt(resData[i].marks));
            }
            setStudentsubject(sSubject);
            setStudentMarks(sMarks);
            //console.log(resData); 
        }

        getStudentdata();

    }, []);

    return (
        <React.Fragment>
            <div  >
                <h3 className="mt-3">Welcome to Piechart </h3>
                <Chart
                    type="pie"
                    width={1349}
                    height={550}

                    series={studentMarks}

                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default Piechart;