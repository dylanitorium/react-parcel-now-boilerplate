import React from "react";
import useAuth0 from "./auth/useAuth0";
import FullSizeCentered from "./components/FullSizeCentered";
import Button from "./components/Button";
import Dashboard from "./components/Dashboard";

function App() {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();

  if (loading) {
    return <FullSizeCentered>Loading...</FullSizeCentered>;
  }

  if (!isAuthenticated) {
    return (
      <FullSizeCentered>
        <Button onClick={() => loginWithRedirect({})}>Login / Sign Up</Button>
      </FullSizeCentered>
    );
  }

  return <Dashboard />;
}

export default App;
