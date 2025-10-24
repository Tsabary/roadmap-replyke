import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "./auth-context";
import PopulatedReplykeProvider from "./populated-replyke-provider";

function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <PopulatedReplykeProvider>{children}</PopulatedReplykeProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default ContextProvider;
