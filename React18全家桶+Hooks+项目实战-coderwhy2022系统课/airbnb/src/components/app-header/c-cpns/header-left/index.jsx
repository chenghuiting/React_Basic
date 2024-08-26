import React, { memo } from 'react'
import { HeaderLeftWrap } from './style'
import IconLogo from '@/assets/img/svg/icon_logo'

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrap>
      <div className='logo'>
        <IconLogo />
      </div>
    </HeaderLeftWrap>
  )
})

export default HeaderLeft