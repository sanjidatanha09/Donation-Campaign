import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart,Tooltip,Legend, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const fullCampaignes =useLoaderData()

    const totalDonate = fullCampaignes;
    const myDonate = JSON.parse(localStorage.getItem("donation"));
    console.log(myDonate);
    let Remaining = 0;
    let YourDonate;


    if (myDonate) {
        YourDonate = myDonate.length;
        Remaining = totalDonate.length - YourDonate;

    }
    else {
        Remaining = totalDonate.length;
    }


    const data = [
        { name: 'Total Donation', value: Remaining },
        { name: 'Your Donation', value: YourDonate },

    ];

    const COLORS = ['#0088FE', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };



    return (
        <div className="w-[400px] md:w-[500px] lg:w-[800px] mx-auto h-[50vh] pl-20 md:pl-32 lg:pl-80">


            <PieChart width={200} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>




        </div>

    );
};

export default Statistics;


