// 将对价格的统一处理封装成一个函数，价格前加上人民币符号，并保留两位小数；
function formatPrice(price) {
    return '￥' + Number(price).toFixed(2);
}