import { Card, CardBackground } from "tamagui";
import { Image } from "tamagui";
import image from "app/assets/3.png";
import { SolitoImage } from "solito/image";

const M_SliderCard = () => {
  return (
    <Card
      //   scale={0.98}
      //   hoverStyle={{ scale: 0.97 }}
      //   pressStyle={{ scale: 0.97 }}
      // elevate
      // width={400}
      // height={200}
      width={"100%"}
      position="relative"
      //   animation={'bouncy'}
      //   animateOnly={['transform']}
      mr={20}
    >
      <CardBackground pos="relative">
        <SolitoImage
          style={{
            // position: 'absolute',
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            objectFit:"cover",
            zIndex: 11,
            borderRadius: 10,
          }}
          // fill
          // resize
          src={image}
          width={400}
          height={200}
          alt=""

          // contentFit={true}
          // height="100%"
        />
      </CardBackground>
    </Card>
  );
};

export { M_SliderCard };
