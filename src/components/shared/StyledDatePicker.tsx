import 'react-day-picker/style.css'
import React from 'react'
import { useField } from 'formik'
import {
  Input,
  InputProps,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { DayPicker, useInput, UseInputOptions } from 'react-day-picker'

const options: UseInputOptions = {
  // Select today as default
  defaultSelected: new Date(),
  // Limit the valid dates
  fromYear: 2020,
  toYear: 2022,
  format: 'PP',
  // Make the selection mandatory.
  required: true,
}

export const StyledDatePicker = ({ ...props }: InputProps) => {
  const input = useInput(options)
  const [field, meta] = useField(props as any)

  return (
    <Popover>
      <PopoverTrigger>
        <Input
          {...field}
          {...props}
          {...input.fieldProps}
          isInValid={meta.error && meta.touched}
          errorBorderColor="crimson"
          focusBorderColor="cyan.400"
          placeholder={format(field.value, 'PP')}
        />
      </PopoverTrigger>
      <PopoverContent>
        <DayPicker
          {...input.dayPickerProps}
          styles={{
            caption_label: { color: 'blue' },
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
