// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export interface StockDetail {
  price: string;
  date: string;
}

export interface Stock {
  name: string;
  detail: Array<StockDetail>;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: string[] | undefined;
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
  }[]
}