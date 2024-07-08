import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

export default function withRouter(WrapperComponent) {
    return function (props) {
        // 1、导航
        const navigate = useNavigate()

        // 2、动态路由的参数 /detail/:id
        const params = useParams()

        // 3、查询字符串的参数 /user?name=bob&age=12
        const location = useLocation()

        // 查询字符串的参数 useSearchParams返回的是一个数组;从数组中解构出searchParams；
        // const arr = useSearchParams()
        const [searchParams] = useSearchParams()

        // Object.fromEntries() 方法接收一个键值对的列表参数，并返回一个带有这些键值对的新对象。
        const query = Object.fromEntries(searchParams)
        console.log(searchParams); // URLSearchParams {size: 2}
        console.log(query); // {name: 'why', age: '18'}

        const router = { navigate, params, location, searchParams, query }
        return <WrapperComponent {...props} router={router} />
    }
}