export interface RoutesTypes {
  key: string;
  type?: "group" | "item";
  label: string;
  icon: React.ReactNode;
  path: string;
  children?: RoutesTypes[] | React.ReactNode;
}
