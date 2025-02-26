import { TrpcProvider } from "./lib/trpc";
import { AllMemoriesPage } from "./pages/AllMemoriesPage";

export const App = () => {
  return(
    <TrpcProvider>
      <AllMemoriesPage />
    </TrpcProvider>
  )
}
