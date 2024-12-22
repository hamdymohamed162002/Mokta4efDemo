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
const AccountsTable = ({ setModal, setModalData,setShow }) => {
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
        <Column flexGrow={1}>
          <HeaderCell style={{textAlign:'center'}}>{t("Account")}</HeaderCell>
          <Cell>
          @Abdallah.mohamed
          </Cell>
        </Column>
        <Column minWidth={80}>
          <HeaderCell>{t("PlatForm")}</HeaderCell>
          <Cell>
            <TikTok />
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>{t("Category")}</HeaderCell>
          <Cell>
          طبخ
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>{t("delpoy kind")}</HeaderCell>
          <Cell>تبادل نشر</Cell>
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>{t("Country")}</HeaderCell>
          <Cell>السعودية</Cell>
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>{t("Announcement date")}</HeaderCell>
          <Cell>12/2/2023</Cell>
        </Column>

     

      

        <Column flexGrow={1} >
          <HeaderCell style={{textAlign:'center'}}>{t("Advertiser status")}</HeaderCell>
          <Cell   >
  <div className="d-flex justify-content-center">
  <div
style={{
  padding: "4px 8px",
  borderRadius: "16px",
  color: "white",
  backgroundColor: "#E5A240",
}}
>
إنتظار
</div>
  </div>
          </Cell>
        </Column>

        <Column flexGrow={1}>
          <HeaderCell></HeaderCell>
          <Cell>
    <MoreVertical />
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default AccountsTable;
