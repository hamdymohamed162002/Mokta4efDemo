import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import LayOut from './component/layout/layout'
import { Route, Routes } from 'react-router-dom'
import 'rsuite/dist/rsuite.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdminDashboardRoute from './Routes/AdminRoutes'
import { CustomProvider } from 'rsuite';
import { useSelector } from 'react-redux';
import arEG from 'rsuite/locales/ar_EG';
import enGB from 'rsuite/locales/en_GB';
import 'react-select/animated';

function App() {
  const [count, setCount] = useState(0)
  const lang = useSelector(state=>state.lng.lng)

useEffect(()=>{ AOS.init();},[])
  return (
    <> 
<CustomProvider rtl={lang==="ar"} locale={lang==="ar"?arEG:enGB}>
<Routes >

<Route path="dashboard/*" element={<AdminDashboardRoute />} />
</Routes>
</CustomProvider>


    </>
  )
}

export default App
