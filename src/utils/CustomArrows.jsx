import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import PropTypes from "prop-types";

export const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
      style={{
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
      }}
    >
      <ArrowBackIos size={30} />
    </button>
  );
};

export const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
      style={{
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
      }}
    >
      <ArrowForwardIos />
    </button>
  );
};

CustomLeftArrow.propTypes = {
  onClick: PropTypes.func,
};

CustomRightArrow.propTypes = {
  onClick: PropTypes.func,
};
