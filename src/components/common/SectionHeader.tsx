import React from "react";

type Props = React.PropsWithChildren<{
  title: string;
  subTitle?: string;
}>;

export const SectionHeader: React.FC<Props> = ({
  title,
  subTitle,
  children,
}) => {
  return (
    <div
      className={`d-flex flex-wrap align-items-start justify-content-between mb-4`}
    >
      <div>
        <h1 className="fw-bold mb-3">{title}</h1>
        {subTitle && <p className="text-secondary fs-6">{subTitle}</p>}
      </div>
      {children && <div className="mt-3 mt-sm-0">{children}</div>}
    </div>
  );
};
