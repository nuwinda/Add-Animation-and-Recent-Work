import { Outlet } from "react-router";
import Navigation from "./Navigation";
import WhatsAppButton from "./WhatsAppButton";

export default function Root() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Outlet />
      <WhatsAppButton />
    </div>
  );
}
