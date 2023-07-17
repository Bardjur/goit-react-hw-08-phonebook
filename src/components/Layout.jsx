import { Outlet } from "react-router-dom";
import MainAppBar from "./MainAppBar";

export default function Layout() {
  return (
    <>
      <MainAppBar/>
      <Outlet/>
    </>
  )

}