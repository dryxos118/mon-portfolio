import React, { useEffect, useRef, useState } from "react";

type Props = React.PropsWithChildren<{ text: string }>;

export const Tooltip: React.FC<Props> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const show = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), 500);
  };

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="position-relative d-inline-block"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {children}

      {visible && <div className="d-tooltip">{text}</div>}
    </div>
  );
};
