import React, { memo } from 'react'
import { HeaderCenterWrap } from './style'
import IconSearch from '@/assets/img/svg/icon_search'

const HeaderCenter = memo(() => {
  return (
    <HeaderCenterWrap>
      <div className='text'>搜索房源和体验</div>
      <div className='icon_center'>
        <IconSearch />
      </div>
    </HeaderCenterWrap>
  )
})

export default HeaderCenter