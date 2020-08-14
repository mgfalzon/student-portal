import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Menu from './Components/Menu'
import MenuData from './Data/Menu'

import Home from './Sections/Home'
import Events from './Sections/Events'
import Internships from './Sections/Internships'

const App = () => (
  <Menu data={MenuData} >
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/events' exact component={Events} />
      <Route path='/internships' exact component={Internships} />
    </Switch>
  </Menu>
)

export default App;
