
export interface Route {
  id: number;
  name: string;
  path: string;
}
export const routes = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "Solution",
    path: "/solution",
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
  {
    id: 5,
    name: "Resources",
    path: "/resources",
  }
]