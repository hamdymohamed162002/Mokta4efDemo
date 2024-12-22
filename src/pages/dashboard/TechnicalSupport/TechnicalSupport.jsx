import { useTranslation } from "react-i18next";
import BreaCrumb from "../../../component/Path/BreaCrumb";
import classes from "./TechnicalSupport.module.scss";
import SearchBar from "../../../component/Ui/SearchBar/SearchBar";
import FilterIcon from "../../../component/icons/FilterIcon";
import SortIcon from "../../../component/icons/SorcIcon";
import SortTable from "../../../component/table/StaticsSort/TableWithSort";
import Modal from "react-bootstrap/Modal";
import { useEffect, useRef, useState } from "react";
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
import users from "../../../assets/users.svg";
import money from "../../../assets/money.svg";
import sale from "../../../assets/sale.svg";
import cube from "../../../assets/cube.svg";

import HeadPhone from "../../../assets/HeadPhone.svg";
import CheckedIcon from "../../../assets/CheckedIcon.svg";

import ClockIcon from "../../../assets/ClockIcon.svg";
import DoneIcon from "../../../assets/DoneIcon.svg";
import ClosedIcon from "../../../assets/ClosedIcon.svg";

import ExportIcon from "../../../component/icons/ExportIcon";
import DeleteModal from "../../../component/Ui/Modals/DeleteModal";
import MarketersTable from "../../../component/table/MarketersTable/MarketersTable";
import TechnicalSupportTable from "../../../component/table/TechnicalSupport/TechnicalSupportTable";
import NotMyMessage from "../../../component/Ui/Messsages/NotMyMessage";
import MyMessage from "../../../component/Ui/Messsages/MyMessage";
import SendBtn from "../../../component/icons/SendBtn";
import SendMediaIcon from "../../../component/icons/MediaSendIcon";

const TechnicalSupport = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [ModalData, setModalData] = useState({});
  const [activeSocial, setActiveSocial] = useState("TikTok");
  const lang = useSelector((state) => state.lng.lng);
  const [isActive, setIsActive] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tempMessage, setTempMessage] = useState("");
  const [Messsages,setMessages]=useState([])
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

  const sendReply = () => { 

    if(tempMessage !=="")
    {
      const temp =[...Messsages]
      temp.push(tempMessage)
      setMessages(temp)
    }
    console.log(FullHeight.current.scrollTop)

  }
  const FullHeight =useRef(null);
  const InputRef = useRef(null)
