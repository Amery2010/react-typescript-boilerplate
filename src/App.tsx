import React, { Suspense } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// 引入 router 配置信息
import { routes } from './router'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
