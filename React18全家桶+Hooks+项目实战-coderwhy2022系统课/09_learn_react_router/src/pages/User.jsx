import React, { PureComponent } from 'react'
import withRouter from '../hoc/with_router'

export class User extends PureComponent {

    render() {
        // 第一种传法：const location = useLocation()
        console.log(this.props.router.location);

        // 第二种传法：const searchParams = useSearchParams()
        console.log(this.props.router.searchParams);
        console.log(this.props.router.searchParams.get('name'));
        console.log(this.props.router.searchParams.get('age'));

        return (
            <div>
                <h1>User Page</h1>
                <h2>
                    name:{this.props.router.searchParams.get('name')}-
                    age:{this.props.router.searchParams.get('age')}
                </h2>
                <h3>
                    name:{this.props.router.query.name}-
                    age:{this.props.router.query.age}
                </h3>
            </div>
        )
    }
}

export default withRouter(User)