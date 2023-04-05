import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const students = [
    { id: 1, subject1: 85, subject2: 78 },
    { id: 2, subject1: 72, subject2: 92 },
    { id: 3, subject1: 91, subject2: 84 },
    { id: 4, subject1: 68, subject2: 77 },
    { id: 5, subject1: 79, subject2: 81 },
    { id: 6, subject1: 83, subject2: 90 },
    { id: 7, subject1: 75, subject2: 86 },
    { id: 8, subject1: 88, subject2: 79 },
    { id: 9, subject1: 72, subject2: 82 },
    { id: 10, subject1: 90, subject2: 95 },
    { id: 11, subject1: 80, subject2: 73 },
    { id: 12, subject1: 77, subject2: 88 },
  ];
  
  console.log(students);
  
const Dashboard = () => {
  return (
    <div>
        <LineChart width={700}
          height={300}
          data={students}>
            <Line type="monotone" dataKey="subject2" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="subject1" stroke="#5554d8" activeDot={{ r: 8 }} />
            <XAxis dataKey="id" />
            <YAxis />
            <Tooltip />
        </LineChart>

    </div>
  )
}

export default Dashboard