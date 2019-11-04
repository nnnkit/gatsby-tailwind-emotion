import React from 'react';
import tw from 'tailwind.macro';

const Wrapper = tw.div`
  w-screen
  h-screen
  text-x1
  flex
  items-center
  justify-center
  bg-pink-700
`;
const Heading = tw.h1`
  text-6xl
  font-bold
  text-white
`;
export default function index() {
  return (
    <Wrapper>
      <Heading>Gatsby ❣️ + Tailwind CSS + Theme UI</Heading>
    </Wrapper>
  );
}
