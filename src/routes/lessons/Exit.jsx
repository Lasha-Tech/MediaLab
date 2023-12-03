import { Link } from "react-router-dom";
import styled from "styled-components";

function Exit({handleExit}) {

    return (
      <Main>
        <Modal>
            <ThankFor>ნამდვილად გსურთ კურსის დატოვება?</ThankFor>

            <BtnDiv>
            <Link to='/'>
            <EndBtn>კი</EndBtn>
            </Link>

            
            <EndBtn onClick={() => handleExit(false)}>არა</EndBtn>

            </BtnDiv>


        </Modal>
      </Main>
    )
  }
  
  export default Exit;

const BtnDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 60px;
    align-items: center;
`

  const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.52);
`;

const Modal = styled.div`
    position: absolute;
    max-width: 1156px;
    width: 655px;
    height: 237px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Madloba = styled.img`
    width: 613px;
    height: 454px;
`;

const ThankFor = styled.h1`
    margin-top: 61px;
    color: #0E3757;

    text-align: center;
    font-family: 'ninomtavruli';
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Text = styled.p`
    color: #0E3757;
    margin-top: 48px;

    text-align: center;
    font-family: 'ninomtavruli';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 0%;
    letter-spacing: 0.2px;
`;

const EndBtn = styled.button`
    width: 166px;
    height: 51px;  
    border-radius: 4px;
    background-color: #437CA4;
    border: none;
    outline: none;
    filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25)) drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
    margin-top: 69px;

    color: #FFF;

    font-family: 'ninomtavruli';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: 2px solid transparent;
    cursor: pointer;

    &:hover {
    background-color: #fff;
    color: #437CA4;
    border-color: #437CA4;
}
`;
