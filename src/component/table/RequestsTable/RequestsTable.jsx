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
const  RequestsTable = ({ setModal, setModalData,setShow }) => {
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
        style={{ widows: "100%" }}
      >
        <Column width={150} align="center">
          <HeaderCell>{t("ID_Request")}</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column minWidth={80}>
          <HeaderCell>{t("PlatForm")}</HeaderCell>
          <Cell>
            <TikTok />
          </Cell>
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>{t("delpoy kind")}</HeaderCell>
          <Cell>تبادل نشر</Cell>
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>{t("Advertiser account")}</HeaderCell>
          <Cell>@Abdallah.mohamed</Cell>
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>{t("Customer account")}</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>{t("date of starting")}</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>{t("Client status")}</HeaderCell>
          <Cell>
            <div className="d-flex">
              <div
                style={{
                  padding: "4px 8px",
                  borderRadius: "16px",
                  color: "white",
                  backgroundColor: "#32A840",
                }}
              >
                مفعل
              </div>
            </div>
          </Cell>
        </Column>

        <Column width={200} >
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

        <Column width={150}>
          <HeaderCell></HeaderCell>
          <Cell>
       <div className="d-flex align-items-center h-100" style={{gap:'16px',padding:'8px'}}>
        <div onClick={()=>setModal(true)} className="notifcationSend">
          <NotificationIcon />
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

export default RequestsTable;
