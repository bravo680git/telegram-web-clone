import { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import { AiOutlinePhone, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import Button from "components/Button";
import ChatItem from "components/ChatItem";
import Menu from "components/Menu";
import { CHAT_OPTIONS_MENUS } from "utils/menuItems";
import style from "./MainHeader.module.scss";

const cx = classNames.bind(style);

function MainHeader({ data }) {
  const [openMenu, setOpenMenu] = useState(false);
  const currentChatId = useSelector((state) => state.chat.currentChat?.id);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("chat-item")}>
          <ChatItem data={data} animation={false} />
        </div>
        <div className={cx("utils")}>
          <div>
            <Button>
              <AiOutlinePhone />
            </Button>
          </div>
          <div>
            <Button>
              <AiOutlineSearch />
            </Button>
          </div>
          <div>
            <Button onClick={() => setOpenMenu(!openMenu)}>
              <BsThreeDotsVertical />
            </Button>

            <Menu
              actived={openMenu}
              menuItems={
                CHAT_OPTIONS_MENUS[
                  currentChatId === "savedMessages" ? "savedMessages" : "normal"
                ]
              }
              width={194}
              transformOrigin="top left"
              y={-160}
              x={52}
              onMouseLeave={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
