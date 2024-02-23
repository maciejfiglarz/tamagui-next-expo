"use client";
import { Text, View } from "react-native";
import { YStack, useTheme } from 'tamagui'
import { useParams, useRouter, useSearchParams } from "solito/navigation";
import { M_Hero } from "app/components/molecules/M-hero";
import hero from "app/assets/3.png";
import { M_Container } from "app/components/atoms/M-container";
import { M_JoinButton } from "app/components/atoms/M-join-button";
import { M_ListEvent } from "app/components/molecules/M-list-event";

// const useUserParams = useParams<{ userId: string }>

export default function Event() {

  return (
    <M_Container>
      {/* <M_Hero
        imageUrl={hero.src}
        primaryLines={["EKO-PRANIE"]}
        secondaryLines={["Kończy się za 31 dni", "127 555 uczestników"]}
      /> */}
      <M_JoinButton />
      <M_ListEvent />
    </M_Container>
  );
}
