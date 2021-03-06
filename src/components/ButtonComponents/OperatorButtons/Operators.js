import React from "react";

// import any components needed
import ButtonsGroup from "../ButtonsGroup";
import OperatorButton from "./OperatorButton";
// import your array data to from the provided data file
import { operators as operatorsData } from "../../../data";

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operators , setOperators] = React.useState (operatorsData);
  //
  return (
    <ButtonsGroup name="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component. */}
      {operators.map ((el) => (
        <OperatorButton
          key={`operator ${el.char}`}
          char={el.char}
          value={el.value}
          onClick={() => (props.onClick (el))}
        />
      ))}
    </ButtonsGroup>
  );
};

export default Operators;
