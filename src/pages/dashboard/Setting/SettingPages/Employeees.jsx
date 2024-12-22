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
import FlagIcon from "../../../../component/icons/Flag";
import SearchBar from "../../../../component/Ui/SearchBar/SearchBar";
import SortIcon from "../../../../component/icons/SorcIcon";
import EmployeesTable from "../../../../component/table/Employees/Employees";
import PhoneInput from "../../../../component/Ui/InputNumber";
import PhoneNumber from "../../../../component/Ui/InputNumber";

const Employeees = () => {
  const { t } = useTranslation();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const lang = useSelector((state) => state.lng.lng);

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
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState([]);
  return (
    <div className={classes.PageContainer}>
      <div className={classes.PageHeader}>
        <h3 className="me-4">{t("employees")}</h3>
        <SearchBar />
        <div className="sortBtn ms-2  ">
          <SortIcon />
          <div>{t("Highest issued")}</div>
        </div>
        <div>
          <div className={classes.ExportBtn} onClick={() => setModal(true)}>
            <AddIcon />
            {t("Add an employee")}
          </div>
        </div>
      </div>
      <div className={classes.PageBody}>
        <EmployeesTable setModal={setModal} setShow={setShowDeleteModal} />
      </div>
      <DeleteModal
        text={t("DeleteConfirmContent")}
        setShow={setShowDeleteModal}
        show={showDeleteModal}
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
            <div className="ModalTitle">{t("Add an employee")}</div>
            <div className="CloseBtnContainer" onClick={() => setModal(false)}>
              <CloseIconModal />
            </div>
          </div>
          <div className="ModalBodyForUser">
            <form
              className="sendNotifcationForm"
              onSubmit={formik.handleSubmit}
            >
              {/* عنوان الإشعار */}
              <label htmlFor="notificationTitle"> {t("Platform name")}</label>
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
              <label htmlFor="notificationTitle"> {t("PhoneNumber")}</label>

              <PhoneNumber />
              <label className="mt-3" htmlFor="notificationTitle">
                {" "}
                {t("Email")}
              </label>
              <input
                className="CustomInput"
                id="notificationTitle"
                name="notificationTitle"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.notificationTitle}
              />
              <div className="row mt-3">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  {" "}
                  <button className="CancelBtn" onClick={() => setModal(false)}>
                    {t("Cancel")}
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  {" "}
                  <button className="SendBtn" type="submit">
                    {t("Send")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Employeees;
