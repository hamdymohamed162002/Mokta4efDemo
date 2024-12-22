import { useTranslation } from "react-i18next";
import BreaCrumb from "../../../../component/Path/BreaCrumb";
import classes from "./SingleClientPage.module.scss";
import MailIcon from "../../../../component/icons/MailIcon";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

import { TableCell, TableRow, tableCellClasses } from "@mui/material";
import CustomizedTables from "../../../../component/table/table";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import TikTok from "../../../../component/icons/TikTok";
import Xapp from "../../../../component/icons/Xapp";
import Instagram from "../../../../component/icons/Instgram";
import SnapChat from "../../../../component/icons/Sanpchat";
import FilterIcon from "../../../../component/icons/FilterIcon";
import SortIcon from "../../../../component/icons/SorcIcon";
import { DatePicker } from "rsuite";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {},
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));




const SingleClientPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const lang = useSelector((state) => state.lng.lng);
  return (
    <div>
      <BreaCrumb
        paths={[
          { name: t("dashboard"), path: "/dashboard/" },
          { name: t("Reports"), path: "/dashboard/statics" },
          {
            name: t("Client Account"),
            path: "/dashboard/statics/SingleClient",
            Active: true,
          },
        ]}
      />
      <div
        onClick={() => navigate(-1)}
        className="d=flex gap-1 cursor-pointer "
        style={{ marginBlock: "16px", cursor: "pointer" }}
      >
        <ArrowBackIosNewIcon
          sx={{ transform: "rotate(180deg)", marginTop: "-5px" }}
        />
        <span
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#54565B",
            margin: "0px",
          }}
        >
          العودة{" "}
        </span>
      </div>
      <div className={classes.UserDataContainer}>
        <div>
          <h3>عبدالله محمد</h3>
          <span>السعودية</span>
        </div>
        <div>
          <h4>بيانات التواصل</h4>
          <p>
            <MailIcon />
            Abdallah.mohamed@example.com
          </p>
        </div>
      </div>
      <div className={classes.DataContainer}>
        <div className={classes.Header}>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={`${classes.SingleData} border-0 `} style={{border:'none !important'}}>
                <p>{t("Subscriptions Number")}</p>
                <span>4</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className={`${classes.SingleData} `} >
                <p>{t("Subscriptions Date")}</p>
                <span>1/1/2023</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className={`${classes.SingleData} border-md-0 `}
                style={{ alignItems: "center !important" }}
              >
                <p>{t("Date of last transaction")}</p>
                <span>1/12/2023</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className={classes.SingleData}
                style={{ alignItems: "center !important" }}
              >
                <p>{t("Total spending")}</p>
                <span>150 RS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
<div style={{fontSize:'18px',fontWeight:'600',color:"#15181E"}}>الاشتراكات السابقة</div>
<div className="d-flex align-items-center gap-3">
<div className="filterIcon">
            <FilterIcon />
          </div>
          <div className="sortBtn">
            <SortIcon
             />
            <div>{t("Highest issued")}</div>
          </div>
          <div className="d-flex align-items-center gap-1" >
{t("from")}
<DatePicker oneTap  />
          </div>
          <div className="d-flex align-items-center gap-1" >
{t("To")}
<DatePicker oneTap  />
          </div>
</div>

        </div>
        <CustomizedTables
              head={["المنصة", t("Subscriptions Number"),t("Subscriptions Date"), " الدولة"]}
            >
              <StyledTableRow>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                >
                  <div className="d-flex gap-2 align-items-center">
                  
                    <TikTok />
                    <span style={{ color: "#54565B" }}>تيك توك</span>
                  </div>
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  2400
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  2400
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  10
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                >
                  <div className="d-flex gap-2 align-items-center">
                   
                    <Xapp />
                    <span style={{ color: "#54565B" }}>اكس </span>
                  </div>
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  2400
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  2400
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  10
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                >
                  <div className="d-flex gap-2 align-items-center">
                  
                    <Instagram />
                    <span style={{ color: "#54565B" }}>انستغرام </span>
                  </div>
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  2400
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  2400
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  10
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                >
                  <div className="d-flex gap-2 align-items-center">
                
                    <SnapChat />
                    <span style={{ color: "#54565B" }}>سناب شات </span>
                  </div>
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  2400
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  2400
                </StyledTableCell>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  10
                </StyledTableCell>
              </StyledTableRow>
            </CustomizedTables>
      </div>



     
    </div>
  );
};

export default SingleClientPage;
