import React, { useState, useEffect, useContext } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourFilter from "./Misdemeanour_Filter";

import Misdemeanour_Page from "./Misdemeanour_Page";

import {
  interfaceMisdemeanourPageProps,
  misdemeanoursContextCreator,
} from "./misdemeanour_page";

const Misdemeanour: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<
    interfaceMisdemeanourPageProps[]
  >([]);

  const [errormessageMisdemeanour, seterrormessageMisdemeanour] = useState<
    string | undefined
  >();

  const getAaisdemeanour = async (numberMisdemeanour: number) => {
    try {
      const apiResponse = await fetch(
        `http://localhost:8080/api/misdemeanours/${numberMisdemeanour}`
      );

      if (apiResponse.status === 200) {
        const dataMisdemeanours = await apiResponse.json();
        setMisdemeanours(dataMisdemeanours.misdemeanours);
      } else if (apiResponse.status === 500) {
        seterrormessageMisdemeanour(
          "Oops... something went wrong, try again 🤕"
        );
      } else if (apiResponse.status === 418) {
        seterrormessageMisdemeanour("418 I'm a tea pot 🫖 , silly");
      }
    } catch (error) {
      console.log(error + "message");
    }
  };

  useEffect(() => {
    getAaisdemeanour(3);
  }, []);
  useContext(misdemeanoursContextCreator);

  return (
    <>
      <div>
        <misdemeanoursContextCreator.Provider value={misdemeanours}>
          <MisdemeanourPage />
          <div className="filter">
            {" "}
            {errormessageMisdemeanour && (
              <h2> {` ERROR : ${errormessageMisdemeanour}`} </h2>
            )}
          </div>
        </misdemeanoursContextCreator.Provider>
      </div>
    </>
  );
};

export default Misdemeanour;
