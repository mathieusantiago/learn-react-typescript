import { log } from "console";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Button } from "react-bootstrap";
//563492ad6f91700001000001eed428c5f12a44e897db68d8bd24b71f


interface IcoinsSelected {
  selectedCoin: string;
}

const CoinMarketChart: React.FC<IcoinsSelected> = (props) => {
  const [resCallApi, setResCallApi] = useState<[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  
  console.log("coucou");
  useEffect(() => {
    getCoin("m1","bitcoin");
  }, []);
  const getCoin = async (target:string, coincap:string) => {
    await fetch(
      `https://api.coincap.io/v2/assets/${
        coincap ? coincap : "bitcoin"
      }/history?interval=${target !== "" ? target : "m1"}`
    )
      .then((res) => res.json())
      .then((result) => {
        setResCallApi(result.data);
      });
  };
  let tempsArrayPrice: any = [];
  let tempsArrayDate: any = [];

  if (resCallApi.length > 0) {
    resCallApi.map((item: any) => {
      tempsArrayPrice.push(item.priceUsd);
      const e = new Date(item.date)
      const date = e.toDateString();
      tempsArrayDate.push(date);
      return null;
    }, []);
  }

  console.log(tempsArrayDate);
  
  const state = {
    selection: selectedDate,
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: tempsArrayDate,
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
    },
    series: [
      {
        name: props.selectedCoin ? props.selectedCoin : "bitcoin",
        data: tempsArrayPrice,
      },
    ],
  };

  return (
    <div className="d-flex justify-content-center">
      <div id="chart">
        <div className="toolbar">
          <Button
            size="sm"
            variant="primary"
            id="one_month"
            value="m1"
            className={state.selection === "m1" ? "active" : ""}
            onClick={(e) => {
              getCoin((e.target as HTMLInputElement).value, props.selectedCoin)
              setSelectedDate((e.target as HTMLInputElement).value);
            }}
          >
            1M
          </Button>
          &nbsp;
          <Button
            size="sm"
            variant="primary"
            id="six_months"
            value="m30"
            className={state.selection === "m30" ? "active" : ""}
            onClick={(e) => {
              getCoin((e.target as HTMLInputElement).value, props.selectedCoin)

              setSelectedDate((e.target as HTMLInputElement).value);
            }}
          >
            30M
          </Button>
          &nbsp;
          <Button
            size="sm"
            variant="primary"
            id="one_year"
            value="h1"
            className={state.selection === "h1" ? "active" : ""}
            onClick={(e) => {
              getCoin((e.target as HTMLInputElement).value, props.selectedCoin)

              setSelectedDate((e.target as HTMLInputElement).value);
            }}
          >
            1H
          </Button>
          &nbsp;
          <Button
            size="sm"
            variant="primary"
            id="ytd"
            value="h6"
            className={state.selection === "h6" ? "active" : ""}
            onClick={(e) => {
              getCoin((e.target as HTMLInputElement).value, props.selectedCoin)

              setSelectedDate((e.target as HTMLInputElement).value);
            }}
          >
            6H
          </Button>
          &nbsp;
          <Button
            size="sm"
            variant="primary"
            id="all"
            value="d1"
            className={state.selection === "d1" ? "active" : ""}
            onClick={(e) => {
              getCoin((e.target as HTMLInputElement).value, props.selectedCoin)

              setSelectedDate((e.target as HTMLInputElement).value);
            }}
          >
            1D
          </Button>
        </div>
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          width="800"
        />
      </div>
    </div>
  );
};

export default CoinMarketChart;
