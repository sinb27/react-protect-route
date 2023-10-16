import useAuth from "../components/ProtectedRoutes";

function Home() {
  const handleLogout = () => {
    useAuth.loggedIn = false;
    console.log("Logout successful");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
    </div>
  );
}

export default Home;
