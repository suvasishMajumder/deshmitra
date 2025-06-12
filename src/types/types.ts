
import type { ReactNode } from "react";
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



export type TTestimonials = {

  quote:string;
  image:string;
  name:string;
  location:string;
  rating:number;

}



//Redux related

export interface SubItem {
  name: string;
  image: string;
  description: string;
  priceRange: string;
}

export interface Category {
  name: string;
  description: string;
  image: string;
  subItems: SubItem[];
}

export interface Catalog {
  name: string;
  image: string;
  colors: string[];
  categories: Category[];
}


export type TContactInfo = {
  icon: IconType;
  title: string;
  details: string[];
  color: string;
  ariaLabel:string;
};


/*
 {
      icon: FaFacebookF,
      link: "https://www.facebook.com/share/1AmuCTSfNp",
      color: "#1877F2",
    }
*/

export type TSocialMedia = {
icon:IconType;
link:string;
color:string;
name:string;
}



export interface ITestimonials {
  quote: string;
  image: string;
  name: string;
  location: string;
  rating: number;
  role: string;
}



export type TValues = {

  icon:IconType;
  title:string;
  description:string;
  color:string;

}

export type TTeamMembers = {

  name:string;
  position:string;
  bio:string;
  image:string;

} 


export type StarRatingProps = {
  rating: number;      // e.g. 4.3. ye 4.5 , 2.8 kuch bhi ho sakta hai
  maxStars?: number;   // default to 5
  size?: number;       // in px, default 16
}



export interface IFAQ{

  question: string;
  answer: ReactNode | string; //This can handle both object or string or any other data type that eact can render

}

declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
