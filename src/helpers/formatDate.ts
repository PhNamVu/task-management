import {format} from 'date-fns'

export const formatDate = (date: Date) => format(date, 'MMM dd yyyy')

export const formatDateHour = (date: Date) => format(date, "MMM dd 'at' hh:mm aa")
