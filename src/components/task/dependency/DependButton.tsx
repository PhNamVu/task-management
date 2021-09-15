import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BiNetworkChart } from 'react-icons/bi'
import { Modaler } from '../../shared/Modaler'
import { ToolTipIconButton } from '../../shared/ToolTipIconButton'
import { AddBlocking } from './AddBlocking'
import { AddWaiting } from './AddWaiting'

export const DependButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <ToolTipIconButton
        aria-label="Delete"
        label="Dependencies"
        size="sm"
        isRound
        icon={<BiNetworkChart />}
        onClick={onOpen}
      />
      <Modaler isOpen={isOpen} onClose={onClose} size="xl">
        <AddWaiting />
        <AddBlocking />
      </Modaler>
    </>
  )
}
