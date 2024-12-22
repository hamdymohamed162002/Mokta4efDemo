import { useTranslation } from "react-i18next";
import classes from "./MainPage.module.scss";
import AddIcon from "@mui/icons-material/Add";
import Tiktok from "../../../../assets/Tiktok.png";
import EditIcon from "../../../../component/icons/EditIcon";
import TrashIcon from "../../../../component/icons/TrashIcon";
import DeleteModal from "../../../../component/Ui/Modals/DeleteModal";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";
import CloseIconModal from "../../../../component/icons/CloseIconModal";
import { useSelector } from "react-redux";
import DropZone from "../../../../component/Ui/DropZone/DropZone";
import TrashColorerd from "../../../../component/icons/TrashColored";
import SportIcon from "../../../../component/icons/SportIcon";
import CookingIcon from "../../../../component/icons/Cooking";
import DragIcon from "../../../../component/icons/DragIcon";
import QuestionMark from "../../../../component/icons/QuestionMark";
import { Toggle } from "rsuite";

const FAQ = () => {
  const { t } = useTranslation();
  const [showDeleteModal,setShowDeleteModal]=useState(false);
const lang=useSelector((state)=>state.lng.lng);

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
const [modal,setModal]=useState(false);
const [file,setFile]=useState([]);
  return (
    <div className={classes.PageContainer}>
      <div className={classes.PageHeader}>
        <h3>{t("FAQ")}</h3>
        <div>
          <div className={classes.ExportBtn} onClick={()=>setModal(true)}>
            <AddIcon />
            {t("Add a question")}
          </div>
        </div>
      </div>
      <div className={classes.PageBody}>
       <div className={classes.FaqRow}>
<DragIcon/>
<div className={classes.FaqContntent}>
  <div className={classes.FaqHeader}>
    <div className="d-flex gap-3">
    <QuestionMark />
    كيف يمكنني نشر حسابي على التواصل الاجتماعي على تطبيق مكتشف؟
    </div>
    <div>
    <div
              className="d-flex align-items-center "
              style={{ gap: "16px", }}
            >
              <Toggle />
              <div
                style={{
                  backgroundColor: "#DCDCDD",
                  width: "1px",
                  height: "30px",
                }}
              ></div>
              <div onClick={() => setModal(true)} className="notifcationSend">
                <EditIcon />
              </div>
              <div
                style={{
                  backgroundColor: "#DCDCDD",
                  width: "1px",
                  height: "30px",
                }}
              ></div>
              <div onClick={() => setShowDeleteModal(true)} className="TrashBtn">
                <TrashIcon />
              </div>
            </div>
    </div>
  </div>
  <div className={classes.FAqAnswer}>
  لنشر حسابك على التواصل الاجتماعي على تطبيق مكتشف، اتبع الخطوات التالية:
افتح تطبيق مكتشف.
انقر على أيقونة "الحساب" في أسفل الشاشة.
انقر على "نشر حساب".
حدد نوع الحساب الذي تريد نشره (فيسبوك، تويتر، إنستغرام، إلخ).
أدخل اسم المستخدم وكلمة المرور الخاصين بك.
انقر على "نشر".
  </div>

</div>
       </div>
       <div className={classes.FaqRow}>
<DragIcon/>
<div className={classes.FaqContntent}>
  <div className={classes.FaqHeader}>
    <div className="d-flex gap-3">
    <QuestionMark />
    كيف يمكنني نشر حسابي على التواصل الاجتماعي على تطبيق مكتشف؟
    </div>
    <div>
    <div
              className="d-flex align-items-center "
              style={{ gap: "16px", }}
            >
              <Toggle />
              <div
                style={{
                  backgroundColor: "#DCDCDD",
                  width: "1px",
                  height: "30px",
                }}
              ></div>
              <div onClick={() => setModal(true)} className="notifcationSend">
                <EditIcon />
              </div>
              <div
                style={{
                  backgroundColor: "#DCDCDD",
                  width: "1px",
                  height: "30px",
                }}
              ></div>
              <div onClick={() => setShowDeleteModal(true)} className="TrashBtn">
                <TrashIcon />
              </div>
            </div>
    </div>
  </div>
  <div className={classes.FAqAnswer}>
  لنشر حسابك على التواصل الاجتماعي على تطبيق مكتشف، اتبع الخطوات التالية:
افتح تطبيق مكتشف.
انقر على أيقونة "الحساب" في أسفل الشاشة.
انقر على "نشر حساب".
حدد نوع الحساب الذي تريد نشره (فيسبوك، تويتر، إنستغرام، إلخ).
أدخل اسم المستخدم وكلمة المرور الخاصين بك.
انقر على "نشر".
  </div>

</div>
       </div>
       <div className={classes.FaqRow}>
<DragIcon/>
<div className={classes.FaqContntent}>
  <div className={classes.FaqHeader}>
    <div className="d-flex gap-3">
    <QuestionMark />
    كيف يمكنني نشر حسابي على التواصل الاجتماعي على تطبيق مكتشف؟
    </div>
    <div>
    <div
              className="d-flex align-items-center "
              style={{ gap: "16px", }}
            >
              <Toggle />
              <div
                style={{
                  backgroundColor: "#DCDCDD",
                  width: "1px",
                  height: "30px",
                }}
              ></div>
              <div onClick={() => setModal(true)} className="notifcationSend">
                <EditIcon />
              </div>
              <div
                style={{
                  backgroundColor: "#DCDCDD",
                  width: "1px",
                  height: "30px",
                }}
              ></div>
              <div onClick={() => setShowDeleteModal(true)} className="TrashBtn">
                <TrashIcon />
              </div>
            </div>
    </div>
  </div>
  <div className={classes.FAqAnswer}>
  لنشر حسابك على التواصل الاجتماعي على تطبيق مكتشف، اتبع الخطوات التالية:
افتح تطبيق مكتشف.
انقر على أيقونة "الحساب" في أسفل الشاشة.
انقر على "نشر حساب".
حدد نوع الحساب الذي تريد نشره (فيسبوك، تويتر، إنستغرام، إلخ).
أدخل اسم المستخدم وكلمة المرور الخاصين بك.
انقر على "نشر".
  </div>

</div>
       </div>
      </div>
      <DeleteModal text={t("DeleteConfirmContent")} setShow={setShowDeleteModal} show={showDeleteModal} />
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
              <div className="ModalTitle">{t("Add a question")}</div>
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
                <label htmlFor="notificationTitle"> {t("Question")}</label>
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
  
                <label style={{marginTop:'16px'}} htmlFor="notificationContent"> {t("Answer ")}</label>
                <textarea
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
            <div className="row">
         <div className="col-lg-6 col-md-6 col-sm-12">   <button   className="CancelBtn" onClick={()=>setModal(false)}>{t("Cancel")}</button></div>
         <div className="col-lg-6 col-md-6 col-sm-12">   <button   className="SendBtn" type="submit">{t("Send")}</button></div>

            </div>
              </form>
            </div>
            
          </Modal.Body>
        </Modal>
    </div>
  );
};

export default FAQ;
