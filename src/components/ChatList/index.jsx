import classNames from "classnames/bind";
import ChatItem from "../ChatItem";
import style from "./ChatList.module.scss";

const cx = classNames.bind(style);

function ChatList() {
  const chatList = [
    {
      name: "Hao",
      status: "Hao joined telegram",
      date: "May 4",
    },
    {
      name: "Nhien",
      status: "Hao joined telegram",
      date: "May 10",
    },
    {
      name: "Binh",
      status: "Hao joined telegram",
      date: "May 19",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      {chatList.map((item, index) => (
        <div key={index} className={cx("item-container")}>
          <ChatItem data={item} large hover actived={index === 1} />
        </div>
      ))}
    </div>
  );
}

export default ChatList;
