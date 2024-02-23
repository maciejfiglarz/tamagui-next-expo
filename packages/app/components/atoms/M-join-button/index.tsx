import { Button, styled, useTheme, YStack ,Input} from "tamagui";
import { ArrowRight } from "@tamagui/lucide-icons";

const StyledButton = styled(Button, {
  width: "100%",
  backgroundColor: "$buttonBackground",
  color: "$color3",
  hoverStyle: { backgroundColor: "$buttonBackgroundHover" },
  focusStyle: { backgroundColor: "transparent" },
  marginTop: 15,
  fontSize: 14,
  display: "flex",
  justifyContent: "space-between",
});

const M_JoinButton = () => {
  const theme = useTheme();
  console.log("theme event", theme, theme.buttonBackground.val);

  return (
    <div>
      <Button
        focusStyle={{ outlineColor: "$borderHover" }}
        bc="$buttonBackground"
      >
        ggg
      </Button>
      <StyledButton
        bc={"$background"}
        iconAfter={<ArrowRight size="$1" color="theme.buttonBackground.val" />}
      >
        Dołącz do wyzwania
      </StyledButton>

      {theme.buttonBackground.val}

      <Input
  
        color={"$color1"}
        borderWidth="3px"
        borderColor="theme.buttonBackground.val"
        py={"$5"}
        px={"$3"}
        br={0}
        fontSize="$7"
 
        focusStyle={{ outlineColor: "$borderHover" }}
        unstyled
      />
    </div>
  );
};

export { M_JoinButton };
