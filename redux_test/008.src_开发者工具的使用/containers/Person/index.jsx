import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        console.log(personObj);
        this.props.jiayiren(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        return (
            <div>
                <h1>我是Person组件，上方求和为：{this.props.he}</h1>
                <input ref={c => this.nameNode = c} type='text' placeholder='输入姓名' />&nbsp;
                <input ref={c => this.ageNode = c} type='text' placeholder='输入年龄' />&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.yiduiren.map((p) => {
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({  //此处的state是redux帮忙保存的总状态对象
        yiduiren: state.rens,
        he: state.he
    }),
    { jiayiren: createAddPersonAction }
)(Person)