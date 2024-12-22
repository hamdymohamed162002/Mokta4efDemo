import { useTranslation } from "react-i18next";
import BreaCrumb from "../../../component/Path/BreaCrumb";
import classes from "./Statistics.module.scss";
import SearchBar from "../../../component/Ui/SearchBar/SearchBar";
import FilterIcon from "../../../component/icons/FilterIcon";
import SortIcon from "../../../component/icons/SorcIcon";
import SortTable from "../../../component/table/StaticsSort/TableWithSort";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ProffileImage from "../../../assets/Profile.png";
import { useSelector } from "react-redux";
import CloseIconModal from "../../../component/icons/CloseIconModal";
import TikTok from "../../../assets/Tiktok.png"
import Snapchat from "../../../assets/Snapchat.png"

import Instagram from "../../../assets/Instagram.png"

import Xapp from "../../../assets/Xapp.png"

const Statistics = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [ModalData, setModalData] = useState({});
  const lang = useSelector((state) => state.lng.lng);
  return (
    <div>
      <BreaCrumb
        paths={[
          { name: t("dashboard"), path: "/dashboard/" },
          { name: t("Reports"), path: "/dashboard/statics", Active: true },
        ]}
      />

      <div className="pageCard StaticsContainer" data-aos="fade-up">
        <div className="CardHeader">
          <h3>{t("Reports")}</h3>
          <SearchBar />
          <div className="filterIcon">
            <FilterIcon />
          </div>
          <div className="sortBtn">
            <SortIcon />
            <div>{t("Highest issued")}</div>
          </div>
        </div>
        <SortTable setModal={setModal} setModalData={setModalData} />
        <Modal
        centered
        show={modal}
        onHide={() => {
          setModal(false);
        }}
        style={lang == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
        className="ModalForUser"
      >
        <Modal.Body>
          <div className="ModalHeaderForUser">
            <div className="d-flex gap-1 align-items-center">
              <img
                style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                src={ProffileImage}
              />
              {ModalData?.name}
            </div>
            <div className="CloseBtnContainer" onClick={()=>setModal(false)}>
                <CloseIconModal  />
            </div>
          </div>
          <div className="ModalBodyForUser">
            <div className="SocialRow row">
                <div className="Title mt-2 col-md-6 col-12">
                    <img  src={TikTok}/>
                    تيك توك
                </div>
                <div className="= mt-2 col-md-6 col-12"> 
                <div className="UserNameFiled ">
                @Abdallah.mohamed
                </div>
              
                </div>
            </div>
            <div className="SocialRow row">
                <div className="Title mt-2 col-md-6 col-12">
                    <img  src={Xapp}/>
                    اكس
                </div>
                <div className="= mt-2 col-md-6 col-12"> 
                <div className="UserNameFiled ">
                @Abdallah.mohamed
                </div>
              
                </div>
            </div>
            <div className="SocialRow row">
                <div className="Title mt-2 col-md-6 col-12">
                    <img  src={Instagram}/>
                    انستغرام
                </div>
                <div className="= mt-2 col-md-6 col-12"> 
                <div className="UserNameFiled ">
                @Abdallah.mohamed
                </div>
              
                </div>
            </div>
            <div className="SocialRow row">
                <div className="Title mt-2 col-md-6 col-12">
                    <img  src={Snapchat}/>
                    سناب شات
                </div>
                <div className=" mt-2 col-md-6 col-12"> 
                <div className="UserNameFiled ">
                @Abdallah.mohamed
                </div>
                </div>
            </div>
          </div>
          <div onClick={()=>{setModal(false)}} className="BackBtn">
الرجوع
          </div>
        </Modal.Body>
      </Modal>
      </div>
   
    </div>
  );
};

export default Statistics;
