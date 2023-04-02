import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    let students = [
        {
          id: 1,
          name: "John",
          phy: 90,
          che: 85,
          math: 95,
        },
        {
          id: 2,
          name: "Mary",
          phy: 80,
          che: 90,
          math: 85,
        },
        {
          id: 3,
          name: "Mike",
          phy: 75,
          che: 80,
          math: 90,
        },
        {
          id: 4,
          name: "Jane",
          phy: 95,
          che: 85,
          math: 80,
        },
        {
          id: 5,
          name: "Bob",
          phy: 60,
          che: 70,
          math: 75,
        },
        {
          id: 6,
          name: "Alice",
          phy: 85,
          che: 75,
          math: 95,
        },
        {
          id: 7,
          name: "David",
          phy: 90,
          che: 80,
          math: 85,
        },
        {
          id: 8,
          name: "Lily",
          phy: 75,
          che: 90,
          math: 80,
        },
        {
          id: 9,
          name: "Tom",
          phy: 70,
          che: 85,
          math: 75,
        },
        {
          id: 10,
          name: "Sara",
          phy: 80,
          che: 75,
          math: 90,
        },
        {
          id: 11,
          name: "Jack",
          phy: 85,
          che: 90,
          math: 80,
        },
        {
          id: 12,
          name: "Lucy",
          phy: 75,
          che: 80,
          math: 85,
        },
      ];
    return (
        <div>
            <h1 className='text-purple-800 font-bold text-2xl md:text-4xl text-center my-8'>Welcome To Dashboard</h1>
            <LineChart 
            className='mx-auto my-8'
            width={1000}
            height={300}
            data={students}
            >
                <Line  dataKey="che" stroke="#8884d8" />
                <Line dataKey="phy" stroke="#82ca9d" />
                <Line dataKey="math"  />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip/>
                
            </LineChart>
        </div>
    );
};

export default Dashboard;