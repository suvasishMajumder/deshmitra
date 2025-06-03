
import type { IconType } from "react-icons";

export type TFooterLinks = {

    name:string;
    href:string;

}


export type TSocialLinks = {

  Icon:IconType;
  href: string;

}


export type TBenefits = {

    icon:IconType;
    title:string;
    description:string;
    color:string;
    delay:number;

}

export interface IFormData  {

    name:string;
    email:string;
    phone:string 
    message:string;

}

export interface IFocused{

    name:boolean;
    email:boolean;
    phone:boolean;
    message:boolean;

}



// export interface SubItem {
//   name: string;
//   image: string;
//   description: string;
//   priceRange: string;
// }

// export interface Category {
//   name: string;
//   description: string;
//   image: string;
//   subItems: SubItem[];
// }

// export interface Catalog {
//   name: string;
//   image: string;
//   colors: string[];
//   categories: Category[];
// }

// export interface CatalogState {
//   catalogs: Catalog[];
// }



export type TSupplyChainItems = {

    title:string;
    description:string;
    image:string;
    color:string;
    shadow:string;
    emoji:string;

}


export type THeroCarouselItem = {

  keyword:string;
  description: string;
  image:string;
  color:string;

}


export interface IFormDataProductContactForm {

    fname:string;
    email:string;
    phone:string;
    companyName:string;
    productName:string;
    message:string;

}

export interface IFocusedProductContactForm {
fname:boolean;
email:boolean;
phone:boolean;
companyName:boolean;
productName:boolean;
message:boolean;

}