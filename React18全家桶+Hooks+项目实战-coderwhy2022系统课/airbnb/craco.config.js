const path = require('path')
const CracoLessPlugin = require('craco-less');

const resolve = pathName => path.resolve(__dirname, pathName)

// 通过node中的commonjs导出一个对象
module.exports = {
    // less
    plugins: [
        {
            plugin: CracoLessPlugin,
            // options用于antdesign中修改主题颜色，我们暂时用不到，想要less生效只用上面的一行就可以了；
            // options: {
            //     lessLoaderOptions: {
            //         lessOptions: {
            //             modifyVars: { '@primary-color': '#1DA57A' },
            //             javascriptEnabled: true,
            //         },
            //     },
            // },
        },
    ],
    // webpack
    webpack: {
        // alias: {
        //     // 别名:路径（必须是绝对路径）
        //     "@": path.resolve(__dirname, "src"),//将路径拼接成绝对路径；
        //     "components": "src/components",
        //     "utils": "src/utils"
        // }
        alias: {
            // 别名:路径（必须是绝对路径）
            "@": resolve("src"),//将路径拼接成绝对路径；
            "components": resolve("src/components"),
            "utils": resolve("src/utils")
        }
    }
}