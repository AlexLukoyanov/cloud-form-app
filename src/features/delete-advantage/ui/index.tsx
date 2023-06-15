import { Button } from "shared/ui/button";
import { TrashIcon } from "shared/ui/icons";

type DeleteAdvantageProps = {
  index: number;
  remove: (index: number) => void;
};

export const DeleteAdvantage = ({ index, remove }: DeleteAdvantageProps) => {
  const onDeleteAdvantage = () => {
    remove(index);
  };
  return (
    <Button
      id={`button-remove-${index}`}
      type="button"
      variant="icon-only"
      onClick={onDeleteAdvantage}
    >
      <TrashIcon />
    </Button>
  );
};
