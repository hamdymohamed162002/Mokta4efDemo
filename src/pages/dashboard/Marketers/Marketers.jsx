import { useTranslation } from "react-i18next";
import BreaCrumb from "../../../component/Path/BreaCrumb";
import classes from "./Marketers.module.scss";
import SearchBar from "../../../component/Ui/SearchBar/SearchBar";
import FilterIcon from "../../../component/icons/FilterIcon";
import SortIcon from "../../../component/icons/SorcIcon";
import SortTable from "../../../component/table/StaticsSort/TableWithSort";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ProffileImage from "../../../assets/Profile.png";
import { useSelector } from "react-redux";
import CloseIconModal from "../../../component/icons/CloseIconModal";
import TikTokPng from "../../../assets/Tiktok.png";
import Snapchat from "../../../assets/Snapchat.png";
import AddIcon from '@mui/icons-material/Add';
import InstagramPng from "../../../assets/Instagram.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import XappPng from "../../../assets/Xapp.png";
import { DatePicker } from "rsuite";
import SnapChat from "../../../component/icons/Sanpchat";
import Instagram from "../../../component/icons/Instgram";
import Xapp from "../../../component/icons/Xapp";
import TikTok from "../../../component/icons/TikTok";
import users from "../../../assets/users.svg"
import money from "../../../assets/money.svg"
import sale from "../../../assets/sale.svg"
import cube from "../../../assets/cube.svg"




import ExportIcon from "../../../component/icons/ExportIcon";
import DeleteModal from "../../../component/Ui/Modals/DeleteModal";
import MarketersTable from "../../../component/table/MarketersTable/MarketersTable";
import { toast } from "react-toastify";

const Marketers = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [ModalData, setModalData] = useState({});
  const [activeSocial, setActiveSocial] = useState("TikTok");
  const lang = useSelector((state) => state.lng.lng);
const [showDeleteModal,setShowDeleteModal]=useState(false)
  const initialValues = {
    notificationTitle: "",
    notificationContent: "",
  };

  const validationSchema = Yup.object({
    notificationTitle: Yup.string().required(t("NotificationTitle_Requied")),
    notificationContent: Yup.string().required(t("NotificationContent_Requied")),
  });



  const onSubmit = (values) => {
    // Handle form submission logic here
    console.log("Form values:", values);
  };


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const Notify = () => {  
    return    toast.success('تم  الاضافة  بنجاح', {
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

  return (
    <div className="MarketersContainer">
      <div className="d-flex justify-content-between">
        <BreaCrumb
          paths={[
            { name: t("dashboard"), path: "/dashboard/" },
            {
              name: t("Marketers"),
              path: "/dashboard/Marketers",
              Active: true,
            },
          ]}
        />
   
      </div>
<div className="row mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
        <div className={classes.NumberCard }>
<div className="d-flex gap-2 align-items-center">
<img  src={users}/>
<p>
إجمالي عدد المشتركين من المسوقين
</p>
</div>
<span>
43
</span>
        </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    <div className={classes.NumberCard }>
<div className="d-flex gap-2 align-items-center">
<img  src={money}/>
<p>
إجمالي المبيعات
</p>
</div>
<span>
12
</span>
        </div>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
    <div className={classes.NumberCard }>
<div className="d-flex gap-2 align-items-center">
<img  src={sale}/>
<p>
إجمالي العمولات
</p>
</div>
<span>
7
</span>
        </div>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
    <div className={classes.NumberCard }>
<div className="d-flex gap-2 align-items-center">
<img  src={cube}/>
<p>
إجمالي المتبقي
</p>
</div>
<span>
31
</span>
        </div>
    </div>

</div>
      <div className="pageCard StaticsContainer" data-aos="fade-up">
        <div className="CardHeader">
          <h3>{t("Marketers")}</h3>
         
          <SearchBar />

          <div className="sortBtn ms-2  ">
            <SortIcon />
            <div>{t("Highest issued")}</div>
          </div>
          <div className="d-flex align-items-center gap-1 mx-2">
            {t("from")}
            <DatePicker oneTap />
          </div>
          <div className="d-flex align-items-center gap-1">
            {t("To")}
            <DatePicker oneTap style={{ cursor: "pointer !important" }} />
          </div>
          <div className={classes.ExportBtn} style={{marginInlineStart:'16px'}} onClick={()=>setModal(true)}>
          <AddIcon />
          {t("add Marketer")}
        </div>
        </div>

        <MarketersTable setModal={setModal} setShow={setShowDeleteModal} setModalData={setModalData} />
        <Modal
          size="md"
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
              <div style={{ display: "flex", flex: "1" }}></div>
              <div className="ModalTitle">{t("add Marketer")}</div>
              <div
                className="CloseBtnContainer"
                onClick={() => setModal(false)}
              >
                <CloseIconModal />
              </div>
            </div>
            <div className="ModalBodyForUser">
            
              <form className="sendNotifcationForm" onSubmit={formik.handleSubmit}>
                {/* عنوان الإشعار */}
                <label htmlFor="notificationTitle"> {t("Name")}</label>
                <input
                className="CustomInput"
                  id="notificationTitle"
                  name="notificationTitle"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.notificationTitle}
                />
                {formik.touched.notificationTitle &&
                formik.errors.notificationTitle ? (
                  <div className="FromError">{formik.errors.notificationTitle}</div>
                ) : null}

                {/* محتوى الإشعار */}
                <label style={{marginTop:'16px'}} htmlFor="notificationContent"> {t("Discount code")}</label>
                <input
                className="CustomInput"

                  id="notificationContent"
                  name="notificationContent"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.notificationContent}
                />
                {formik.touched.notificationContent &&
                formik.errors.notificationContent ? (
                  <div className="FromError">{formik.errors.notificationContent}</div>
                ) : null}

            <div className="row mt-3">
 
         <div className="col-lg-12 col-md-12 col-sm-12">   <button   className="SendBtn" onClick={()=>{
          setModal(false);
          Notify()
         }} type="submit">{t("Send")}</button></div>

            </div>
              </form>
            </div>
            
          </Modal.Body>
        </Modal>
        <DeleteModal text={t("DeleteConfirmContent")} setShow={setShowDeleteModal} show={showDeleteModal} />
      </div>
    </div>
  );
};

export default Marketers;
