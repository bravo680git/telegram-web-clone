const setting = {
  info: {
    phone: "+84 388070776",
    name: "Quoc Nhien",
    status: "online",
  },
  notification: {
    private: {
      notification: true,
      preview: true,
    },
    group: {
      notification: true,
      preview: true,
    },
    channel: {
      notification: true,
      preview: true,
    },
    other: {
      join: true,
      sound: true,
    },
  },
  data: {
    download: {
      auto: true,
      photo: "On in all chats",
      video: "On in all chats",
      file: "Up to 3MB in all chats",
    },
    autoPlay: {
      gif: true,
      video: true,
    },
  },
  security: {
    security: {
      block: "none",
      twoStep: "off",
      session: "3 devices",
    },
    privacy: {
      phoneNumber: "My Contacts",
      lastSeen: "Everybody",
      profile: "Everybody",
      call: "Everybody",
      addLink: "Everybody",
      addGroup: "Everybody",
    },
    sensitive: {
      disableFilter: true,
    },
    chat: {},
  },
  general: {
    setting: {
      size: 16,
      background: null,
      animation: true,
    },
    keyboard: {
      enter: true,
      ctrlEnter: false,
    },
    time: {
      half: true,
      full: false,
    },
    emoji: {
      suggest: true,
      large: true,
    },
    sticker: {
      quick: true,
      suggest: true,
      loop: true,
      cherry: true,
    },
  },
  folder: {},
  device: {
    rightText: 3,
    device: {
      osNum: "HCM city",
    },
    sessions: {},
  },
  language: {
    rightText: "English",
    list: {
      en: true,
      be: false,
      ca: false,
      du: false,
    },
  },
};

export default setting;