interface LabelProps {
  children: React.ReactNode;
}

export function Label({ children }: LabelProps) {
  return (
    <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
      {children}
    </label>
  );
}