import React, {
  useState,
  useEffect,
  useContext,
  Children,
  ReactElement,
} from "react";

import {
  interfaceMisdemeanourPageProps,
  misdemeanoursContextCreator,
} from "./Misdemeanour_Page";

export interface interfaceConfesTextProps {
  confesText: string;

  onChangeConfesText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Confessions: React.FC = () => {
  const [confesTextComponent, setconfesTextComponent] =
    useState(" confes & relax ");

  return (
    <>
      <h3> Confession </h3>

      <form>
        <input
          type="submit"
          value={confesTextComponent}
          onChange={(event) => setconfesTextComponent(event.target.value)}
        ></input>
      </form>
    </>
  );
};

export default Confessions;
