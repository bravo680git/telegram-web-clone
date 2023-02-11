import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { AiOutlinePhone, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import Button from "components/Button";
import ChatItem from "components/ChatItem";
import Menu from "components/Menu";
import CallPopup from "components/CallPopup";
import { CHAT_OPTIONS_MENUS } from "utils/menuItems";
import { setRightSidebarControl } from "store/slices/controlSlices";
import style from "./MainHeader.module.scss";

const cx = classNames.bind(style);

function MainHeader({ data }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const currentChatId = useSelector((state) => state.chat.currentChat?.id);
  const canSelectMessages = useSelector(
    (state) => state.control.selectMessages
  );
  const dispatch = useDispatch();

  const chatOptionsMenu =
    CHAT_OPTIONS_MENUS[
      currentChatId === "savedMessages" ? "savedMessages" : "normal"
    ];

  chatOptionsMenu.forEach((item) => {
    if (item.text === "Select Messages" || item.text === "Clear Selections") {
      if (canSelectMessages) {
        item.text = "Clear Selections";
      } else {
        item.text = "Select Messages";
      }
    }
  });

  const handleClickChatItem = () => {
    dispatch(setRightSidebarControl("profile"));
  };

  const handelClickSearchBtn = () => {
    dispatch(setRightSidebarControl("search"));
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("chat-item")}>
          <ChatItem
            data={data}
            animation={false}
            onClick={handleClickChatItem}
          />
        </div>
        <div className={cx("utils")}>
          <div>
            <Button onClick={() => setShowCallPopup(true)}>
              <AiOutlinePhone />
            </Button>
          </div>
          <div>
            <Button onClick={handelClickSearchBtn}>
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
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </div>

      {showCallPopup && <CallPopup onClose={() => setShowCallPopup(false)} />}
    </div>
  );
}

export default MainHeader;
