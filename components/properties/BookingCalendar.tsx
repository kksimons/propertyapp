'use client'
import React from 'react'

import { useState } from 'react';
import { Calendar } from '../../components/ui/calendar';
import { DateRange } from 'react-day-picker';

export default function BookingCalendar() {
  const currentDate = new Date();
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  // TODO: finish calendar component
  return (
    <Calendar
      id='test'
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
    />
  );
}