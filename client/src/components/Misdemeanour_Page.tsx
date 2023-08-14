import React, {
  useState,
  useContext,
} from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourFilter from "./misdemeanour_filter";

import { MisdemeanourKind } from "../types/misdemeanours.types";

export interface interfaceMisdemeanourPageProps {
  citizenId: number;
  misdemeanour: MisdemeanourKind;
  date: string;
}

export const misdemeanoursContextCreator = React.createContext<
  interfaceMisdemeanourPageProps[]
>([]);

const MisdemeanourPage: React.FC = () => {
  const misdemeanours = useContext(misdemeanoursContextCreator);

  const [misdemeanoursFiltered, setmisdemeanoursFiltered] =
    useState<string>("ALL 🤪 🗣 🥗 😈");

  const misdemeanoursFilteredArray = misdemeanours.filter((misdemeanour) => {
    if (misdemeanoursFiltered === "ALL 🤪 🗣 🥗 😈") return true;
    return misdemeanour.misdemeanour === misdemeanoursFiltered;
  });

  return (
    <>
      <div className="filter">
        <MisdemeanourFilter
          misdemeanourSelection={misdemeanoursFiltered}
          onChangemisdemeanourSelection={setmisdemeanoursFiltered}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th> Person </th>
            <th> Citizen ID </th>
            <th> Date </th>
            <th> Misdemeanour </th>
            <th> Punishment Idea </th>
          </tr>
        </thead>

        <tbody>
          {misdemeanoursFilteredArray.map((misdemeanour, index) => (
            <tr key={misdemeanour.citizenId}>
              <td> {index + 1} </td>
              <td> {misdemeanour.citizenId} </td>
              <td> {misdemeanour.date} </td>
              <td> {misdemeanour.misdemeanour} </td>
              <td>
                <img
                  src={`https://picsum.photos/200/200?random=${Math.floor(
                    Math.random() * 1000 + 1
                  )}?blur=3`}
                  alt="a picture of related punishment"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MisdemeanourPage;
