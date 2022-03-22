export interface IPackageCard {
  name: string;
  benefits: {
    icon: JSX.Element;
    text: string;
    access: boolean;
  }[];
  price: number;
}
