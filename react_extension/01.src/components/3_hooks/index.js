import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 类式组件
// export default class Demo extends Component {
//     state = { count: 0 }

//     myRef=React.createRef()

//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }

//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     show=()=>{
//         alert(this.myRef.current.value)
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//                 <h2>当前求和为：{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>点我卸载组件</button>
//                 <button onClick={this.show}>点击提示数据</button>
//             </div>
//         )
//     }
// }

// 函数式组件
function Demo() {
    console.log('Demo');

    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('tom')
    const myRef = React.useRef()

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])

    // 加的回调
    function add() {
        // 第一种写法
        //setCount(count + 1)
        setCount(count => count + 1)
    }

    // 卸载组件的回调
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    // 改名的回调
    function changeName() {
        setName('jack')
    }
    // 提示输入的回调
    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>当前求和为：{count}</h2>
            <h2>我的名字是：{name}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={unmount}>点我卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}
export default Demo
