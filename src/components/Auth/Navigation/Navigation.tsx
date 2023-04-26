import React from 'react';
import styled from "styled-components";
import {Register1, Register2} from "@/assets/svgr";
import Link from "next/link";
import {useRouter} from "next/router";

const collection = [
  {id: 1, icon: <Register1 />, step: 1},
  {id: 2, icon: <Register2 />, step: 2},
]

interface NavigationProps {
  step: number
  setStep: (e: number) => void
}

export const Navigation: React.FC<NavigationProps> = ({step, setStep}) => {
  return (
      <Container>
        {collection.map((el, index) =>
          <>
            <Step onClick={() => el.step < step && setStep(el.step)} $isActive={el.step <= step}>
              {el.icon}
            </Step>
            {index !== collection.length - 1 && <Separator />}
          </>
        )}
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
const Separator = styled.div`
  background: #7B7B7B;
  border-radius: 10px;
  flex: auto;
  height: 2px;
`
const Step = styled.div<{$isActive: boolean}>`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({$isActive}) => $isActive ? "linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%)" : "rgba(255, 255, 255, 0.14)"} ;
  border-radius: 100%;
  transition: all .3s ease;
  cursor: pointer;
`
