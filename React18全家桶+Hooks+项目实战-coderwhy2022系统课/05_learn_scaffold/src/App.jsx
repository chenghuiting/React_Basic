// transitionGroup 动画

import React, { PureComponent } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './app.css'

export default class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            books: [
                { id: 1, name: '111', price: 22 },
                { id: 2, name: '222', price: 22 }
            ]
        }
    }

    addNewBook() {
        const books = [...this.state.books]
        books.push({ id: new Date().getTime(), name: '333', price: 22 })
        this.setState({ books })
    }
    removeBook(index) {
        const books = [...this.state.books]
        books.splice(index, 1)
        this.setState({ books })
    }

    render() {
        const { books } = this.state
        return (
            <div>
                <h2>列表：</h2>
                {/* 默认情况下TransitionGroup会被渲染为一个div元素；component属性设置TransitionGroup最终被渲染为什么元素， */}
                <TransitionGroup component='ul'>
                    {
                        books.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    key={item.id}
                                    classNames='book'
                                >
                                    <li>
                                        <span>
                                            {item.name}-{item.price}
                                        </span>
                                        <button onClick={() => this.removeBook(index)}>删除</button>
                                    </li>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={() => this.addNewBook()}>添加</button>
            </div>
        )
    }
}
