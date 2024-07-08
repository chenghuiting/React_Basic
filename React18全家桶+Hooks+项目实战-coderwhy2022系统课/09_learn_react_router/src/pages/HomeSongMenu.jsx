import React, { PureComponent } from 'react'
import withRouter from '../hoc/with_router'

export class HomeSongMenu extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      songMenus: [
        { id: 1, name: '111' },
        { id: 2, name: '222' },
        { id: 3, name: '333' },
        { id: 4, name: '444' },
      ],
    }
  }

  navigateToDetail(id) {
    const { navigate } = this.props.router;
    navigate(`/detail/${id}`)
  }

  render() {
    return (
      <div>
        <h1>HomeSongMenu</h1>
        {
          this.state.songMenus.map((item, index) => {
            return <li onClick={() => this.navigateToDetail(item.id)} key={item.id}>{item.name}</li>
          })
        }
      </div>
    )
  }
}

export default withRouter(HomeSongMenu)