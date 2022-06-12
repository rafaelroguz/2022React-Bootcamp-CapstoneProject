import LocationContext from "contexts/LocationContext";
import { useContext } from "react";

const useLocation = () => useContext(LocationContext);

export default useLocation;
