import {format} from 'date-fns'

export const formatDate = (date: Date) => format(date, 'MMM dd yyyy')