
export interface Route {
  id: number;
  name: string;
  path: string;
}
export const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 5,
    name: "About Us",
    path: "/pages/about",
  },
  {
    id: 2,
    name: "Solution",
    path: "/pages/solution",
  },
  {
    id: 3,
    name: "company",
    path: "/company",
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/portfolio",
  },

]