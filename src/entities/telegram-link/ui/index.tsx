import { Button } from "shared/ui/button";
import { FolderIcon } from "shared/ui/icons";

export const TelegramLink = () => {
  return (
    <Button variant="link-with-icon" href="https://t.me/alex_lukoyanov">
      {" "}
      <FolderIcon /> Telegram{" "}
    </Button>
  );
};
