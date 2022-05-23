import classNames from "classnames/bind";
import { AiOutlinePhone, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import ChatItem from "../../ChatItem";
import style from "./MainHeader.module.scss";

const cx = classNames.bind(style);

function MainHeader() {
  const data = { name: "Hao", status: "Last seen 58 minutes ago" };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("chat-item")}>
          <ChatItem data={data} />
        </div>
        <div className={cx("utils")}>
          <div>
            <AiOutlinePhone />
          </div>
          <div>
            <AiOutlineSearch />
          </div>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;