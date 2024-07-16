import Button from "./button";

interface ButtonSavedProps {
  setTab: (tab: "generate" | "saved") => void;
}

function ButtonSaved({ setTab }: ButtonSavedProps) {
  return (
    <Button
      type="button"
      className="absolute bottom-24 right-4 px-8 md:top-32 md:right-10"
      onClick={() => setTab("saved")}
    >
      Saved lines
    </Button>
  );
}

export default ButtonSaved;
