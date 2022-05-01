import { useCallback, useEffect, useState } from "react";
import axios from 'axios';

import { User } from '../../types/apis/user';
import { UserCard } from './UserCard';

export const UserList = () => {
	const [users, setUsers] = useState<Array<User>>([]);

	const getUsers = useCallback(() => {
		axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
		.then((response) => {
			setUsers(response.data);
		})
		.catch((error) => {
			console.log("通信エラーです。");
			console.log(error);
		})
	}, []);

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<p>ユーザー一覧ページです。</p>
			{users.map(user => (
				<UserCard key={user.name} name={user.name} email={user.email} id={user.id} />
			))}
		</>
	)
};