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

const PLatForms = () => {
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
        <h3>{t("PlatForm")}</h3>
        <div>
          <div className={classes.ExportBtn} onClick={()=>setModal(true)}>
            <AddIcon />
            {t("Add a platform")}
          </div>
        </div>
      </div>
      <div className={classes.PageBody}>
        <div className={classes.PlatformRow}>
          <div
            className="d-flex gap-2 align-items-center "
            style={{ color: "#15181E", fontWeight: "600" }}
          >
            <img src={Tiktok} />
            تيك توك
          </div>
          <div>
            <div
              className="d-flex align-items-center "
              style={{ gap: "16px", padding: "8px" }}
            >
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
        <div className={classes.PlatformRow}>
          <div
            className="d-flex gap-2 align-items-center "
            style={{ color: "#15181E", fontWeight: "600" }}
          >
            <img src={Tiktok} />
            تيك توك
          </div>
          <div>
            <div
              className="d-flex align-items-center "
              style={{ gap: "16px", padding: "8px" }}
            >
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
        <div className={classes.PlatformRow}>
          <div
            className="d-flex gap-2 align-items-center "
            style={{ color: "#15181E", fontWeight: "600" }}
          >
            <img src={Tiktok} />
            تيك توك
          </div>
          <div>
            <div
              className="d-flex align-items-center "
              style={{ gap: "16px", padding: "8px" }}
            >
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
        <div className={classes.PlatformRow}>
          <div
            className="d-flex gap-2 align-items-center "
            style={{ color: "#15181E", fontWeight: "600" }}
          >
            <img src={Tiktok} />
            تيك توك
          </div>
          <div>
            <div
              className="d-flex align-items-center "
              style={{ gap: "16px", padding: "8px" }}
            >
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
              <div className="ModalTitle">{t("Add a new platform")}</div>
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
                <label htmlFor="notificationTitle"> {t("Platform name AR")}</label>
                <input
                className="CustomInput mb-3"

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
   <label htmlFor="notificationTitle"> {t("Platform name EN")}</label>
                <input
                className="CustomInput"

                  id="notificationTitle"
                  name="notificationTitle"
                  type="text"
        
                />
                {/* محتوى الإشعار */}
                <label style={{marginTop:'16px'}} htmlFor="notificationContent"> {t("Raise the platform logo")}</label>
               <DropZone file={file} setFile={setFile} Title={"رفع الشعار"}/> 
{
    file.length>0&&
    <div className="d-flex align-items-center gap-2 my-3">
    <img src={file[0]?.preview}
              style={{width:'32px',height:'32px',borderRadius:'8px'}}
              // Revoke data uri after image is loaded
              onLoad={() => { URL.revokeObjectURL(file[0]?.preview) }} />
              <p>{file[0]?.path}</p>
            <div style={{cursor:'pointer'}} onClick={()=>setFile([])}>
            <TrashColorerd />
            </div>
    </div>
}
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

export default PLatForms;
