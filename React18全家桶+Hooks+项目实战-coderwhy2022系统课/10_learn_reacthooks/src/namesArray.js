// faker.js 自动生成数据的库；
import { faker } from '@faker-js/faker'

const namesArray = []
for (let i = 0; i < 1000; i++) {
    namesArray.push(faker.name.fullName())
}

export default namesArray