import Modal from "react-bootstrap/Modal";
import CloseIconModal from "../../icons/CloseIconModal";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import  animationData from "../../../assets/Animation.json";
import Lottie from "react-lottie";
import {  toast } from 'react-toastify';
const DeleteModal = ({ show, setShow,text }) => {
  const lang = useSelector((state) => state.lng.lng);
  const { t } = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Notify = () => {  
 return    toast.success('تم حذف العنصر بنجاح', {
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
    <Modal
      className="ModalForUser"
      style={lang == "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      show={show}
      onHide={() => setShow(false)}
      centered
 
    >
      <Modal.Body>
        <div className="ModalHeaderForUser" style={{ border: "none" }}>
          <div style={{ display: "flex", flex: "1" }}></div>
          <div className="ModalTitle">{t("DeleteConfirm")}</div>
          <div className="CloseBtnContainer" onClick={() => setShow(false)}>
            <CloseIconModal />
          </div>
        </div>
        <div className="ModalBodyForUser">
          <div>
            {" "}
            <Lottie options={defaultOptions} width={150} height={150}  />
          </div>
          <p style={{textAlign:'center',fontWeight:'600',color:'#54565B'}}>
            {text}
          </p>
          <div className="row mt-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
<button className="CancelBtn" onClick={()=>setShow(false)}>
    {t('Back')}
</button>

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <button onClick={()=>{
              setShow(false); Notify()
            }} className="DeleteBtn">
    {t('Delete')}
</button>
</div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
