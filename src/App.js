import React from "react";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home.js';
// above home replaced with TabsHome
import About from './pages/About.js';
import Dashboard from './pages/Dashboard.js';
import Login from './pages/Login.js';
import Error from './pages/Error.js';
import Products from './pages/Products.js';
import ProtectedRoute from './pages/ProtectedRoute.js';
import SingleProduct from './pages/SingleProduct.js';
import SharedProductLayout from './pages/SharedProductLayout.js';
import SharedLayout from './Components/SharedLayout.js';
import AxiosExample from './pages/AxiosExample.js';
import ExamplePage from './pages/ExamplePage.js';
import TestPage from './pages/TestPage.js';
import TabsHome from './pages/Tabs.js';
import SimpleCRM from './pages/SimpleCRM.js';
import ExtraForms from "./pages/forms.js";
import CocoBook from './pages/TextGenerator.js'
import GroceryList from './pages/GroceryList.js'
 

// import Greeting from './greeting.js';
// import Booklist from './numbers.js';
// import UseStateBasics from './button-title.js';


function App() {
   const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<SharedLayout />}>
           <Route index element={<TabsHome />} />
            
            <Route path='about' element={<About />} />

           <Route path='products' element={<SharedProductLayout />} >
            <Route index element={<Products />} />
            <Route path=':bookId' element={<SingleProduct />} />
           </Route>

              <Route path='login' element={<Login setUser={setUser}> </Login> }/>
          
              <Route path='dashboard' 
                element={
                <ProtectedRoute user={user}>
                <Dashboard user={user} />
               </ProtectedRoute> } />
            
              <Route path='axiosexample' element={<AxiosExample />} />

              <Route path='examplepage' element={<ExamplePage /> } />

              <Route path='testpage' element={<TestPage />} />

              <Route path='simplecrm' element={<SimpleCRM />} />

              <Route path='cocobook' element={<CocoBook /> } />

              <Route path='grocerylist' element={<GroceryList />} />

              <Route path='extraforms' element={<ExtraForms />} />
 

              {/* <Route path='tabs' element={<Tabs />} /> */}
            
            
            </Route>

             
            
           <Route path='*' element={<Error />} />
         </Routes>
      </BrowserRouter>
  );
}

export default App;
