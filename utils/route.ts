export interface Route {
  id: number;
  name: string;
  path: string;
  children?: Route[]; // optional for nested routes
}

export const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },

  {
    id: 2,
    name: "Solution",
    path: "/pages/solution",
  },
  {
    id: 3,
    name: "Portfolio",
    path: "/pages/portfolio",
  },
    {
    id: 4,
    name: "Company",
    path: "/pages/about",
    children: [
      { id: 21, name: "About Us", path: "/pages/about" },
      { id: 22, name: "Career", path: "/pages/career" },
      { id: 23, name: "Partner", path: "/pages/partner" },
    ],
  },
];
