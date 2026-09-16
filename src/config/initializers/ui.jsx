import { BrowserRouter } from "react-router"

import RoutesConfiguration from '../Routes';
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

export const run = () => {
  window.reactRootElement.render(
    <HelmetProvider>
      <BrowserRouter>
        <Toaster />
        <RoutesConfiguration />
      </BrowserRouter>
    </HelmetProvider>
  )
}
