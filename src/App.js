import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/Service/Service';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}>
            {/* <Route path='donation' element={<Donation/>}/> */}
          </Route>
          <Route path='/donation/:id' element={<Service/>} />
          <Route path='login' element={<Login></Login>} />
          <Route path='/*' element={<PrivateRoute/>}>
            <Route path='donation' element={<Donation/>}/>
          </Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>

  );
}

export default App;



// https://web.facebook.com/Probiirghosh/


//     git clone --bare assignmentRepoURL

 

// ৪. cd করে কমান্ড লাইন দিয়ে নতুন যেটা ক্লোন করেছো সেই ফোল্ডার এর ভিতরে ঢুকো 

// ৫. তোমার গিটহাব একাউন্টে গিয়ে এ নতুন একটা পাবলিক রিপো খুলে সেটার .git ওয়ালা লিংক কপি করে নিয়ে এসে নিচের মতো করে বসাও 

 

// git push --mirror publicRepoURL

