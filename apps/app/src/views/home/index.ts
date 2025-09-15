import { HomeView } from '#/views/home/view'
import type { RouteObject } from 'react-router'

export const HomeViewRoute: RouteObject = {
  index: true,
  Component: HomeView,
} as const
