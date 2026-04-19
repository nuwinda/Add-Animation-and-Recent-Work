import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RecentWorkPage from "./pages/RecentWorkPage";
import OfferingPage from "./pages/OfferingPage";
import ContactPage from "./pages/ContactPage";
import Root from "./components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "recent-work", Component: RecentWorkPage },
      { path: "offering", Component: OfferingPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: Home },
    ],
  },
]);
