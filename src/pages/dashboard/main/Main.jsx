import { Route, Routes } from "react-router-dom";
import classes from "./Main.module.scss";
import DashboardIcon from "../../../component/icons/sidebarIcons/dashboardIcon";
import { useTranslation } from "react-i18next";
import UsersGroup from "../../../component/icons/usersGroup";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Bag from "../../../component/icons/Bag";
import Subscriptions from "../../../component/icons/Subscreption";
import Ads from "../../../component/icons/Ads";
import CustomizedTables from "../../../component/table/table";
import { TableCell, TableRow, tableCellClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Doughnut } from "react-chartjs-2";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import TikTok from "../../../component/icons/TikTok";
import Xapp from "../../../component/icons/Xapp";
import Instagram from "../../../component/icons/Instgram";
import SnapChat from "../../../component/icons/Sanpchat";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);
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
const MainPage = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];
  const data3 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    series: [38, 25, 25, 12],
  };
  const options3 = {
    chart: {
      type: "donut",
      height: 350,
    },
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    colors: ["#FFFC01", "#FE5F07", "#1877F2", "#15181E"],
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      curve: "straight",
      lineCap: "butt",
      colors: "white",
      width: 1,
      dashArray: 0,
    },
    dataLabels: {
      style: {
        colors: ["black", "white", "white", "white"],
      },

      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: "#000",
        opacity: 0.45,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
          labels: {
            show: true,
            name: {
              show: false,
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: "#00000", // Set label color to black
              offsetY: -10,
            },
            value: {
              show: false,
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              color: "#00000", // Set value color to black
              offsetY: 16,
              formatter: function (val) {
                return val + "%";
              },
            },
            total: {
              show: false, // Hide the total label
            },
          },
        },
      },
    },
  };

  const data2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [2100, 1500, 2700, 1800, 1200, 2400, 900, 2000],
        borderColor: "#1877F2",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
      },
      {
        label: "Dataset 2",
        data: [650, 1200, 800, 1500, 2200, 2800, 1900, 2700],
        borderColor: "#15181E",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
      {
        label: "Dataset 2",
        data: [980, 1750, 2200, 1200, 2900, 800, 1500, 2650],
        borderColor: "#FE5F07",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
      {
        label: "Dataset 2",
        data: [1300, 2800, 1100, 1950, 2250, 1600, 2150, 950],
        borderColor: "#FFFC01",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
    ],
  };
  const data45 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [2100, 1500, 2700, 1800, 1200, 2400, 900, 2000],
        borderColor: "#1877F2",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
      },
    
    ],
  };
  const { t } = useTranslation();
  const lang = useSelector((state) => state.lng.lng);
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        rtl: true,
      },
    },
    tooltips: {
      rtl: true,
    },
    scales: {
      x: {
        scaleLabel: {
          display: true,
        },
        display: true, // Hide x-axis scale line
        grid: {
          display: false, // Hide x-axis grid lines
        },
        ticks: {
          display: true, // Hide x-axis ticks
        },
      },
      y: {
        position: lang ? "right" : "left",
        display: true,
        scaleLabel: {
          display: true,
        },
        ticks: {
          stepSize: 500, // Set the step size to 500
          callback: function (value, index, values) {
            // Format the label as needed (e.g., add 'k' for thousands)
            return value % 1000 === 0 ? value / 1000 + "k" : "";
          },
        },
      },
    },
  };
  return (
    <div className={classes.MainPage}>
      <div className={classes.Header}>
        <DashboardIcon active width="24px" />
        {t("dashboard")}
      </div>
      <div className={classes.CardsContainer}>
        <div className="row">
          <div className=" mt-2 col-md-6 col-lg-3">
            <div className={classes.CardNumbers}>
              <div
                className={classes.CardContent}
                style={{ borderInlineStartColor: "#2F65CC" }}
              >
                <div className={classes.CardNumberTitle}>
                  <h2>{t("accounts")}</h2>
                  <UsersGroup />
                </div>
                <div className={classes.Number}>
                  <h2>13,500 </h2>
                  <div>
                    {" "}
                    <span className={classes.Succes}>
                      12% <CallMadeIcon sx={{ width: "14px" }} />
                    </span>
                    <p> اخر شهر</p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-2 col-md-6 col-lg-3">
            <div className={classes.CardNumbers}>
              <div
                className={classes.CardContent}
                style={{ borderInlineStartColor: "#32A840" }}
              >
                <div className={classes.CardNumberTitle}>
                  <h2>{t("Publication Requests")}</h2>
                  <Bag />
                </div>
                <div className={classes.Number}>
                  <h2>13,500 </h2>
                  <div>
                    {" "}
                    <span className={classes.Succes}>
                      12% <CallMadeIcon sx={{ width: "14px" }} />
                    </span>
                    <p> اخر شهر</p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-2 col-md-6 col-lg-3">
            <div className={classes.CardNumbers}>
              <div
                className={classes.CardContent}
                style={{ borderInlineStartColor: "#303645" }}
              >
                <div className={classes.CardNumberTitle}>
                  <h2>{t("Subscriptions")}</h2>
                  <Subscriptions />
                </div>
                <div className={classes.Number}>
                  <h2>13,500 </h2>
                  <div>
                    {" "}
                    <span className={classes.Succes}>
                      12% <CallMadeIcon sx={{ width: "14px" }} />
                    </span>
                    <p> اخر شهر</p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-2 col-md-6 col-lg-3">
            <div className={classes.CardNumbers}>
              <div
                className={classes.CardContent}
                style={{ borderInlineStartColor: "#E5A240" }}
              >
                <div className={classes.CardNumberTitle}>
                  <h2>{t("accounts Ads")}</h2>
                  <Ads />
                </div>
                <div className={classes.Number}>
                  <h2>13,500 </h2>
                  <div>
                    {" "}
                    <span className={classes.Succes}>
                      12% <CallMadeIcon sx={{ width: "14px" }} />
                    </span>
                    <p> اخر شهر</p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-6 col-md-12 col-12">
          <div className={classes.AmountCard} style={{height:'100%'}}>
            <h6>{t("accounts")}</h6>
            <CustomizedTables
              head={["المنصة", "المشتركين", "تبادل نشر", "نشر كاش"]}
            >
              <StyledTableRow>
                <StyledTableCell
                  align={lang === "ar" ? "left" : "right"}
                  scope="row"
                >
                  <div className="d-flex gap-2 align-items-center">
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#15181E",
                        borderRadius: "50%",
                      }}
                    ></div>
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
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#1877F2",
                        borderRadius: "50%",
                      }}
                    ></div>
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
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#FE5F07",
                        borderRadius: "50%",
                      }}
                    ></div>
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
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#FFFC01",
                        borderRadius: "50%",
                      }}
                    ></div>
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
            <div className="row align-items-center mt-5">
              <div className="col-lg-5 ">
                <ReactApexChart
                  options={options3}
                  series={data3.series}
                  type="donut"
                />
              </div>
              <div className="col-lg-7">
                <Line options={options2} data={data2} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className={classes.AmountCard}>
            <h6>الاشتراكات</h6>

            <div className={classes.PaltFormsContainer}>
              <div className={classes.PaltFormRow}>
                <div className="d-flex gap-2" style={{ width: "100px" }}>
                  <SnapChat />
                  <span>سناب شات</span>
                </div>
                <div className={classes.ProgressContainer}>
                  <div className={classes.Progress}></div>
                </div>
                <div>2,000 اشتراك</div>
              </div>
              <div className={classes.PaltFormRow}>
                <div className="d-flex gap-2" style={{ width: "100px" }}>
                  <Xapp />
                  <span> اكس</span>
                </div>
                <div className={classes.ProgressContainer2}>
                  <div className={classes.Progress}></div>
                </div>
                <div>2,000 اشتراك</div>
              </div>
              <div className={classes.PaltFormRow}>
                <div className="d-flex gap-2" style={{ width: "100px" }}>
                  <Instagram />
                  <span> انستغرام</span>
                </div>
                <div className={classes.ProgressContainer3}>
                  <div className={classes.Progress}></div>
                </div>
                <div>2,000 اشتراك</div>
              </div>
              <div className={classes.PaltFormRow}>
                <div className="d-flex gap-2" style={{ width: "100px" }}>
                  <TikTok />
                  <span> تيك توك</span>
                </div>
                <div className={classes.ProgressContainer4}>
                  <div className={classes.Progress}></div>
                </div>
                <div>2,000 اشتراك</div>
              </div>
            </div>
          </div>
          <div className={classes.AmountCard} style={{ marginTop: "30px" }}>
            <h6> {t("Publication Requests")}</h6>
            <div
              className={classes.Number}
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-end",
                gap: "30px",
              }}
            >
              <h2>13,500 </h2>
              <div>
                {" "}
                <span className={classes.Succes}>
                  12% <CallMadeIcon sx={{ width: "14px" }} />
                </span>
                <p> اخر شهر</p>
              </div>{" "}
            </div>
         
          <Line style={{width:'100%'}} options={options2} data={data45} />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
