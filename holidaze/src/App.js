import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import AdminPage from "./components/admin/AdminPage";
import ContactPage from "./components/contact/ContactPage";
import NavBar from "./components/layout/NavBar";
import { AuthProv } from "./context/AuthContext";
import "./App.css";
import Accommadations from "./components/accommadations/Accommadations";
import AccommadationDetails from "./components/accommadations/accommadationDetails/AccommadationDetails"
import AdminAccommadations from "./components/admin/adminAccommadations/AdminAccommadations"
import AdminBookings from "./components/admin/adminBookings/AdminBookings"
import AdminMessages from "./components/admin/adminMessages/AdminMessages"
import ReadUpdateDelete from "./components/admin/adminMessages/readUpdateDeleteMessage/ReadUpdateDeleteMessage"
import ReadUpdateDeleteBooking from "./components/admin/adminBookings/readUpdateDeleteBooking/ReadUpdateDeleteBooking"
import CrudAcc from "./components/admin/adminAccommadations/rudAcc/RudAcc"
import CreateAcc from "./components/admin/adminAccommadations/createAcc/CreateAcc";


function App() {
	return (
    <AuthProv>
      <Router>
        <NavBar />
      

        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/admin" exact>
              <AdminPage />
            </Route>
            <Route path="/admin/adminAccommadations" exact>
              <AdminAccommadations />
            </Route>
            <Route path="/admin/adminAccommadations/createAcc">
              <CreateAcc />
            </Route>
            <Route path="/admin/adminAccommadations/crudAcc/:id">
              <CrudAcc />
            </Route>
            <Route path="/admin/adminBookings" exact>
              <AdminBookings />
            </Route>
            <Route path="/admin/adminBookings/readUpdateDeleteBooking/:id">
              <ReadUpdateDeleteBooking />
            </Route>
            <Route path="/admin/adminMessages" exact>
              <AdminMessages />
            </Route>
            <Route path="/admin/adminMessages/readUpdateDelete/:id">
              <ReadUpdateDelete />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/accommadations">
              <Accommadations />
            </Route>
            <Route path="/accomadations/accommadationDetails/:id">
              <AccommadationDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProv>
  );
}

export default App;
