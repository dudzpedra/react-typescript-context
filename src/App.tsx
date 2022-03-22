import "./App.css";
import Form from "./components/Form";
import Title from "./components/ui/Title";
import UsersList from "./components/UsersList";
import { UserProvider } from "./contexts/users";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Title />
        <Form />
        <UsersList />
      </div>
    </UserProvider>
  );
}

export default App;
