
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
    id: 2,
    name: "About Us",
    path: "/pages/about",
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

]