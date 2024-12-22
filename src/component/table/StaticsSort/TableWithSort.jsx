import React, { useEffect } from "react";
import ReactDOM from "react-dom";


import { Table } from "rsuite";
import { mockUsers } from "./mock";
import { useTranslation } from "react-i18next";
import ProffileImage from "../../../assets/Profile.png"
import MoreVertical from "../../icons/moreDorsVertical";
import { useNavigate } from "react-router-dom";
const { Column, HeaderCell, Cell } = Table;
const data = mockUsers(8);
const Subscreption=({rowData,dataKey,setModal,setModalData,...props})=>{
const ClickHandler=()=>{
  setModal(true);
  setModalData(rowData)
}
  return (
    <Cell {...props}>
<div className="d-flex" >
<div style={{padding:'5px 10px',backgroundColor:"#303645",color:"white",cursor:"pointer",marginTop:'-5px',borderRadius:'8px'}} onClick={ClickHandler}>
{
  rowData?.email
}
</div>
</div>
    </Cell>
  )
}
const    SortTable = ({
  setModal,
  setModalData
}) => {
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [loading, setLoading] = React.useState(false);
const router=useNavigate()
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
        <Cell {...props} onClick={()=>router("SingleClient")} >
<div  className="d-flex gap-1 align-items-center" style={{height:'100%',cursor:'pointer'}}>
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
      style={{width:'100%',minWidth:'100%'}}
    >
      <Column  width={150}  align="center"  sortable>
        <HeaderCell>{t("ID")}</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column flexGrow={1} minWidth={150}  sortable>
        <HeaderCell>{t("Name")}</HeaderCell>
        <Profile dataKey="name" />
      </Column>

      <Column flexGrow={1} sortable>
        <HeaderCell>{t("Package")}</HeaderCell>
        <Cell dataKey="gender" />
      </Column>

      <Column flexGrow={1} sortable>
        <HeaderCell>{t("Exchange")}</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column flexGrow={1} sortable>
        <HeaderCell>{t("Cash")}</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column flexGrow={1} sortable>
        <HeaderCell>{t("Links")}</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column flexGrow={1} sortable>
        <HeaderCell>{t("All")}</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column flexGrow={1} sortable>
        <HeaderCell>{t("StaticsSubscriptions")}</HeaderCell>
        <Subscreption dataKey="email" setModal={setModal} setModalData={setModalData} />
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


export default SortTable;