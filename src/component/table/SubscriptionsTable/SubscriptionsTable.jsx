import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { Table, Toggle } from "rsuite";
import { mockUsers } from "./mock";
import { useTranslation } from "react-i18next";
import ProffileImage from "../../../assets/Profile.png";
import MoreVertical from "../../icons/moreDorsVertical";
import TikTok from "../../icons/TikTok";
import NotificationIcon from "../../icons/NotificationIcon";
import TrashIcon from "../../icons/TrashIcon";
import EditIcon from "../../icons/EditIcon";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const { Column, HeaderCell, Cell } = Table;
const data = mockUsers(6);
const Subscreption = ({
  rowData,
  dataKey,
  setModal,
  setModalData,
  ...props
}) => {
  const ClickHandler = () => {
    setModal(true);
    setModalData(rowData);
  };
  return (
    <Cell {...props}>
      <div onClick={ClickHandler}>{rowData?.email}</div>
    </Cell>
  );
};
const SubscriptionsTable = ({ setModal, setModalData,setShow }) => {
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === "string") {
          x = x.charCodeAt();
        }
        if (typeof y === "string") {
          y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };
 
  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };
  const lang = useSelector((state) => state.lng.lng);
  const { t } = useTranslation();
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
    <div>
      <Table
        height={420}
        data={getData()}
        sortColumn={sortColumn}
        rowHeight={60}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
        rtl={true}
        style={{ widows: "100%" }}
      >
        <Column width={150} align="center">
          <HeaderCell>{t("ID")}</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column minWidth={80}>
          <HeaderCell>{t("Sale")}</HeaderCell>
          <Cell>
          الأساسية
          </Cell>
        </Column>
        <Column minWidth={80}>
          <HeaderCell>{t("PlatForm")}</HeaderCell>
          <Cell>
          سناب شات 1
          </Cell>
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>{t("StaticsSubscriptions")}</HeaderCell>
          <Cell> </Cell>
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>{t("Cost")}</HeaderCell>
          <Cell>79 RS</Cell>
        </Column>

        <Column flexGrow={1} sortable>
          <HeaderCell>{t("Post exchange")}</HeaderCell>
          <Cell>3</Cell>
        </Column>

        <Column flexGrow={1} sortable>
          <HeaderCell>{t("Cash")}</HeaderCell>
          <Cell>3</Cell>
        </Column>
        <Column flexGrow={1} sortable >
          <HeaderCell>{t("Links")}</HeaderCell>
          <Cell>3</Cell>

        </Column>
        <Column flexGrow={1}>
          <HeaderCell>{t("Package duration")}</HeaderCell>
          <Cell>
          شهر
          </Cell>
        </Column>

        <Column width={200} >
          <HeaderCell>{t("End date")}</HeaderCell>
          <Cell   >
          22/12/2023
          </Cell>
        </Column>

        <Column width={250}>
          <HeaderCell></HeaderCell>
          <Cell>
       <div className="d-flex align-items-center h-100" style={{gap:'16px',padding:'8px'}}>
        <div>
          <Toggle onChange={(e)=>{

            if(e){
              Notify("تم تفعيل الباقة")
              return
            }
            Notify("تم  الغاء تفعيل الباقة")

          }} color={"#303645"} />
        </div>
        <div style={{backgroundColor:'#DCDCDD',width:'1px',height:"100%"}}></div>

        <div onClick={()=>setModal(true)} className="notifcationSend">
          <EditIcon />
        </div>
        <div style={{backgroundColor:'#DCDCDD',width:'1px',height:"100%"}}></div>
        <div onClick={()=>setShow(true)} className="TrashBtn">
          <TrashIcon />
        </div>
       </div>
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default SubscriptionsTable;
