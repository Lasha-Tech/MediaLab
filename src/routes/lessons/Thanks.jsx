import { Link } from "react-router-dom";
import styled from "styled-components";

function Thanks() {

    return (
      <Main>
        <Modal>

            <Madloba src="https://s3-alpha-sig.figma.com/img/2280/37b3/06d1bd5b0a40792beea23409cd800646?Expires=1702252800&Signature=JNEUrfG1alcwDScmSRWcH86XudzBC7oh9ikD6cpUgdHDu92c56N7wNW29HNvf-ghe5sfL8YE1Qlc1OGHdUTLYucdVxqD~gLH1IPuTKs4qkP4037cv6pTNgNYbFJXDVBopFSJ2fqnrUe21iaPSmOsghS45c1fRj3pNsTAAUhBZakb~7PXQXp2zaNRZBEgjyu9bZcBSGhoUj0ajNkZH8UjP986mu~Dc66P9PRLBRryfWfc1maedd7KPkFwukfBZpkBLnkRJeFop~HuTY5eAwk-lFlmcbQ~uZ4V0NZhM6WolIPrcI3hk7L7~UOrA8TeESQE4bvPCESYfYtLmWAonrFDBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

            <ThankFor>მადლობა შეფასებისთვის!</ThankFor>

            <Text>ჩვენ ვაფასებთ თქვენს გამოხმაურებას. წარმატებებს გისურვებთ!</Text>

            <Link to='/'>
            <EndBtn>დასრულება</EndBtn>

            </Link>

        </Modal>
      </Main>
    )
  }
  
  export default Thanks;

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
    width: 100%;
    height: 814px;
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
