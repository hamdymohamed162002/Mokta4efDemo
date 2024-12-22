import { useTranslation } from "react-i18next";
import BreaCrumb from "../../../component/Path/BreaCrumb";
import classes from "./Setting.module.scss"
import { NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PLatForms from "./SettingPages/PLatForms";
import { useEffect } from "react";
import Cateogry from "./SettingPages/Cateogry";
import Contires from "./SettingPages/Contires";
import FAQ from "./SettingPages/FAQ";
import Privacy from "./SettingPages/Privacy";
import Terms from "./SettingPages/Terms";
import Employeees from "./SettingPages/Employeees";
import Permissions from "./SettingPages/Permissions";
import Banners from "./SettingPages/Banners";

const SettingPage = () => {
    const {t}=useTranslation();
    const location = useLocation();
    const Navigate=useNavigate();
    useEffect(() => {
if(location?.pathname=="/dashboard/ControlBoard"){
    Navigate("/dashboard/ControlBoard/PlatForms")
}
    }, [location?.pathname])
    return ( 
        <div className={classes.Container}>
            <BreaCrumb
          paths={[
            { name: t("dashboard"), path: "/dashboard/" },
            {
              name: t("Control Board"),
              path: "/dashboard/ControlBoard",
              Active: true,
            },
          ]}
        />
        <h1>
            {t("Control Board")}
        </h1>
        <div className="d-flex ControlBoardContainer" style={{gap:'16px',flexWrap:'wrap'}}>
            <div className={classes.SideBar}>
                <NavLink to="/dashboard/ControlBoard/PlatForms" className={({isActive})=>isActive?`${classes.Route} ${classes.Active}`:classes.Route}>
              {t("PlatForms")}
                     </NavLink>
                     <NavLink to="/dashboard/ControlBoard/Cateogry" className={({isActive})=>isActive?`${classes.Route} ${classes.Active}`:classes.Route}>
                     التصنيفات
                     </NavLink>
                     <NavLink to="/dashboard/ControlBoard/Contires" className={({isActive})=>isActive?`${classes.Route} ${classes.Active}`:classes.Route}>
                     الدولة
                     </NavLink>
                
                     <NavLink to="/dashboard/ControlBoard/FAQ" className={({isActive})=>isActive?`${classes.Route} ${classes.Active}`:classes.Route}>
                     الأسئلة الشائعة
                     </NavLink>
                     <NavLink to="/dashboard/ControlBoard/privacy" className={({isActive})=>isActive?`${classes.Route} ${classes.Active}`:classes.Route}>
                    {t("privacy policy")}
                     </NavLink>
                     <NavLink to="/dashboard/ControlBoard/Terms" className={({isActive})=>isActive?`${classes.Route} ${classes.Active}`:classes.Route}>
                    {t("Terms and Conditions")}
                     </NavLink> <NavLink to="/dashboard/ControlBoard/employees" className={({isActive})=>isActive?`${classes.Route} ${classes.Active}`:classes.Route}>
                    {t("employees")}
                     </NavLink>
                     <NavLink to="/dashboard/ControlBoard/Permissions" className={({isActive})=>isActive?`${classes.Route} ${classes.Active}`:classes.Route}>
                    {t("Permissions")}
                     </NavLink>
                     <NavLink to="/dashboard/ControlBoard/Banners" className={({isActive})=>isActive?`${classes.Route} ${classes.Active}`:classes.Route}>
                    {t("Banners")}
                     </NavLink>
                     
            </div>
         
                <Routes>
                    <Route path="/PlatForms" element={<PLatForms/>}/>
                    <Route path="/Cateogry" element={<Cateogry/>}/>
                    <Route path="/Contires" element={<Contires/>}/>
                    <Route path="/FAQ" element={<FAQ/>}/>

                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="/Terms" element={<Terms/>}/>
                    <Route path="/employees" element={<Employeees/>}/>
                    <Route path="/Permissions" element={<Permissions/>}/>
                    <Route path="/Banners" element={<Banners/>}/>



                    
                    
                    


                    
                </Routes>
      
        </div>
        </div>
     );
}
 
export default SettingPage;