const resetInput =()=>{
  InputRef.current.value=""
}
  useEffect(() => {
    FullHeight.current.scrollTop = FullHeight.current.scrollHeight;
    resetInput()
  }, [Messsages]);
  return (
    <div className="MarketersContainer">
      <div className="d-flex justify-content-between">
        <BreaCrumb
          paths={[
            { name: t("dashboard"), path: "/dashboard/" },
            {
              name: t("Technical Support"),
              path: "/dashboard/TechnicalSupport",
              Active: true,
            },
          ]}
        />
      </div>
      <div className="row mt-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <div className="col">
          <div className={classes.NumberCard}>
            <div className="d-flex gap-2 align-items-center">
              <img src={HeadPhone} />
              <p>رسائل الدعم</p>
            </div>
            <span>43</span>
          </div>
        </div>
        <div className="col">
          <div className={classes.NumberCard}>
            <div className="d-flex gap-2 align-items-center">
              <img src={CheckedIcon} />
              <p>تم الرد</p>
            </div>
            <span>12</span>
          </div>
        </div>

        <div className="col">
          <div className={classes.NumberCard}>
            <div className="d-flex gap-2 align-items-center">
              <img src={ClockIcon} />
              <p>جديد</p>
            </div>
            <span>7</span>
          </div>
        </div>

        <div className="col">
          <div className={classes.NumberCard}>
            <div className="d-flex gap-2 align-items-center">
              <img src={DoneIcon} />
              <p>تم الحل</p>
            </div>
            <span>31</span>
          </div>
        </div>
        <div className="col">
          <div className={classes.NumberCard}>
            <div className="d-flex gap-2 align-items-center">
              <img src={ClosedIcon} />
              <p>المغلق</p>
            </div>
            <span>31</span>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-9">
          <div className="pageCard StaticsContainer" data-aos="fade-up">
            <div className="CardHeader">
              <h3>{t("Technical Support")}</h3>

              <SearchBar />

              <div className="sortBtn ms-2  ">
                <SortIcon />
                <div>{t("Highest issued")}</div>
              </div>
            </div>
            <div className={classes.Tabs}>
              <div className={classes.TabContainer}>
                <div
                  className={`${classes.SingleTab} ${
                    isActive === 1 && classes.Active
                  }`}
                  onClick={() => setIsActive(1)}
                >
                  الكل
                </div>
                <div
                  className={`${classes.SingleTab} ${
                    isActive === 2 && classes.Active
                  }`}
                  onClick={() => setIsActive(2)}
                >
                  تم الرد
                </div>
                <div
                  className={`${classes.SingleTab} ${
                    isActive === 3 && classes.Active
                  }`}
                  onClick={() => setIsActive(3)}
                >
                  جديد{" "}
                </div>
                <div
                  className={`${classes.SingleTab} ${
                    isActive === 4 && classes.Active
                  }`}
                  onClick={() => setIsActive(4)}
                >
                  تم الحل
                </div>
                <div
                  className={`${classes.SingleTab} ${
                    isActive === 5 && classes.Active
                  }`}
                  onClick={() => setIsActive(5)}
                >
                  مغلقة{" "}
                </div>
              </div>
              <div>4 طلبات</div>
            </div>
            <TechnicalSupportTable
              setModal={setModal}
              setShow={setShowDeleteModal}
              setModalData={setModalData}
              resetInput={resetInput}
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
                  <div className="ModalTitle">{t("add Marketer")}</div>
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
                      {t("Discount code")}
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

                    <div className="row mt-3">
                      <div className="col-lg-12 col-md-12 col-sm-12">
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
            <DeleteModal
              text={t("DeleteConfirmContent")}
              setShow={setShowDeleteModal}
              show={showDeleteModal}
            />
          </div>
        </div>
        <div className="col-lg-3 ">
          <div className={`${classes.ChatWidgetCOntainer} pageCard`}>
            <div className={classes.ChatWidget}>
              <div className={classes.Header}>
                <h3>لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر </h3>
                <div className={classes.Profile}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex gap-2">
                      <img src={ProffileImage} />
                      <div>
                        <p>عبدالله محمد</p>
                        <span>AhmedAli@example.com</span>
                        <span>1/12/2023</span>
                      </div>
                    </div>
                    <div className={classes.Pedining}>قيد المراجعة</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className={classes.Solve}>تم الحل</div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className={classes.Close}>اغلاق</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={classes.ChatBody}  ref={FullHeight}>
                <div className={classes.FullHeight}>
                  <NotMyMessage
                    text={
                      "لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة أو الخط دون الاعتماد على محتوى معنوي. قد يستخدم لوريم إيبسوم كنص بديل قبل وضع النص النهائي المطلوب للتصميم. كما يستخدم لإخفاء النص في عملية تسمى بالتغريق"
                    }
                  />


                  <MyMessage
                    text={
                      "لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة أو الخط دون الاعتماد على محتوى معنوي."
                    }
                  />
                  {Messsages.length>0 && Messsages?.map((item,index)=>{
if(item==="")
{
  return
}

                    return <MyMessage key={index} text={item} /> 
                  })}
                 
                </div>
              </div>
              <div  className={classes.SendInput}>
                <SendBtn onClick={sendReply} />
                <input ref={InputRef} onKeyDown={(e)=>
                {
                  if(e.key==="Enter")
                  {
                    sendReply()
                  }
                }} placeholder="اكتب الرد" onChange={(e)=>setTempMessage(e.target.value)}  />
                <SendMediaIcon/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupport;
