import React, { useEffect } from "react";
import ReactDOM from "react-dom";


import { Table } from "rsuite";
import { mockUsers } from "./mock";
import { useTranslation } from "react-i18next";
import ProffileImage from "../../../assets/Profile.png"
import MoreVertical from "../../icons/moreDorsVertical";
const { Column, HeaderCell, Cell } = Table;
const data = mockUsers(8);
const Subscreption=({rowData,dataKey,setModal,setModalData,...props})=>{
const ClickHandler=()=>{
  setModal(true);
  setModalData(rowData)
}
  return (
    <Cell {...props}>
<div onClick={ClickHandler}>
{
  rowData?.email
}
</div>
    </Cell>
  )
}
const    MarketersTable = ({
  setModal,
  setModalData
}) => {
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
const Profile = ({ rowData, dataKey, ...props }) => {

    return (
        <Cell {...props} >
<div className="d-flex gap-1 align-items-center">
<img  style={{width:'32px',height:'32px',borderRadius:'50%'}} src={ProffileImage} />
{rowData?.name}
</div>
        </Cell>)}
  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };
  const {t}=useTranslation()
  return (
    <div>
 <Table
      height={420}
      data={getData()}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
      loading={loading}
      rtl={true}
      style={{widows:'100%'}}
      rowClassName={(rowData, rowIndex) =>
        rowData?.id === 1 ? "active-row" : ""
      }
    >
      <Column  width={150}  align="center"  >
        <HeaderCell>{t("ID")}</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column flexGrow={1} minWidth={150}  >
        <HeaderCell>{t("Name")}</HeaderCell>
<Cell>احمد خالد</Cell>
      </Column>

 

      <Column flexGrow={1} >
        <HeaderCell>{t("Subscribers")}</HeaderCell>
        <Cell >
            200
        </Cell>
      </Column>

      <Column flexGrow={1} >
        <HeaderCell>{t("Commission")}</HeaderCell>
        <Cell >
           3500
        </Cell>
      </Column>
      <Column flexGrow={1} >
        <HeaderCell>{t("remaining")}</HeaderCell>
        <Cell >
           500
        </Cell>
      </Column>
      <Column flexGrow={1} >
        <HeaderCell>{t("Issuance of payment")}</HeaderCell>
        <Cell >
        7
        </Cell>
      </Column>
      <Column flexGrow={1} >
        <HeaderCell>{t("Date added")}</HeaderCell>
        <Cell >
        22/12/2023
        </Cell>
      </Column>
      <Column flexGrow={1} >
        <HeaderCell>{t("Discount code")}</HeaderCell>
        <Cell >
        SAH
        </Cell>
      </Column>
      <Column >
        <HeaderCell></HeaderCell>
        <Cell  >
          <MoreVertical />
        </Cell>
      </Column>
    </Table>
    </div>
   
  );
};


export default MarketersTable;