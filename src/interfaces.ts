export interface Products {
  id: number;
  name: string;
  price: number;
  weight: number;
  calories: number | null;
  section: "food" | "cleaning";
  expirationDate: Date;
}
