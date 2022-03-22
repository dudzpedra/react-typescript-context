import { useUsersContext } from "../../contexts/users"

const UsersList: React.FC = () => {
    const { users } = useUsersContext()
    console.log(users)
    return (
        <div>
            <h1>Users List</h1>
            {users.map(user => <p key={user.fullname}>{user.fullname}, {user.age} years old.</p>)}
        </div>
    )
}

export default UsersList