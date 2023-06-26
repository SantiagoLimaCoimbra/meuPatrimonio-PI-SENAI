import React, { useState, useContext } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

import SignIn from "./Pages/signIn/signIn";
import Login from "./Pages/login/login";
import Dashboard from "./Pages/dashboard/dashboard";

import { AuthProvider, AuthContext } from "./Contexts/auth";

// Items
import ViewItems from "./Pages/item/viewItems/viewItems";
import NewItem from "./Pages/item/newItem/newItem";
import EditItem from "./Pages/item/editItem/editItem";

// Categories
import ViewCategories from "./Pages/category/viewCategories/viewCategories";
import NewCategory from "./Pages/category/newCategory/newCategory";
import EditCategory from "./Pages/category/editCategory/editCategory";

// Employees
import ViewEmployees from "./Pages/employee/viewEmployees/viewEmployees";
import NewEmployee from "./Pages/employee/newEmployee/newEmployee";
import EditEmployee from "./Pages/employee/editEmployee/editEmployee";

// Area
import ViewAreas from "./Pages/area/viewAreas/viewAreas";
import NewArea from "./Pages/area/newArea/newArea";
import EditArea from "./Pages/area/editArea/editArea";

// Loading
import Loading from "./Components/loadingComponent/loading";


export default function Rotas() {


   const Private = ({ children }) => {

      const { loading, user } = useContext(AuthContext);

      if (loading) {
         return <Loading />
      }

      if (!user){
         return <Navigate to="/login "/>;
      }

      return children;

   }  
   
   return(
       <Router>
       <AuthProvider>
            <Routes>
               <Route element={ <Login/> }  path="/login" exact />
               <Route element={ <SignIn/> }  path="/signin" />

               <Route element={ <Private> <ViewItems/> </Private> }  path="/" />
               <Route element={ <Private> <ViewItems/> </Private> }  path="/viewItems" />
               <Route element={ <Private> <EditItem/> </Private> }  path="/editItem" />

               <Route element={ <Private> <Dashboard/> </Private> }  path="/dashboard" />

               <Route element={ <Private> <ViewCategories/> </Private>} path="/viewCategories" />
               <Route element={ <Private> <NewCategory/> </Private>} path="/newCategory"/>
               <Route element={ <Private> <EditCategory/> </Private>} path="/editCategory/:id_category"/>

               <Route element={ <Private> <ViewEmployees/> </Private>} path="/viewEmployees"/>
               <Route element={ <Private> <NewEmployee/> </Private>} path="/newEmployee"/>
               <Route element={ <Private> <EditEmployee/> </Private> }  path="/editEmployee/:id_employee" />

               <Route element={ <Private> <ViewAreas/> </Private>} path="/viewAreas"/>
               <Route element={ <Private> <NewArea/> </Private>} path="/newArea"/>
               <Route element={ <Private> <EditArea/> </Private> }  path="/editArea" />

            </Routes>
         </AuthProvider>
       </Router>
   )
}
