"use client";

import HeroSection from "./home/page";

export default function Home() {
  const getb = async () => {
    console.log("clicked");
    fetch("http://localhost:3000/api/test")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <>
    <HeroSection  />
    </>
  );
}
