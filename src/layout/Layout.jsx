import Navbar from "./../components/Navbar";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
