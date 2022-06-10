import LocationContext from "contexts/LocationContext";
import PageSelector from "components/PageSelector";
import React, { useState } from "react";
import { ROUTES } from "utils/routes";

function App() {
  // TODO: using context api to handle location until Router is implemented
  // TODO: restore home as default route once deliverable 2 develop is finished
  const [location, setLocation] = useState(ROUTES.PRODUCTS);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <PageSelector />
    </LocationContext.Provider>
  );
}

export default App;
