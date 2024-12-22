import { useTranslation } from "react-i18next";
import BreaCrumb from "../../../component/Path/BreaCrumb";
import classes from "./Subscriptions.module.scss";
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
import AddIcon from "@mui/icons-material/Add";

import InstagramPng from "../../../assets/Instagram.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import XappPng from "../../../assets/Xapp.png";
import { DatePicker } from "rsuite";
import SnapChat from "../../../component/icons/Sanpchat";
import Instagram from "../../../component/icons/Instgram";
import Xapp from "../../../component/icons/Xapp";
import TikTok from "../../../component/icons/TikTok";
import SubscriptionsTable from "../../../component/table/SubscriptionsTable/SubscriptionsTable";
import ExportIcon from "../../../component/icons/ExportIcon";
import DeleteModal from "../../../component/Ui/Modals/DeleteModal";
import { toast } from "react-toastify";

const Subscriptions = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [ModalData, setModalData] = useState({});
  const [PeriodActive, setPeriodActive] = useState(1);
  const lang = useSelector((state) => state.lng.lng);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const initialValues = {
    notificationTitle: "",
    notificationContent: "",
  };

  const validationSchema = Yup.object({
    notificationTitle: Yup.string().required(t("NotificationTitle_Requied")),
    notificationContent: Yup.string().required(
      t("NotificationContent_Requied")
    ),
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
  const Notify = (text) => {  
    return    toast.success(text, {
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
    <div className="SubscriptionsContainer">
      <div className="d-flex justify-content-between">
        <BreaCrumb
          paths={[
            { name: t("dashboard"), path: "/dashboard/" },
            {
              name: t("Subscriptions"),
              path: "/dashboard/Subscriptions",
              Active: true,
            },
          ]}
        />
      </div>

      <div className="pageCard StaticsContainer" data-aos="fade-up">
        <div className="CardHeader">
          <h3>{t("Subscriptions")}</h3>

          <SearchBar />

          <div className="sortBtn ms-2  ">
            <SortIcon />
            <div>{t("Highest issued")}</div>
          </div>

          <div
            className={classes.ExportBtn}
            style={{ marginInlineStart: "16px" }}
            onClick={() => setModal(true)}
          >
            <AddIcon />
            {t("add new subscription")}
          </div>
        </div>

        <SubscriptionsTable
          setModal={setModal}
          setShow={setShowDeleteModal}
          setModalData={setModalData}
        />
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
              <div className="ModalTitle">{t("Add a new subscription")}</div>
              <div
                className="CloseBtnContainer"
                onClick={() => setModal(false)}
              >
                <CloseIconModal />
              </div>
            </div>
            <div className="ModalBodyForUser">
              <form
                className="sendNotifcationForm"
                onSubmit={formik.handleSubmit}
              >
                {/* عنوان الإشعار */}
                <label htmlFor="notificationTitle"> {t("Sale")}</label>
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
                  <div className="FromError">
                    {formik.errors.notificationTitle}
                  </div>
                ) : null}

                {/* محتوى الإشعار */}
                <label
                  style={{ marginTop: "16px" }}
                  htmlFor="notificationContent"
                >
                  {" "}
                  {t("Cost")}
                </label>
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
                  <div className="FromError">
                    {formik.errors.notificationContent}
                  </div>
                ) : null}

                <div>
                  <label
                    style={{ marginTop: "16px" }}
                    htmlFor="notificationContent"
                  >
                    {" "}
                    {t("Package duration")}
                  </label>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div
                        className={`CheckBoxCustom ${
                          PeriodActive === 1 && "active"
                        }`}
                        onClick={() => setPeriodActive(1)}
                      >
                        <div className="Cricle">
                          {" "}
                          <span></span>
                        </div>
                        شهرية
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                      <div
                        className={`CheckBoxCustom ${
                          PeriodActive === 2 && "active"
                        }`}
                        onClick={() => setPeriodActive(2)}
                      >
                        <div className="Cricle">
                          {" "}
                          <span></span>
                        </div>
                        سنوية
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                <label
                    style={{ marginTop: "16px" }}
                    htmlFor="notificationContent"
                  >
                    {" "}
                    {t("End date")}
                  </label>
                <div>
              <DatePicker oneTap style={{backgroundColor:'white',width:'100%'}} placement="topEnd" menuClassName="ModalMenu"  />
                </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    {" "}
                    <button
                      className="CancelBtn"
                      onClick={() => setModal(false)}
                    >
                      {t("Cancel")}
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    {" "}
                    <button className="SendBtn" onClick={()=>{
                      Notify("تم اضافة الاشتراك بنجاح");
                      setModal(false);
                    }} type="submit">
                      {t("Send")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
        <DeleteModal
          text={t("DeleteConfirmContent")}
          setShow={setShowDeleteModal}
          show={showDeleteModal}
        />
      </div>
    </div>
  );
};

export default Subscriptions;
