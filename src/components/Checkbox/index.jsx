import classnames from "classnames/bind";
import { FaCheck } from "react-icons/fa";

import style from "./Checkbox.module.scss";

const cx = classnames.bind(style);

function Checkbox({ size = 24, checked, onCLick, className, round }) {
  return (
    <div
      className={cx("wrapper", className, { round })}
      style={{ "--size": size + "px" }}
      onClick={onCLick}
    >
      <div className={cx("check", { checked })}>
        <FaCheck />
      </div>
    </div>
  );
}

export default Checkbox;
