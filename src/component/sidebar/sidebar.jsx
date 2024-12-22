import { useEffect, useState } from "react";
import DashboardIcon from "../icons/sidebarIcons/dashboardIcon";
import DoubleArrow from "../icons/sidebarIcons/doubleArrow";
import Logo from "../icons/sidebarIcons/logo";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./sidebar.module.scss";
import Statics from "../icons/sidebarIcons/Statics";
import { Links } from "./DashboardRoutes";
import { useTranslation } from "react-i18next";
import LogOutIcon from "../icons/LogOutIcon";
import { useDispatch, useSelector } from "react-redux";
import saFlag from "../../assets/saflag.png";
import UnitdFlage from "../../assets/UnitdFlage.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { toast } from "react-toastify";

const SideBar = ({open, setOpen,mobile,setShowOffCanvas}) => {
  const [langDropDown, setLangDropDown] = useState(false);
  const { t ,i18n} = useTranslation();
  const dashboardLinks = Links(t);
  const locaation = useLocation();
  const lang=useSelector(state=>state.lng.lng)
  const dispatch = useDispatch();
  const Notify = () => {  
    return    toast.success('تم تسجيل الخروج', {
     position: lang == "ar" ? "bottom-left" : "bottom-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     
     theme: "dark",
     });
     }
  const changeLang = (lang) => {
    dispatch(updateLanguage(lang));
    i18n.changeLanguage(lang);
  };
  return (
    <div
      className={
   mobile ?`${classes.SideBarContainer} MobileSideBar SideBarContainer`:     open
   ? `${classes.SideBarContainer} ${classes.active} SideBarContainer active`
   : classes.SideBarContainer
      }
    >
      <div className={classes.logo}>
        <Logo />
      </div>
      <div
        style={{ cursor: "pointer" , transform: open ? "rotate(180deg)" : "rotate(0deg)",transition:'.4s' }}
        onClick={() => {
     if(mobile)
     {
      setShowOffCanvas(false)
     }else setOpen((perv) => !perv);
        }}
      
      >
        <DoubleArrow />
      </div>
      {dashboardLinks.map((link, index) => {

        return (
          <NavLink
          end={!(link?.path=="/dashboard/ControlBoard")}
            to={link.path}
            onClick={()=>{
              if(mobile)
              {
                setShowOffCanvas(false)
              }
            }}
            className={({ isActive }) =>
              isActive
                ? `${classes.SideBarRoute} ${classes.active} SideBarRoute active`
                :`${classes.SideBarRoute} SideBarRoute`
            }
          >
            <link.icon active={locaation.pathname.toLocaleLowerCase() == link.path.toLocaleLowerCase()  || (locaation.pathname.includes("/dashboard/ControlBoard") && link.path=="/dashboard/ControlBoard")} />
            <p>{link.name}</p>

            <div className="Badge">
            {link.name}
            </div>
          </NavLink>
        );
      })}

   {
    !mobile &&   <div className={classes.LogOut}  onClick={()=>{
      Notify()
    }} >

    <LogOutIcon />
    <p>{t("Log Out")}</p>
  </div>
   }
    {
        mobile &&      <div className={classes.Lang}>
        <div
          onClick={() => setLangDropDown((prev) => !prev)}
          className={classes.Btn}
        >
          <img src={saFlag} />
          <ArrowDropDownIcon />
        </div>
        {langDropDown && (
          <div className={classes.Menu}>
            <div onClick={() => changeLang("ar")}>
              <img src={saFlag} /> العربية
            </div>
            <div onClick={() => changeLang("en")}>
              <img
                style={{ width: "30px", borderRadius: "5px" }}
                src={UnitdFlage}
              />{" "}
              الانجليزية
            </div>
          </div>
        )}
      </div>
      }
      {
        mobile &&
        <div style={{display:'flex',color:'white',marginTop:'auto'}} >
 <p>{t("Log Out")}</p>
        <LogOutIcon />
       
      </div>
      }
     
    </div> 
  );
};

export default SideBar;
