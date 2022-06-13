import { FC, ReactNode, useState } from "react";

const ChangeValueButton: FC<{
  texts: ReactNode[];
}> = ({texts}) => {
  const [indexText, setIIndexText] = useState(0);
  const textes = texts;
  return (
    <button
      type="button"
      onClick={() => {
        setIIndexText(indexText + 1 === textes.length ? 0 : indexText + 1);
      }}
    >
      {textes[indexText]}
    </button>
  );
};

export default ChangeValueButton;
