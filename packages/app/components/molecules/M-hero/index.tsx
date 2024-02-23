import React from "react";
import { View, Image, YStack } from "tamagui";
import { SolitoImage } from "solito/image";
import { PrimaryText, SecondaryText, Container } from "./components";

type M_HeroProps = {
  imageUrl: string;
  primaryLines?: string[];
  secondaryLines?: string[];
};

const M_Hero: React.FC<M_HeroProps> = ({
  imageUrl,
  primaryLines = [],
  secondaryLines = [],
}) => {
  return (
    <>
      <YStack pos="relative" h={200}>
        <SolitoImage
          style={{
            // position: "absolute",
            // widkey={line}th: "100%",
            // height: "100%",
            // resizeMode: "cover",
            // zIndex: -1,
            // objectFit:"cover",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          fill
          src={imageUrl}
          // width={400}
          // height={200}

          alt=""
          // width="100%"
          // height="100%"
        />

        <YStack h={"100%"}
          style={{
            justifyContent: "flex-end",
            alignItems: "start",
          }}
        >
          {primaryLines.map((line) => (
            <View key={line} style={{ display: "inline-block" }}>
              <PrimaryText >{line}</PrimaryText>
            </View>
          ))}
          {secondaryLines.map((line) => (
            <View key={line} style={{ display: "inline-block" }}>
              <SecondaryText >{line}</SecondaryText>
            </View>
          ))}
        </YStack>
      </YStack>
    </>
  );
};
export { M_Hero };
