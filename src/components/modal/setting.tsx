import React from 'react'

import { AccountSetting } from '../setting/AccountSetting'
import { AvatarSetting } from '../setting/AvatarSetting'
import { Modaler } from '../shared/Modaler'

export const SettingModal = ({ isOpen, onClose }: any) => {
  return (
    <Modaler isOpen={isOpen} onClose={onClose} header="Profile setting">
      <AvatarSetting />
      <AccountSetting />
    </Modaler>
  )
}
