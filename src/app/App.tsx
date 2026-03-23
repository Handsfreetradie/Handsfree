import { RouterProvider } from "react-router";
import { router } from "./routes";

// Updated: 2024-03-21
export default function App() {
  return <RouterProvider router={router} />;
}