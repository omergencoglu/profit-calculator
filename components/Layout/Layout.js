import { Fragment } from "react";

import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Fragment>
      {children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
