import "./App.css";
import Form from "./components/Form";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import UsersList from "./components/UsersList";
import { UserProvider } from "./contexts/users";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Form />
        <UsersList />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
