import { FC, ReactNode, useState } from "react";

const ChangeValueButton: FC<{
  texts: ReactNode[];
}> = (props) => {
  const [indexText, setIIndexText] = useState(0);
  const textes = props.texts;
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
