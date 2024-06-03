// 样式组件

import styled from 'styled-components'
// import * as vars from './style/variables' //或者像下面这样引入
import {
    largeSize,
} from './style/variables'

//方法调用，返回一个组件；用 attrs 设置默认值；
export const AppWrapper = styled.div.attrs(props => {
    return {
        color: props.color || "blue"
    }
})`
// 可以接收外部传入的props，此处的props拿到的是<AppWrapper>标签包裹之内的内容；
.title{color:${props => props.color};font-size: ${props => props.size}px}
.secsion{color: pink}
`

export const SectionWrapper = styled.div`
.secsionh2{border: 3px solid black;font-size: ${largeSize}}
`