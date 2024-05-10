import React from 'react'
import ReactDOM from 'react-dom'

// 类式组件
// class Demo extends React.Component {
//     state = { count: 0 }

//     myRef = React.createRef()

//     add = () => {
//         // 对象式的setState
//         // const { count } = this.state
//         // this.setState({ count: count + 1 }, () => {
//         //     console.log('9行的输出', this.state.count);
//         // })
//         // // react状态的更新是异步的
//         // console.log('12行的输出', this.state.count); //慢setState一步

//         // 省略 props后精简写法
//         this.setState(state => ({ count: state.count + 1 }))
//     }
//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     show = () => {
//         alert(this.myRef.current.value)
//     }

//     componentDidMount() {
//         // 此处的 timer 挂在实例自身
//         this.timer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 1000)
//     }
//     componentWillUnmount() {
//         clearTimeout(this.timer)
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//                 <h1>当前求和为：{this.state.count}</h1>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>点击提示数据</button>
//             </div>
//         )
//     }
// }

// 函数式组件
function Demo() {
    console.log('Demo');

    // a是一个数组，里面包含了【状态（count）】和【操作状态的方法（setCount）】
    // const a = React.useState()
    const [count, setCount] = React.useState(0) //数组的解构赋值
    console.log(count, setCount);
    const [name, setName] = React.useState('Tom')

    // React.useEffect(() => {
    //     console.log('@');
    // }, [count]) //空数组里面写谁就监测谁，只写空数组就谁都不监测

    /*
    React.useEffect里面的函数相当于 componentDidMount 和 componentDidUpdate，主要看其第二个参数[]怎么配置；
    React.useEffect里面的函数返回的函数相当于 componentWillUnmount；
    */
    React.useEffect(() => {
        // 定义一个变量 timer
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            // 作用域查找找到 timer
            clearInterval(timer)
        }
    }, [])
    const myRef = React.useRef()

    //加的回调
    function add() {
        console.log('加');
        // setCount(count + 1) //第一种写法
        setCount((count) => { return count + 1 }) //第二种写法
    }
    // 改名的回调
    function changeName() {
        setName('小红')
    }
    // 卸载组件的回调
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    // 提示输入的回调
    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h1>当前求和为：{count}</h1>
            <h1>当前名字为：{name}</h1>
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点击提示数据</button>
        </div>
    )
}

export default Demo