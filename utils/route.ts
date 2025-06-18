export interface Route {
  id: number;
  name: string;
  path: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    id: 2,
    name: "Payment",
    path: "/pages/payment",
  },
  {
    id: 3,
    name: "Product",
    path: "/pages/product",
    children: [
      {
        id: 31,
        name: "Payment & Integrations",
        path: "/pages/payment", // Remittance, Gateway, 3rd Party
      },
      {
        id: 32,
        name: "Banking Solutions",
        path: "/pages/bankingSolution", 
      },
      {
        id: 33,
        name: "POS & E-Channels",
        path: "/pages/pos",
      },
      {
        id: 34,
        name: "Business Digitalization",
        path: "/pages/businessDigitalization",
      },
      {
        id: 35,
        name: "Industry Systems",
        path: "/pages/industrySystems",
      },
      {
        id: 36,
        name: "App & Cloud Development",
        path: "/pages/appCloud",
      },
    ],
  },
  {
    id: 4,
    name: "Developer",
    path: "/pages/developer",
  },
  {
    id: 5,
    name: "Company",
    path: "/pages/about",
    children: [
      { id: 51, name: "About Us", path: "/pages/about" },
      { id: 52, name: "Career", path: "/pages/career" },
      { id: 53, name: "Partner", path: "/pages/partner" },
      { id: 54, name: "Client", path: "/pages/client" },
    ],
  },
];
