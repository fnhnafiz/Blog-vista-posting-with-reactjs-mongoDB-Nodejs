import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Pages/Home";
import AddBlog from "../Pages/AddBlog";
import AllBlog from "../Pages/AllBlog";
import FeaturesBlog from "../Pages/FeaturesBlog";
import WishList from "../Pages/WishList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BlogDetails from "../Components/BlogDetails";
import UpdateBlog from "../Components/UpdateBlog";
import PrivateRoute from "../Private/PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <h1 className="text-5xl font-extrabold text-center my-12">I am error</h1>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-blog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-blogs",
        element: <AllBlog></AllBlog>,
      },
      {
        path: "/featured-blogs",
        element: <FeaturesBlog></FeaturesBlog>,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateBlog></UpdateBlog>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
