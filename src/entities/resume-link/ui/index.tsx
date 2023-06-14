import { Button } from "shared/ui/button/";
import { FolderIcon } from "shared/ui/icons";

export const ResumeLink = () => {
  return (
    <Button
      variant="link-with-icon"
      href="https://hh.ru/resume/96285e2aff0aefd8590039ed1f6c70436e7039"
    >
      {" "}
      <FolderIcon />
      Resume{" "}
    </Button>
  );
};
