import React, { Component } from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css'
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'





class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <Link to='/vue' >
            <Button type='primary'>加载vue应用</Button>
          </Link>
          <Link to='/react' >
            <Button type='primary'>
              加载react应用
            </Button>
          </Link>
          <Switch>
            <Route path='/vue'>
              <div id={'myVue'}></div>
            </Route>
            <Route path='/react'>
              <div id={'myReact'}></div>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App