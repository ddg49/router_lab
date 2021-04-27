import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Stocks from './pages/Stocks'
import Company from './pages/Company'
import NavBar from './components/NavBar'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/company/:symbol'
          render={(routerProps)=> <Company {...routerProps}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
