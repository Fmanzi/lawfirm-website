import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import Publications from "./pages/Publications";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "practice-areas", Component: PracticeAreas },
      { path: "publications", Component: Publications },
      { path: "publications/:id", Component: BlogPost },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
