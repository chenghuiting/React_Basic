// 受控组件案例-用一个事件绑定多个输入框

import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: '',
      passWord: '',
      isAgree: true,
      hobbies: [
        { value: 'sing', text: '唱', isChecked: false },
        { value: 'dance', text: '跳', isChecked: false },
        { value: 'rap', text: 'rap', isChecked: false }
      ],
      fruit: '苹果',
      books: '',
    }
  }

  handleSubmitClick(event) {
    // 1、阻止默认事件；
    event.preventDefault();
    // 2、获取到所有的表单数据，对数据进行组织；
    this.setState({ username: event.target.value })
    // 3、以网络请求的方式，将数据传递服务器（ajax/fetch/axios）

    // 获取选中的爱好
    console.log('获取爱好', this.state.hobbies.filter(item => item.isChecked).map(i => i.text));
  }

  // 用一个事件绑定多个输入框；
  inputChange(event) {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state.username, this.state.passWord);
    })
  }

  // checkbox事件
  checkboxChange(e) {
    this.setState({ isAgree: e.target.checked }, console.log(e.target.checked))
  }

  hobbiesChange(event, index) {
    const hobbies = [...this.state.hobbies];
    hobbies[index].isChecked = event.target.checked;//计算属性名
    this.setState({ hobbies })
  }

  fruitChange(e) {
    console.log(e.target.value);
    this.setState({ fruit: e.target.value })
  }

  booksChange(event) {
    /*
      Array.from(可迭代的对象) 将可迭代的对象变为数组；
      Array.from(arguments)
    */
    const options = Array.from(event.target.selectedOptions)
    const values = options.map(item => item.value)
    console.log(values);
    this.setState({ books: values })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
          <label htmlFor="username">
            用户：
            <input
              type='text'
              name='username'
              onChange={e => this.inputChange(e)}
            />
          </label>
          <label htmlFor="passWord">
            密码：
            <input
              type='passWord'
              name='passWord'
              onChange={e => this.inputChange(e)}
            />
          </label>

          {/* checkbox单选 */}
          <label htmlFor="isAgree">
            <input
              type='checkbox'
              checked={this.state.isAgree}
              id='isAgree'
              onChange={e => this.checkboxChange(e)}
            />
            同意协议
          </label>

          {/* checkbox多选 */}
          <div>
            你的爱好：
            {
              this.state.hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.value} key={item.value}>
                    <input
                      type='checkbox'
                      checked={item.isChecked}
                      id={item.value}
                      onChange={e => this.hobbiesChange(e, index)}
                    />
                    {item.text}
                  </label>
                )
              })
            }
          </div>

          {/* select 单选 */}
          <select value={this.state.fruit} onChange={e => this.fruitChange(e)}>
            <option value='banana'>香蕉</option>
            <option value='orange'>橘子</option>
            <option value='apple'>苹果</option>
          </select>
          <div>
            {/* select多选，multiple属性支持多选 */}
            <select value={this.state.books} multiple onChange={e => this.booksChange(e)}>
              <option value='111'>111</option>
              <option value='222'>222</option>
              <option value='333'>333</option>
            </select>
          </div>

          <button type='submit'>注册</button>
        </form>
      </div>
    )
  }
}

export default App