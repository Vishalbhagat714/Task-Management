import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarCard = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="flex flex-col gap-4">
            <Calendar 
                onChange={setDate} 
                value={date} 
                className="border rounded-lg p-4 shadow-md"
            />
            {/* <p className="text-center mt-4">
                Selected date: {date.toDateString()}
            </p> */}
        </div>
    );
};

export default CalendarCard;
