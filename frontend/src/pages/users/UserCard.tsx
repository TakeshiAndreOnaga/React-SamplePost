import { useHistory } from "react-router-dom";

type Props = {
	id: number;
	name: string;
	email: string;
}

const style = {
	border: "1px solid black",
	margin: "20px",
	padding: "20px",
}

export const UserCard = (props :Props) => {
	const { id, name, email } = props;
	const history = useHistory();

	const onClickUserDetail = () => {
		history.push({pathname: `/users/details/${id}`})
	}

	return (
		<div style={style}>
			<p>ユーザーID：{id}</p>
			<p>ユーザー名：{name}</p>
			<p>Email：{email}</p>
			<button onClick={onClickUserDetail}>詳細</button>
		</div>
	)
}