import React, { memo } from 'react'
import { HeaderRightWrap } from './style'
import IconGlobal from '@/assets/img/svg/icon_global'
import IconMenu from '@/assets/img/svg/icon_menu'
import IconAvatar from '@/assets/img/svg/icon_avatar'

const HeaderRight = memo(() => {
    return (
        <HeaderRightWrap>
            <div className='btns'>
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
                    <IconGlobal />
                </span>
            </div>
            <div className='profile'>
                <IconMenu />
                <IconAvatar />
            </div>
        </HeaderRightWrap>
    )
})

export default HeaderRight