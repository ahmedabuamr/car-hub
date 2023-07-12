import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?:string
  rightIcon?:string
}
export interface SearchBarProps {
  setManuFacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

export interface SearchManuFacturer {
  manuFacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
export interface SearchManuFacturerProps {
  selected: string;
  setSelected: (selected: string) => void;
}

export interface CarCardProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model:string;
  transmission: string;
  year: number;
}
export type CarState = CarCardProps[] & { message?: string };
export interface FilterProps {
  model?:string
  manuFacturer?:string
  year?:number
  limit?:number
  fuel?:string
}
export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps {
  title:string
  value:string
}

export interface CustomFilterProps<T> {
  options:OptionProps[]
  setFilter: (selected: T) => void;
}

export interface ShowMoreProps{
  pageNumber:number
  isNext:boolean
  setLimit: (limit: number) => void;
}