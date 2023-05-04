interface GridProps {
  columns: number;
  rows: number;
  columnGap: number;
  rowGap: number;
  children: React.ReactNode;
}

export const Grid = ({
  columns,
  rows,
  columnGap,
  rowGap,
  children
}: GridProps) => {
  const styles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridColumnGap: `${columnGap}px`,
    gridRowGap: `${rowGap}px`
  };

  return <div style={styles}>{children}</div>;
};
