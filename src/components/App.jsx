import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import Contacts from "pages/Contacts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refresh } from "redux/auth/operations";
import { useAuth } from "hooks";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { CircularProgress, Box } from '@mui/material/';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh())
  }, [dispatch])

  return isRefreshing ? (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: "120px"}}>
      <CircularProgress />
    </Box>
  ) : (<>
    <Routes>
      <Route path="goit-react-hw-08-phonebook/" element={<Layout />} >
        <Route index element={ <RestrictedRoute component={ <Home/> } /> }/>
        <Route path="/login" element={<RestrictedRoute component={ <Login/> } /> }/>
        <Route path="/register" element={ <RestrictedRoute component={ <Register/> } /> } />
        <Route path="/contacts" element={ <PrivateRoute component={ <Contacts/> } /> }/>
      </Route>
    </Routes>

    <ToastContainer autoClose={3000}/>
      
  </>)
};
