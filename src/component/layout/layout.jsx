import { useTranslation } from "react-i18next";
import NavBar from "../NavBar/NavBar";
import SideBar from "../sidebar/sidebar";
import classes from "./layout.module.scss"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MobileSideBar from "../sidebar/mobileSideBar";
const LayOut = ({children}) => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [showOffCanvas, setShowOffCanvas] = useState(false);
const lang =useSelector(state=>state.lng.lng)
    return (  
        <div className={
`${classes.Container} mainContainer`
        } dir={lang =="ar"?"rtl":"ltr"} > 
<div className="Responsive">
<div style={{transition:'0.4s',minWidth:open?"240px":"72px"} }>

</div>
<SideBar open={open} setOpen={setOpen} />
</div>
        <div className={classes.PageWrapper}>
<div className={classes.PageContainer}>
    <NavBar setShowOffCanvas={setShowOffCanvas} />
<div className={classes.Childcontainer}>
{
    children
}
</div>
</div>

        </div>
<MobileSideBar show={showOffCanvas} setShow={setShowOffCanvas} />
        </div>
    );
}
 
export default LayOut;