import React from 'react'
import { Box } from '@chakra-ui/react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '../../../style/schedule.css'
import {
  useGetTasksScheduleQuery,
  useUpdateTaskMutation,
} from '../../../generated/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import { StyledSpinner } from '../../../components/shared/StyledSpinner'
import { NotFoundError } from '../../../helpers/notFoundError'

const ScheduleViewPage: React.FC = () => {
  const navigate = useNavigate()

  const { id: boardId } = useParams()
  const { data, loading, error } = useGetTasksScheduleQuery({
    variables: {
      boardId,
    },
    fetchPolicy: 'network-only',
  })
  const [updateTask] = useUpdateTaskMutation()
  const eventDrop = (e: any) => {
    const { id, start, end } = e.event
    try {
      updateTask({
        variables: {
          id,
          object: {
            startDate: start,
            dueDate: end,
          },
        },
      })
    } catch (err) {
      console.error(err)
    }
  }

  const eventClick = (e: any) => {
    const { id } = e.event
    navigate(`/b/${boardId}/${id}`)
  }
  if (loading) return <StyledSpinner />
  if (error) {
    throw new NotFoundError('Not found schedule')
  }
  const tasks = data?.tasks

  return (
    <Box mt={10}>
      <FullCalendar
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth, listWeek',
        }}
        droppable
        rerenderDelay={10}
        editable
        eventResizableFromStart
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        events={tasks}
        now={new Date()}
        eventDrop={eventDrop}
        eventClick={eventClick}
      />
    </Box>
  )
}

export default ScheduleViewPage
