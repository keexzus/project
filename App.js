// import React from "react";
// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home.js';
// import About from './pages/About.js';
// import Dashboard from './pages/Dashboard.js';
// import Login from './pages/Login.js';
// import Error from './pages/Error.js';
// import Products from './pages/Products.js';
// import ProtectedRoute from './pages/ProtectedRoute.js';
// import SingleProduct from './pages/SingleProduct.js';
// import SharedProductLayout from './pages/SharedProductLayout.js';
// import SharedLayout from './Components/SharedLayout.js';
// import AxiosExample from './pages/AxiosExample.js';
// import ExamplePage from './pages/ExamplePage.js';
// import newPage from './pages/newPage.js';

// // import Greeting from './greeting.js';
// // import Booklist from './numbers.js';
// // import UseStateBasics from './button-title.js';

// function App() {
//    const [user, setUser] = useState(null);
//   return (
//     <BrowserRouter>
//       <Routes>
//            <Route path='/' element={<SharedLayout />} >
//             <Route index element={<Home />} />
            
//             <Route path='about' element={<About />} />

//             <Route path='products' element={<SharedProductLayout />} >
//             <Route index element={<Products />} />
//             <Route path=':bookId' element={<SingleProduct />} />
//             </Route>

//               <Route path='login' element={<Login setUser={setUser}> </Login> }/>
          
//               <Route path='dashboard' 
//                 element={
//                 <ProtectedRoute user={user}>
//                 <Dashboard user={user} />
//                </ProtectedRoute> } />
            
//                <Route path='axiosexample' element={<AxiosExample />} />

//                <Route path='examplepage' element={<ExamplePage /> } />
//                <Route path='newpage' element={<newPage />} />
            
            
//              </Route>
//              {/* note: have this </Route> and delete first slash at first sharedLayout */}

//              <Route path='*' element={<Error />} />
//          </Routes>
//       </BrowserRouter>
//   );
// }

// export default App;
