import "./App.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./store";
import { authChangeHandler } from "./containers/userAuth";
import { auth } from "./firebase/firebase";
import AppRoutes from "./AppRoutes";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authChangeHandler(auth));
  }, []);

  return <AppRoutes />;
}

export default App;
