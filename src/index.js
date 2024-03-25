import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Vacancies from './components/Vacancies';
import Institutes from './components/Institutes';
import Contact from './components/Contact';
import Join from './components/Join';
import Login from './components/Login';
import Signin from './components/Signin';
import Signnav from './components/Signnav';
import Notification from './components/Notification';
import Lognav from './components/Lognav';
import Jobsavailable from './components/Jobsavailable';
import Apply from './components/Apply';
import Supadm from './components/Supadm';
import Navsupad from './components/Navsupad';
import Postjob from './components/Postjob';
import Application from './components/Application';
import Fackwork from './components/Fackwork';
import Facretai from './components/Facretai';
import Factnew from './components/Factnew';
import Signupinst from './components/Signupinst';
import Cse from './components/Cse';
import Csd from './components/Csd';
import Csm from './components/Csm';
import It from './components/It';
import Register from './components/Register';
import Settinst from './components/Settinst';
import Settingsjobseq from './components/Settingsjobseq';
import Error from './components/Error';
import { Router } from 'react-router-dom';
import Signinlogin from './components/Signinlogin';
import Supadlogin from './components/Supadlogin';
import Supregister from './components/Supregister';
import Profile from './components/Profile';
import Supadna from './components/Supadna';
import Faq from './components/Faq';
import Abced from './components/Abced'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
        <Route index element={<Home />} />
          
<Route path="about" element={<About/>}/>
<Route path = "vacancies" element={<Vacancies/>}/>
<Route path = "institutes" element={<Institutes/>}/>
<Route path = "contact" element={<Contact/>}/>
<Route path = "join" element={<Join/>}/>
 <Route path = "sup_log" element={<Supadlogin/>}/> 
<Route path = "signin" element={<Signinlogin/>}/>
<Route path = "abced" element={<Abced/>}/>

<Route path = "profile" element={<Profile/>}/>
<Route path = "supa" element={<Supadna/>}/>
<Route path = "faq" element={<Faq/>}/>

<Route path = "lognav" element={<Lognav/>}/>
<Route path = "jobsavai" element={<Jobsavailable/>}/>
<Route path = "apply" element={<Apply/>}/>
<Route path = "signup" element={<Signin/>}/>
<Route path = "signav" element={<Signnav/>}/>
<Route path = "notif" element={<Notification/>}/>
<Route path = "supadm" element={<Supadm/>}/>
<Route path = "navbarsupad" element={<Navsupad/>}/>
<Route path = "postjob" element={<Postjob/>}/>
<Route path = "applications" element={<Application/>}/>
<Route path = "facwork" element={<Fackwork/>}/>
<Route path = "retai" element={<Facretai/>}/>
<Route path = "newfac" element={<Factnew/>}/>
<Route path = "signupclg" element={<Signupinst/>}/>
<Route path = "cse" element={<Cse/>}/>
<Route path = "csm" element={<Csm/>}/>
<Route path = "sup_log" element={<Supadlogin/>}/>
{/* <Route path = "footer" element={<Footer/>}/> */}
<Route path = "csd" element={<Csd/>}/>
<Route path = "it" element={<It/>}/>
<Route path = "settings" element={<Settinst/>}/>
<Route path = "sett" element={<Settingsjobseq/>}/>
<Route path = "register_" element={<Register/>}/>
<Route path = "supad_regis" element={<Supregister/>}/>


<Route path="*" element={<Error/>} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
