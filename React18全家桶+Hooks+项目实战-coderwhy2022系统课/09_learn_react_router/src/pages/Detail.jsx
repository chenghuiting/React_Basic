import React, { PureComponent } from 'react'
import withRouter from '../hoc/with_router'

class Detail extends PureComponent {


  render() {
    console.log(window.location.href);
    return (
      <div>
        <h1>Detail</h1>
        <h2>id：{this.props.router.params.id}</h2>
      </div>
    )
  }
}
export default withRouter(Detail)