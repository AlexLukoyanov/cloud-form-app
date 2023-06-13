import { Button } from "shared/ui/button";
import { PlusIcon } from "shared/ui/icons";

type AddAdvantageProps = {
  append: (advantage: string) => void;
  trigger: (advantages: any) => void;
};

export const AddAdvantage = ({ append, trigger }: AddAdvantageProps) => {
  const onAddAdvantage = () => {
    trigger(["advantages"]);
    append("");
  };
  return (
    <Button type="button" variant="square-icon" onClick={onAddAdvantage}>
      <PlusIcon />
    </Button>
  );
};
