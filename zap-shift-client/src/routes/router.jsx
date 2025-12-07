import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Rider from "../pages/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {index: true, Component: Home},
        {path:'coverage', Component: Coverage, 
          // loader: ()=>fetch('/serviceCenters.json').then(res=>res.json())
        },
        {path:'rider', element: <PrivateRoute><Rider></Rider></PrivateRoute>
        },
        {
          path: 'send-parcel',
          element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
          loader: () => fetch('/serviceCenters.json').then(res => res.json())
        }
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
        {path: 'login', Component: Login},
        {path: 'register', Component: Register},
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'my-parcels', 
        Component: MyParcels
      }
    ]
  }
]);