import LocationContext from "contexts/LocationContext";
import PageSelector from "components/PageSelector";
import React, { useState } from "react";
import { ROUTES } from "utils/routes";

function App() {
  const [location, setLocation] = useState(ROUTES.HOME);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <PageSelector />
    </LocationContext.Provider>
  );
}

export default App;
