import React, { useState, useCallback } from "react";
import TitleForUseCallback from "./TitleForUseCallback";
import CountForUseCallback from "./CountForUseCallback";
import ButtonForUseCallback from "./ButtonForUseCallback";
function ParentForUseCallback() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(20000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div className="App">
      <TitleForUseCallback />
      <hr />
      <CountForUseCallback text="Age" count={age} />
      <ButtonForUseCallback handleClick={incrementAge}>
        Increment Age
      </ButtonForUseCallback>
      <hr />
      <CountForUseCallback text="Salary" count={salary} />
      <ButtonForUseCallback handleClick={incrementSalary}>
        Increment Salary
      </ButtonForUseCallback>
    </div>
  );
}

export default ParentForUseCallback;
