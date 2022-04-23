import Login from "./pages/User/Auth/Login";
import Register from "./pages/User/Auth/Register";
import { useCurrentUser } from "./queries/userQuery";

function App() {
  const { isLoading } = useCurrentUser();

  if (isLoading) return "Loading..";

  return (
    <div>
      <Login />
      <Register />
    </div>
  );
}

export default App;
