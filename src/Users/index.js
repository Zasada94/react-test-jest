import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.data)
			.then((users) => {
				setUsers(users);
			})
			.catch(() => {
				setUsers([]);
			});
	}, []);
	return (
		<section>
			<h4>Users</h4>
			<ul data-testid="users-list">
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</section>
	);
}

export default Users;
