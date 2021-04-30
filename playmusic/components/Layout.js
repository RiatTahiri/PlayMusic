// Components

import Navigation from "../components/Navigation.js";
import Header from "../components/Header.js";

// Styles
import LayoutStyles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation></Navigation>
      <div className={LayoutStyles.container}>
        <main className={LayoutStyles.main}>
          <Header></Header>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
