import {
  ListItem,
  Separator,
  SizableText,
  XStack,
  YGroup,
  YStack,
  ListItemFrame,
  ListItemProps,
  ListItemText,
  styled,
  themeable,
  useListItem,
} from "tamagui";

import { M_MainTitle } from "../../atoms/M-main-title";

import target from "../../../assets/target.svg";
import calendar from "../../../assets/calendar.svg";
import competence from "../../../assets/competence.svg";
import badge from "../../../assets/badge.png";

import { SolitoImage } from "solito/image";

const Icon = styled(SolitoImage, {
  mr: 10,
  w: 50,
  h: 50,
});

const M_ListEvent = () => {
  return (
    <>
      <YGroup alignSelf="center" width={"100%"} mt={30} mb={30}>
        <YGroup.Item>
          <ListItem hoverTheme textAlign="left">
            {/* <YStack jc="space-between"> */}
              {/* <XStack jc="space-between">z */}
                <SolitoImage
                  style={{ marginRight: 10 }}
                  src={target}
                  contentFit="cover"
                  alt=""
                />
                {/* <YStack> */}
                  <SizableText style={{ fontWeight: 600 }} mb={7} size="$4">
                    Mycie balkonu
                  </SizableText>
                  <SizableText size="$4">
                    Zmniejszenie zużycia energii przez pranie w niższej
                    temperaturze aż do 40%
                  </SizableText>
                {/* </YStack> */}
              {/* </XStack> */}
            {/* </YStack> */}
          </ListItem>
        </YGroup.Item>
      </YGroup>

      {/* <SizableText size="$4">How to film a multi-million dollar movie scene with only 300 euros without even using CGI</SizableText> */}

      <M_MainTitle>Szczegóły</M_MainTitle>
      <SizableText size={"$1"} ta={"left"}>
        Czy wiesz, że pranie ubrań w wyższych temperaturach zużywa znacznie
        więcej energii? Dołącz do naszego wyzwania 'Eko-Pranie' i przez miesiąc
        pierz swoje ubrania w temperaturze 30°C. To prosty sposób na
        zmniejszenie Twojego śladu węglowego i oszczędzenie energii. Za każdy
        tydzień przestrzegania wyzwania zdobędziesz punkty, które zbliżą Cię do
        zdobycia odznaki 'Mistrz Eko-Prania'. Bądź świadomym i działaj
        proekologicznie!
      </SizableText>
    </>
  );
};

export { M_ListEvent };
