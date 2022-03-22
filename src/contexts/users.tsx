import React, { createContext, useContext, useState } from "react";

interface UserContextData {
  users: Array<User>
  setUsers: React.Dispatch<React.SetStateAction<Array<User>>>
}

export interface User {
  fullname: string;
  age: string;
}

const DEFAULT_VALUE = {
    users: [] as Array<User>,
    setUsers: () => []
}

const UserContext = createContext<UserContextData>(DEFAULT_VALUE);

export const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState(DEFAULT_VALUE.users)

  return (
    <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>
  );
};

export const useUsersContext = () => useContext(UserContext);
