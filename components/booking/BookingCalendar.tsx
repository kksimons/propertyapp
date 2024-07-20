'use client'
import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useProperty } from '@/utils/store';
import { defaultSelected, generateBlockedPeriods, generateDateRange, generateDisabledDates } from '@/utils/calendar';
import { useToast } from '../ui/use-toast';

function BookingCalendar() {
  const currentDate = new Date()

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

  const bookings = useProperty((state) => state.bookings)

  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  })

  const unavailableDates = generateDisabledDates(blockedPeriods)
//   console.log(unavailableDates)

  const { toast } = useToast()
  useEffect(() => {
    const selectedRange = generateDateRange(range)

    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected)
        toast({
          description: 'Some of these days are already booked. Please choose available days.',
        })
        return true;
      }
      return false;
    })
    useProperty.setState({ range })
  }, [range])

  return (
    <Calendar
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='mb-4'
      // we want to block off past dates
      disabled={blockedPeriods}
    />
  )
}

export default BookingCalendar