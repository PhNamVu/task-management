import React from 'react'
import Chart from 'react-google-charts'

const daysToMilliseconds = (days: any) => {
  return days * 8 * 60 * 60 * 1000
}

const columns = [
  { type: 'string', label: 'Task ID' },
  { type: 'string', label: 'Task Name' },
  { type: 'date', label: 'Start Date' },
  { type: 'date', label: 'End Date' },
  { type: 'number', label: 'Duration' },
  { type: 'number', label: 'Percent Complete' },
  { type: 'string', label: 'Dependencies' },
]

const rows = [
  [
    'Research',
    'Find sources',
    new Date(2015, 0, 1),
    new Date(2015, 0, 5),
    null,
    100,
    null,
  ],
  [
    'Write',
    'Write paper',
    null,
    new Date(2015, 0, 9),
    daysToMilliseconds(3),
    25,
    'Research,Outline',
  ],
  [
    'Cite',
    'Create bibliography',
    null,
    new Date(2015, 0, 7),
    daysToMilliseconds(1),
    20,
    'Research',
  ],
  [
    'Complete',
    'Hand in paper',
    null,
    new Date(2015, 0, 10),
    daysToMilliseconds(1),
    0,
    'Cite,Write',
  ],
  [
    'Outline',
    'Outline paper',
    null,
    new Date(2015, 0, 6),
    daysToMilliseconds(1),
    100,
    'Research',
  ],
]

export const GanttChart = () => {
  return (
    <div>
      <Chart
        chartType="Gantt"
        data={[columns, ...rows]}
        width="100vw"
        height="50%"
        legendToggle
        options={
          {is3D: true,}
        }
      />
    </div>
  )
}
