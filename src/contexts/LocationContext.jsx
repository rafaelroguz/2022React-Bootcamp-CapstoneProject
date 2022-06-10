import { createContext } from "react";

const LocationContext = createContext({
  location: null,
  setLocation: () => {},
});

export default LocationContext;
