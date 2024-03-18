import { isNumber } from 'lodash-es'

const app = document.getElementById('#app')
setTimeout(() => {
  if (app)
    app.innerHTML = isNumber(1) ? '1 is a number' : '1 is not a number'
}, 2000)
