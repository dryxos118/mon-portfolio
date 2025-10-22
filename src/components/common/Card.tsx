import React from "react";

type CardRootProps = React.HTMLAttributes<HTMLDivElement>;

const CardRoot: React.FC<React.PropsWithChildren<CardRootProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={`card h-100 shadow-sm ${className}`} {...rest}>
      {children}
    </div>
  );
};

const Img: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="card-img-top"
      style={{ objectFit: "contain", height: "220px" }}
    />
  );
};

type HeaderProps = React.HtmlHTMLAttributes<HTMLDivElement>;
const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({
  children,
  className,
}) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};

type BodyProps = React.HTMLAttributes<HTMLDivElement>;

const Body: React.FC<React.PropsWithChildren<BodyProps>> = ({
  children,
  className,
}) => {
  return <div className={`card-body ${className}`}>{children}</div>;
};

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h5 className="card-title text-primary fw-semibold mb-3">{children}</h5>
  );
};

const SubTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <p className="card-subtitle small mb-3">{children}</p>;
};

const Text: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="card-text">{children}</div>;
};

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const Footer: React.FC<React.PropsWithChildren<FooterProps>> = ({
  children,
  className,
}) => {
  return (
    <div className={`card-footer bg-transparent border-top ${className}`}>
      {children}
    </div>
  );
};

export const Card = Object.assign(CardRoot, {
  Img,
  Header,
  Body,
  Title,
  SubTitle,
  Text,
  Footer,
});
