import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'

export const routes: RouteProps[] = [
  {
    path: '/',
    component: lazy(() => import(/* webpackChunkName: "home" */ './pages/Home')),
  },
]
