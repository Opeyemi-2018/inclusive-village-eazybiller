export interface Route {
  id: number;
  name: string;
  path: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    id: 1,
    name: "Company",
    path: "/pages/about",
    children: [
      { id: 101, name: "About Us", path: "/pages/about" },
      { id: 102, name: "Career", path: "/pages/career" },
      { id: 103, name: "Partner", path: "/pages/partner" },
      { id: 104, name: "Client", path: "/pages/client" },
    ],
  },
  {
    id: 2,
    name: "Solution",
    path: "/pages/solution",
    children: [
      { id: 201, name: "Banking Applications", path: "/pages/product/banking-apps" },
      { id: 202, name: "Core & Agency Banking", path: "/pages/product/core-agency-banking" },
      { id: 203, name: "POS & Payment Systems", path: "/pages/product/pos-payment" },
      { id: 204, name: "Digital Lending Solutions", path: "/pages/product/lending" },
      { id: 205, name: "KYC & Onboarding", path: "/pages/product/kyc" },
      { id: 206, name: "Customer Support & Monitoring", path: "/pages/product/support-monitoring" },
      { id: 207, name: "Business Intelligence", path: "/pages/product/bi-dashboard" },
    ],
  },
  {
    id: 3,
    name: "Services",
    path: "/pages/payment",
    children: [
      { id: 301, name: "Digital Payment Systems", path: "/pages/paymentSystem" },
      { id: 302, name: "Banking Software Solutions", path: "/pages/bankingSolution" },
      { id: 303, name: "E-Channels & POS Systems", path: "/pages/pos" },
      { id: 304, name: "Business Digitalization", path: "/pages/businessDigitalization" },
      { id: 305, name: "Education & Estate Systems", path: "/pages/estate-education" },
      { id: 306, name: "Cloud & DevOps Services", path: "/pages/cloudDevops" },
      { id: 307, name: "Web & Mobile Development", path: "/pages/web-mobile" },
    ],
  },
  {
    id: 4,
    name: "Consultancy",
    path: "/pages/consultancy",
  },
];
