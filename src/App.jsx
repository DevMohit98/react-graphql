import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./page/home.page";
import LaunchDetails from "./page/launch-details.page";
import "./App.css";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/launch-details/:id" element={<LaunchDetails />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
