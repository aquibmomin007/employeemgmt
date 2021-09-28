import { notification } from "antd";
import { IconType } from "antd/lib/notification";

export const openNotificationWithIcon = (type: IconType, title: string, description: string) => {
    notification[type]({
      message: title,
      description: description
    });
  };