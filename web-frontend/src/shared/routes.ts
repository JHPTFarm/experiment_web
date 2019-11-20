import ConsolePage from './ConsolePage'
import NotFoundPage from './NotFoundPage'

type routeComponent = {
  component: any;
  exact?: boolean;
  path: string;
}

const routes: routeComponent[] = [
  {
    component: ConsolePage,
    exact: true,
    path: '/',
  },
  {
    component: NotFoundPage,
    path: '*',
  },
]

export default routes
