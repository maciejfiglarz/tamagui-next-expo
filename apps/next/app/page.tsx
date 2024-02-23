"use client";
import { M_MainTitle } from "app/components/atoms/M-main-title";
import { M_Container } from "app/components/atoms/M-container";
import { M_Slider } from "app/components/molecules/M-slider";

export default function Home() {
  return (
    <main className="">
      <M_Container>
        <M_MainTitle>Wyzwania</M_MainTitle>
        <M_Slider />
      </M_Container>
    </main>
  );
}
