export interface Route {
  id: number;
  name: string;
  path: string;
  children?: Route[]; // optional for nested routes
}

export const routes: Route[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Payment",
    path: "/pages/payment",
   
  },
  {
    id: 3,
    name: "Solution",
    path: "/pages/solution",
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/pages/portfolio",
  },
  {
    id: 5,
    name: "Company",
    path: "/pages/about",
    children: [
      { id: 51, name: "About Us", path: "/pages/about" },
      { id: 52, name: "Career", path: "/pages/career" },
      { id: 53, name: "Partner", path: "/pages/partner" },
    ],
  },
];
