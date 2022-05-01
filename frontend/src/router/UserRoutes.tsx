import { UserDetail } from "../pages/users/UserDetail";
import { UserList } from "../pages/users/UserList";

export const UserRoutes = [
	{
		path: "/lists",
		exact: true,
		children: <UserList />,
	},
	{
		path: "/details/:id",
		exact: true,
		children: <UserDetail />,
	},
];