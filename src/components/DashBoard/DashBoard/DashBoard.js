import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import AppointmentsByDate from '../ApppointmentsByDate/AppointmentByDate';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100vh",
    margin: "0px",
    padding: "0px"
    
}

const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = date => {
        setSelectedDate(date)
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ date:selectedDate })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-5" style = {{paddingLeft: '50px'}}>
                    <h4 className = "mb-5 mt-3">Appointments</h4>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;