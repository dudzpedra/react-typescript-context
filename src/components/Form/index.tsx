import { useState, useEffect } from "react";
import { User, useUsersContext } from "../../contexts/users";
import styles from "./Form.module.css";

const Form: React.FC = () => {
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const { users, setUsers } = useUsersContext();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (fullname.length > 0 && age.length) {
      const newUser: User = {
        fullname,
        age,
      };
      setSuccessMsg('New person added successfully.')
      setUsers(users.concat(newUser));
      setFullname("");
      setAge("");
      setErrorMsg('')
      setTimeout(() => setSuccessMsg(''), 2000)
    } else {
        setErrorMsg('You must provide fullname and age')
        setTimeout(() => setErrorMsg(''), 3000)
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Fullname"
        value={fullname}
        onChange={({ target }) => setFullname(target.value)}
      />
      <input
        type="number"
        name="age"
        id="age"
        placeholder="Age"
        value={age}
        onChange={({ target }) => setAge(target.value)}
      />
      {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      {successMsg && <p className={styles.success}>{successMsg}</p>}
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
