import { RouterProvider } from "react-router-dom";
import "./index.css";
import mainRouter from "./MainRouter/MainRouter";

function App() {
  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
