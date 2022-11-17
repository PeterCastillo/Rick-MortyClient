import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const saga = createSagaMiddleware()

const store = configureStore({
    reducer,
    middleware: [saga]
})
saga.run(rootSaga)

store.subscribe(()=> console.log(store))

export default store