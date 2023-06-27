import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { BiTimeFive } from 'react-icons/bi'
import { FaRegCalendarAlt }from "react-icons/fa"
import "./date.css"


export const The_Date =()=>
{
  const [value, setValue] = useState(dayjs('2022-04-17T15:30'));
  const [datevalue, setDateValue] = useState(dayjs('2022-04-17'));
    return(
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <div className="contianer-date">
        <div className='date'>
       <DateCalendar  value={datevalue}
          onChange={(newValue) => setDateValue(newValue)} />
       </div>
       <div className='time'>
          <StaticTimePicker    value={value}
          onChange={(newValue) => setValue(newValue)}/>
       </div>
        </div>
        <div className='date-field'>
          <FaRegCalendarAlt className='icons'/>
        <DateField
          format="LL"
          value={datevalue}
          onChange={(newValue) => setDateValue(newValue)}
        />
        </div>
        <div className='time-field'>
          <BiTimeFive className='icons'/>
        <TimeField
         className='field'
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        </div>

        <div className="action">
             <button className="btn">Continue</button>
           </div>
      
    </LocalizationProvider>
    )
}