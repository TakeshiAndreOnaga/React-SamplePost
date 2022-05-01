import { Switch, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Page404 } from "../pages/Page404"
import { UserRoutes } from "../router/UserRoutes"

export const Router = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/users" render={({ match: { url } }) => (
				<Switch>
				{UserRoutes.map(route => (
					<Route key="{route.path}" exact path={`${url}${route.path}`}>
						{route.children}
					</Route>
				))}
				</Switch>
			)} />
			<Route path="*">
				<Page404 />
			</Route>
		</Switch>
	)
}