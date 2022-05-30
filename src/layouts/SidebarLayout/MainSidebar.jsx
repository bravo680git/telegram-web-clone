import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { AiOutlineClose } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";

import ChatList from "../../components/ChatList";
import ContactList from "../../components/ContactList";
import { SidebarHeader } from "../../components/Header";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import newMessageMenu from "../../utils/newMessageMenu";
import style from "./SidebarLayout.module.scss";

const cx = classNames.bind(style);

function MainSidebar() {
  const [isActived, setIsActived] = useState(false);
  const [closeMenu, setCloseMenu] = useState(0);

  useEffect(() => {
    setIsActived(false);
  }, [closeMenu]);

  return (
    <div
      className={cx("main-sidebar")}
      onMouseLeave={() => setCloseMenu((prev) => prev + 1)}
      onClick={() => setCloseMenu((prev) => prev + 1)}
    >
      <SidebarHeader closeMenu={closeMenu} />
      <div className={cx("body")}>
        <ChatList />
        <div className={cx("seperate")}>
          <div></div>
        </div>
        <ContactList />
      </div>
      <div className={cx("icon")}>
        {isActived ? (
          <AiOutlineClose onClick={() => setIsActived(false)} />
        ) : (
          <Button
            Icon={HiPencil}
            onClick={(e) => {
              e.stopPropagation();
              setIsActived(true);
            }}
          />
        )}

        <Menu
          menuItems={newMessageMenu}
          actived={isActived}
          width={200}
          x={-180}
          y={-142}
          transformOrigin="bottom right"
        />
      </div>
    </div>
  );
}

export default MainSidebar;
