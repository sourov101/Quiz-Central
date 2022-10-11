import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, } from 'recharts';
import './statistic.css';
const Statistic = () => {
    const info = useLoaderData();
    const data = info.data;
    return (
        <div>
            <h3>Statistic of Quiz Topics</h3>
            <div className='statistic-container'>

                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />



                </LineChart>
            </div>
        </div>
    );
};

export default Statistic;