import React from 'react';
import {emailPattern} from "@/utils/patternsCollection";
import DecorationIcon1 from "@/assets/svg/decoration1.svg";
import DecorationIcon2 from "@/assets/svg/decoration2.svg";
import DecorationIcon3 from "@/assets/svg/decoration3.svg";
import DecorationIcon4 from "@/assets/svg/decoration4.svg";
import DecorationIcon5 from "@/assets/svg/decoration5.svg";
import styled from "styled-components";
import Image from "next/image";

interface AuthFormProps {
  children: React.ReactNode
}

export const AuthForm: React.FC<AuthFormProps> = ({children}) => {
  return (
      <Container>
        <Bg>
          {children}
          <Background />
          <Decoration1>
            <DecorationIcon src={DecorationIcon1} alt=""/>
          </Decoration1>
          <Decoration2>
            <DecorationIcon src={DecorationIcon2} alt=""/>
          </Decoration2>
          <Decoration3>
            <DecorationIcon src={DecorationIcon3} alt="" />
          </Decoration3>
          <Decoration4>
            <DecorationIcon src={DecorationIcon4} alt="" />
          </Decoration4>
          <Decoration5>
            <DecorationIcon src={DecorationIcon5} alt="" />
          </Decoration5>
        </Bg>
      </Container>
  );
};

const Container = styled.div`
  background: #060419;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`
const Bg = styled.div`
  max-width: 664px;
  height: 525px;
  width: 90%;
  position: relative;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Background = styled.div`
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(30px);
  width: 100%;
  height: 100%;
  border-radius: 54px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`
const Decoration = styled.div`
  position: absolute;
`
const DecorationIcon = styled(Image)`
  width: 100%;
`
const Decoration1 = styled(Decoration)`
  width: calc(180/664*100%);
  top: calc(-33/525*100%);
  left: calc(57/664*100%);
`
const Decoration2 = styled(Decoration)`
  width: calc(132/664*100%);
  top: calc(45/525*100%);
  right: calc(80/664*100%);
`
const Decoration3 = styled(Decoration)`
  width: calc(116/664*100%);
  left: calc(-28/664*100%);
  bottom: calc(62/525*100%);
`
const Decoration4 = styled(Decoration)`
  width: calc(116/664*100%);
  left: calc(223/664*100%);
  bottom: calc(-20/525*100%);
`
const Decoration5 = styled(Decoration)`
  width: calc(169/664*100%);
  right: calc(-37/664*100%);
  bottom: calc(76/525*100%);
`
