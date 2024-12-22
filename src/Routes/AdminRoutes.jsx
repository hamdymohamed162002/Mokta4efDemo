import { Route, Routes } from "react-router-dom";
import LayOut from "../component/layout/layout";
import MainPage from "../pages/dashboard/main/Main";
import Statistics from "../pages/dashboard/Statistics/Statistics";
import SingleClientPage from "../pages/dashboard/Statistics/SingleClientPage/SingleClientPage";
import Requests from "../pages/dashboard/Requests/Requests";
import Accounts from "../pages/dashboard/Accounts/Accounts";
import Marketers from "../pages/dashboard/Marketers/Marketers";
import Subscriptions from "../pages/dashboard/Subscriptions/Subscriptions";
import SettingPage from "../pages/dashboard/Setting/Setting";
import TechnicalSupport from "../pages/dashboard/TechnicalSupport/TechnicalSupport";



const AdminDashboardRoute = () => {
    return (  
        <Routes> 

            <Route path="/" element={<LayOut> 
                <MainPage />
            </LayOut>} />
            <Route path="/Statics" element={<LayOut><Statistics /></LayOut>} />
            <Route path="/Statics/SingleClient" element={<LayOut><SingleClientPage /></LayOut>} />
            <Route path="/Requests" element={<LayOut><Requests/></LayOut>} />
            <Route path="/Accounts" element={<LayOut><Accounts/></LayOut>} />
            <Route path="/Marketers" element={<LayOut><Marketers /></LayOut>} />
            <Route path="/Subscriptions" element={<LayOut><Subscriptions/></LayOut>} />
            <Route path="/ControlBoard/*" element={<LayOut><SettingPage/></LayOut>} />
            <Route path="/TechnicalSupport" element={<LayOut><TechnicalSupport/></LayOut>} />

            

            
            
        </Routes>
    );
}
 
export default AdminDashboardRoute;