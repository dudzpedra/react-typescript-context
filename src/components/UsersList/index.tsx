import { useUsersContext } from "../../contexts/users"
import Title from "../ui/Title"

const UsersList: React.FC = () => {
    const { users } = useUsersContext()
    return (
        <div>
            <Title title="Users List" />
            {users.map(user => <p key={user.fullname}>{user.fullname}, {user.age} years old.</p>)}
        </div>
    )
}

export default UsersList