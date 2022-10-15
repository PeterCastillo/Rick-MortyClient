import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducers/reducer'

const store = configureStore({
    reducer
})

store.subscribe(()=> console.log(store))

export default store