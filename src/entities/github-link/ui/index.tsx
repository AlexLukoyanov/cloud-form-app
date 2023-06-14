import { Button } from "shared/ui/button/";
import { FolderIcon } from "shared/ui/icons";

export const GitHubLink = () => {
  return (
    <Button variant="link-with-icon" href="https://github.com/AlexLukoyanov">
      {" "}
      <FolderIcon /> GitHub{" "}
    </Button>
  );
};
