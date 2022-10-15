import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter ,  Routes , Route } from "react-router-dom";
import GeneralView from './routes/GeneralView';
import CreatePerfil from './routes/CreatePerfil';
import Favorites from './routes/Favortites';
import Perfil from './routes/Perfil';
import store from './redux/store'
import { Provider } from 'react-redux'
import "../src/StyleComponents/normalize.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<GeneralView/>}/>
            <Route path='CreatePerfil' element={<CreatePerfil/>}/>
            <Route path='Perfil' element={<Perfil/>}/>
            <Route path='Favorites' element={<Favorites/>}/>
          </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
)
