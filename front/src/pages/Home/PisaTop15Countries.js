import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CountryButton, Buttons } from "../../styles/Home/HomeStyle";
import pisaTop15 from "../../data/pisaTop15.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const graphMaker = (country) => {
  const options = {
    responsive: true,
    scales: {
      y: {
        min: 480,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: `${country}`,
        font: {
          size: 20,
        },
      },
    },
  };
  const labels = pisaTop15.filter((v) => {
    if (v.Country === country) {
      return Object.keys(v).slice(0, -1);
    }
  });
  const filteredData = pisaTop15.filter((v) => v.Country === country)[0];

  const data = {
    labels,
    datasets: [
      {
        label: `${country}`,
        data: filteredData,
        backgroundColor: "#adeacb",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

const options = {
  responsive: true,
  scales: {
    y: {
      min: 480,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "국가별 Pisa 점수 top 15",
      font: {
        size: 15,
      },
    },
  },
};

const labels = pisaTop15.map((v) => v.Country);

const data = {
  labels,
  datasets: [
    {
      label: "2006",
      data: pisaTop15.map((v) => v["2006"]),
      backgroundColor: "#e279a1",
      categoryPercentage: 1.0,
      barPercentage: 0.8,
    },
    {
      label: "2009",
      data: pisaTop15.map((v) => v["2009"]),
      backgroundColor: "#ff9770",
      categoryPercentage: 1.0,
      barPercentage: 0.8,
    },
    {
      label: "2012",
      data: pisaTop15.map((v) => v["2012"]),
      backgroundColor: "#ffd670",
      categoryPercentage: 1.0,
      barPercentage: 0.8,
    },
    {
      label: "2015",
      data: pisaTop15.map((v) => v["2015"]),
      backgroundColor: "#e9ff70",
      categoryPercentage: 1.0,
      barPercentage: 0.8,
    },
    {
      label: "2018",
      data: pisaTop15.map((v) => v["2018"]),
      backgroundColor: "#adeacb",
      categoryPercentage: 1.0,
      barPercentage: 0.8,
    },
  ],
};

const PisaTop15BarCountries = () => {
  const [button, setButton] = useState("");
  const [countryTitle, setCountryTitle] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const title = e.target.className;

    setButton(!button);
    setCountryTitle(title);
  };

  return (
    <>
      {button ? (
        graphMaker(countryTitle)
      ) : (
        <Bar options={options} data={data} />
      )}
      <Buttons>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/kr.png"}
            width="28"
            height="21"
            alt="South Korea"
            className="South Korea"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/au.png"}
            width="28"
            height="21"
            alt="Australia"
            className="Australia"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/be.png"}
            width="28"
            height="21"
            alt="Belgium"
            className="Belgium"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/ca.png"}
            // srcset="https://flagcdn.com/w80/ca.png 2x"
            width="28"
            height="21"
            alt="Canada"
            className="Canada"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/dk.png"}
            width="28"
            height="21"
            alt="Denmark"
            className="Denmark"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/ee.png"}
            width="28"
            height="21"
            alt="Estonia"
            className="Estonia"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/fi.png"}
            width="28"
            height="21"
            alt="Finland"
            className="Finland"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/fr.png"}
            width="28"
            height="21"
            alt="France"
            className="France"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/de.png"}
            width="28"
            height="21"
            alt="Germany"
            className="Germany"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/ie.png"}
            width="28"
            height="21"
            alt="Ireland"
            className="Ireland"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/jp.png"}
            width="28"
            height="21"
            alt="Japan"
            className="Japan"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/nz.png"}
            width="28"
            height="21"
            alt="New Zealand"
            className="New Zealand"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/pl.png"}
            width="28"
            height="21"
            alt="Poland"
            className="Poland"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/gb.png"}
            width="28"
            height="21"
            alt="Taiwan"
            className="Taiwan"
          />
        </CountryButton>
        <CountryButton onClick={handleClick}>
          <img
            src={"https://flagcdn.com/w40/tw.png"}
            width="28"
            height="21"
            alt="United Kingdom"
            className="United Kingdom"
          />
        </CountryButton>
      </Buttons>
    </>
  );
};
export default PisaTop15BarCountries;
