import Marketers from "../icons/sidebarIcons/Marketers";
import PinningAccounts from "../icons/sidebarIcons/PinningAccounts";
import RequestsIcon from "../icons/sidebarIcons/RequestsIcon";
import SettingIcon from "../icons/sidebarIcons/Setting";
import Statics from "../icons/sidebarIcons/Statics";
import TechnicalSupport from "../icons/sidebarIcons/TechnicalSupport";
import DashboardIcon from "../icons/sidebarIcons/dashboardIcon";
import Subscriptions from "../icons/sidebarIcons/subscreption";

export const Links =(t)=>{
    return [
        {
            path:"/dashboard",
            name:t("dashboard"),
            icon:DashboardIcon
        },
        {
            path:"/dashboard/statics",
            name:t("Reports"),
            icon:Statics
        },
        { 
            path:"/dashboard/Requests",
            name:t("Publication Requests"),
            icon:RequestsIcon
        },
        {
            path:"/dashboard/Accounts",
            name:t("Pinning Accounts"),
            icon:PinningAccounts
        },
        {
            path:"/dashboard/Marketers",
            name:t("Marketers"),
            icon:Marketers
        },
        {
            path:"/dashboard/Subscriptions",
            name:t("Subscriptions"),
            icon:Subscriptions
        },
        {
            path:"/dashboard/TechnicalSupport",
            name:t("Technical Support"),
            icon:TechnicalSupport
        },
        {
            path:"/dashboard/ControlBoard",
            name:t("Control Board"),
            icon:SettingIcon
        },
    
    ]
}