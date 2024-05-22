// 子传父
import React from "react";
import axios from 'axios';
import AddCounter from "./AddCounter";
import SubCounter from "./SubCounter";

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 100,
    }
  }
  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      console.log(res);
    }).catch(() => {

    })
  }
  changeCounter(count) {
    this.setState({ count: this.state.count + count })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>counte：{count}</h2>
        {/*给子组件传递一个函数，并接收子组件传过来的参数*/}
        <AddCounter addClick={(count) => this.changeCounter(count)} />
        <SubCounter subClick={(count)=>this.changeCounter(count)} />
      </div>
    )
  }
}