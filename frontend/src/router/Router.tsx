import { Switch, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Page404 } from "../pages/Page404"

export const Router = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="*">
				<Page404 />
			</Route>
		</Switch>
	)
}