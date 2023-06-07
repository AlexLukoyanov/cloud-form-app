import { RouterProvider } from "react-router-dom";
import { router } from "pages";
import { withThemeProvider } from "./providers/with-theme-provider";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default withThemeProvider(App);
