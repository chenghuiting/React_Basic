import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrap } from './style'
import IconGlobal from '@/assets/img/svg/icon_global'
import IconMenu from '@/assets/img/svg/icon_menu'
import IconAvatar from '@/assets/img/svg/icon_avatar'

const HeaderRight = memo(() => {
    // 定义组件内部的状态
    const [showPanel, setPanel] = useState(false);

    // 副作用代码
    useEffect(() => {
        function windowHandleClick() {
            setPanel(false)
        }

        /*  
            在视口内任意位置发生了点击事件就关闭弹窗；
            此处受事件冒泡的影响，profile发生了点击事件会冒泡到window，此时又监听了
            window将setPanel设置为false了，所以导致弹窗弹不出来；
            有两种解决方法：
                1、阻止冒泡；
                2、使用事件捕获 window.addEventListener可以传入第二个参数 true 就是事件捕获阶段；
        */
        // window.addEventListener('click', windowHandleClick, true)
        window.addEventListener('click', windowHandleClick)

        // 取消监听
        return () => {
            window.removeEventListener('click', windowHandleClick, true)
        }
    }, [])

    // 事件处理函数
    function handelPanelOpen(event) {
        // 阻止冒泡
        event.stopPropagation()
        setPanel(!showPanel)
        // 监听window点击关闭弹窗
    }

    return (
        <HeaderRightWrap>
            <div className='btns'>
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
                    <IconGlobal />
                </span>
            </div>
            <div className='profile' onClick={handelPanelOpen}>
                <IconMenu />
                <IconAvatar />
            </div>
            {
                showPanel && (<div className='panel'>
                    <div className='top'>
                        <div className='item register'>注册</div>
                        <div className='item login'>登录</div>
                    </div>
                    <div className='bottom'>
                        <div className='item'>出租房源</div>
                        <div className='item'>开展体验</div>
                        <div className='item'>帮助</div>
                    </div>
                </div>)
            }
        </HeaderRightWrap>
    )
})

export default HeaderRight