import React from 'react';
import tw from 'tailwind.macro';

const Wrapper = tw.div`
  bg-gray-200
  text-xl
  w-1/2
`;
export default function index() {
  return <Wrapper>Hello World</Wrapper>;
}
