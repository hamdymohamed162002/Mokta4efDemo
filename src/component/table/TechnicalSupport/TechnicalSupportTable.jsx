import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { Table } from "rsuite";
import { mockUsers } from "./mock";
import { useTranslation } from "react-i18next";
import ProffileImage from "../../../assets/Profile.png";
import MoreVertical from "../../icons/moreDorsVertical";
import TikTok from "../../icons/TikTok";


import NotificationIcon from "../../icons/NotificationIcon";
import TrashIcon from "../../icons/TrashIcon";
import ClsoeFillBtn from "../../icons/ClsoeFillBtn";
import CheckFillBtn from "../../icons/CheckedFillBtn";
import ShareFillIcon from "../../icons/ShareFillIcon";
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
const  TechnicalSupportTable = ({ setModal, setModalData,setShow,resetInput }) => {
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [loading, setLoading] = React.useState(false);
const [activeRow,setActiveRow]=React.useState()
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
  const Profile = ({ rowData, dataKey, ...props }) => {

    return (
        <Cell {...props} >
<div className="d-flex gap-1 align-items-center"  style={{height:'100%'}}>
<img  style={{width:'32px',height:'32px',borderRadius:'50%'}} src={ProffileImage} />
عبدالله محمد
</div>
        </Cell>)}
  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };
  useEffect(() => {
    console.log(activeRow)
  },[activeRow] );//[sortColumn, sortType
  const { t } = useTranslation();
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
        className="TechnicalSupportTable"
        onRowClick={(rowData)=>{
          setActiveRow(rowData?.id);
          resetInput();
        } }
        style={{ widows: "100%" }}
        rowClassName={(rowData)=>activeRow === rowData?.id && "activeRow"}
      >
      
        <Column width={200}>
          <HeaderCell>{t("Name")}</HeaderCell>
         
            <Profile />
        
        </Column>

        <Column flexGrow={1}>

          <HeaderCell>{t("Title")}</HeaderCell>
          <Cell>لوريم إيبسوم هو نص مؤقت يستخدم في التصميم </Cell>
        </Column>

        <Column width={100}>
          <HeaderCell>{t("Submission date")}</HeaderCell>
          <Cell>1/12/2023</Cell>
        </Column>

       

     

        <Column flexGrow={1}>

          <HeaderCell style={{textAlign:'center'}}>{t("Advertiser status")}</HeaderCell>
          <Cell   >
{
  rowData => 
  (
    <div className="d-flex justify-content-center  ">
      {
        rowData.isActive ==="تم"?
        <div
        style={{
          padding: "4px 8px",
          borderRadius: "16px",
          color: "white",
          backgroundColor: "#32A840",
        }}
      >
        تم
      </div>:
rowData.isActive ==="مؤكد"?
<div
style={{
  padding: "4px 8px",
  borderRadius: "16px",
  color: "white",
  backgroundColor: "#303645",
}}
>
مؤكد
</div>:
rowData.isActive ==="الغاء"?
<div
style={{
  padding: "4px 8px",
  borderRadius: "16px",
  color: "white",
  backgroundColor: "#96979A",
}}
>
الغاء
</div>
:rowData.isActive ==="إنتظار"?

<div
style={{
  padding: "4px 8px",
  borderRadius: "16px",
  color: "white",
  backgroundColor: "#2F65CC",
}}
>
قيد التنفيذ
</div>
:<div
style={{
  padding: "4px 8px",
  borderRadius: "16px",
  color: "white",
  backgroundColor: "#E5A240",
}}
>
إنتظار
</div>

      }
  
    </div>
  )
}
          </Cell>
        </Column>

        <Column flexGrow={1}>
          <HeaderCell></HeaderCell>
          <Cell>
       <div className="d-flex align-items-center h-100" style={{gap:'16px',padding:'8px'}}>
       <div onClick={()=>setModal(true)} className="notifcationSend">
          <ShareFillIcon />
        </div>
        <div style={{backgroundColor:'#DCDCDD',width:'1px',height:"100%"}}></div>

        <div onClick={()=>setModal(true)} className="CheckBtn">
          <CheckFillBtn />
        </div>
        <div style={{backgroundColor:'#DCDCDD',width:'1px',height:"100%"}}></div>

        <div onClick={()=>setShow(true)} className="TrashBtn">
          <ClsoeFillBtn />
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

export default TechnicalSupportTable;
