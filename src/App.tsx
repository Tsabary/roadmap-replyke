import { Toaster } from "@/components/ui/sonner";
import AppRoutes from "./AppRoutes";
import ContextProvider from "./context/context-provider";

function App() {
  return (
    <ContextProvider>
      <Toaster />
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
