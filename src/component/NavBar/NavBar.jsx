import { useTranslation } from "react-i18next";
import classes from "./NavBar.module.scss";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import saFlag from "../../assets/saflag.png";
import UnitdFlage from "../../assets/UnitdFlage.png";
import BillNotifi from "../icons/bill";
import Setting from "../icons/Setting";
import ProfileImage from "../../assets/Profile.png";
import { updateLanguage } from "../../redux/lng";
import { useDispatch } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
const NavBar = ({setShowOffCanvas}) => {
  const { t, i18n } = useTranslation();
  const [langDropDown, setLangDropDown] = useState(false);
  const [ProfileDropDown, setProfileDropDown] = useState(false);

  const dispatch = useDispatch();
  const changeLang = (lang) => {
    setLangDropDown(false);
    dispatch(updateLanguage(lang));
    i18n.changeLanguage(lang);
  };
  const navigate = useNavigate()
  return (
    <div className={classes.NavBarContainer}>
      <div className={classes.Hello}>
        <h1>{t("Welcome")}</h1>
        <p>محمد محمد</p>
      </div>
      <div className={classes.NavBarDetials}>
        <div className={classes.Lang}>
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
        <div>
          <BillNotifi />
        </div>
        <div style={{cursor:'pointer'} } onClick={()=>{navigate("/dashboard/ControlBoard/PlatForms")}}>
          <Setting />
        </div>
        <div className={classes.Profile}>
          <div
            onClick={() => setProfileDropDown((prev) => !prev)}
            className={classes.Btn}
          >
            <img src={ProfileImage} />
            <ArrowDropDownIcon />
          </div>
          {/* {ProfileDropDown && <div className={classes.Menu}></div>} */}
        </div>
        <div onClick={()=>{setShowOffCanvas(true)}} className={classes.MenuIcon}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
