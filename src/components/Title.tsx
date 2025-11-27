interface TitleProps {
  children: React.ReactNode;
  center?: boolean;
}

export function Title({ children, center = false }: TitleProps) {
  return (
    <h1 style={{
      fontSize: "32px",
      marginBottom: "20px",
      textAlign: center ? "center" : "left",
      fontWeight: 600
    }}>
      {children}
    </h1>
  );
}