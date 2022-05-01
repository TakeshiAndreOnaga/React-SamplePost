import { useParams } from "react-router-dom"
import axios from "axios";

import { User } from "./../../types/apis/user";
import { useEffect, useState } from "react";

const style = {
	border: "1px solid black",
	margin: "20px",
	padding: "20px",
}

type Props = {
	id :string;
}

export const UserDetail = () => {
	const { id } = useParams<Props>();
	const [ userDetail, setUserDetail ] = useState<User>();

	const getUser = () => {
		axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then((response) => {
			setUserDetail(response.data);
		})
		.catch(() => {
			console.log("通信エラーです。");
		})
	}

	useEffect(() => getUser(), []);

	return (
		<>
			<div style={style}>
				<p>ユーザーID：{userDetail?.id}</p>
				<p>ユーザー名：{userDetail?.name}</p>
				<p>Email：{userDetail?.email}</p>
			</div>
		</>
	)
}