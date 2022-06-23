import { FC, ReactNode, useState } from "react";

const ChangeValueButton: FC<{
  values: ReactNode[] | string[];
}> = ({ values }) => {
  const [indexValue, setIIndexValue] = useState(0);
  return (
    <button
      type="button"
      onClick={() => {
        setIIndexValue(indexValue + 1 === values.length ? 0 : indexValue + 1);
      }}
    >
      {values[indexValue]}
    </button>
  );
};

export default ChangeValueButton;
