import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<h1>This is main Browser Router </h1>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
