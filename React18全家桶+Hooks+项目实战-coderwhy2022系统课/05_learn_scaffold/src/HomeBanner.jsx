// 函数式组件中使用Context共享的数据
import ThemeContext from "./context/theme-context"

function HomeBanner() {
    return <div>
        <span>HomeBanner</span>
        {/* 函数式组件中使用Context共享的数据 */}
        <ThemeContext.Consumer>
            {
                value => {
                    return <h1>HomeBanner Theme：{value.color}</h1>
                }
            }
        </ThemeContext.Consumer>
    </div>
}

export default HomeBanner