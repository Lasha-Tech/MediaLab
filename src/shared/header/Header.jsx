import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {

    return (
        <Main>

            <LeftMenuCont>
                <Link to='/'>
                <img width='150' height='90' src="https://s3-alpha-sig.figma.com/img/2e5a/d6b1/51cdca0027991e3cef306d8736a1157b?Expires=1702252800&Signature=gqQmcyCqe4uP358h2UKs6uPfR4lTy3g6n1u~VFVXz3i2Gr0~-j7u2C8ikHAhnZz5J6vAdz6Iyy-m4XO81oHvY0eg-L9GgjHwiwL~OPOEBtW0mjyprBqxgYaqTAfhw1kquZy6k2t7ESgD9~mRofVEwbaTVYXFkjvucRcaJ5U2pvOCiuu9dYJcr2LN-RsWJgTb9o~1SRWixK0~J36Xgcv~vVPQnEtJdbxgbaSFX44syfl7KyUdr0UiBuZzciZ1PfZD7TKhT-SCEDQlnxrG52cE4q5FoDy7XQSUE3h43NslGCCNPzay4QjR~jMaRYULLNXnBKV4bViM2dFRoSeHGVRZ8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Logo" />                
                </Link>

                <MenuUl>

                    <MenuLi>
                        მთავარი 
                    </MenuLi>
                    <MenuLi>
                        ჩვენს შესახებ 
                    </MenuLi>
                    <MenuLi>
                        კურსები 
                    </MenuLi>
                    <MenuLi>
                        კონტაქტი 
                    </MenuLi>

                </MenuUl>

            </LeftMenuCont>

            <Buttons>

                <SignIn>
                    შესვლა
                </SignIn>

                <Register>
                    რეგისტრაცია
                </Register>

            </Buttons>

        </Main>
    )
  }
  
  export default Header

  const Main = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    padding-left: 38px;
    padding-right: 38px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  `;

  const LeftMenuCont = styled.div`
    max-width: 722px;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const MenuUl = styled.ul`
    width: 100%;
    margin-left: 57px;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  `;

  const MenuLi = styled.li`
    color: #0E3757;

    font-family: 'ninomtavruli';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  `;

  const Buttons = styled.div`
    max-width: 316px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `;

  const SignIn = styled.button`
    width: 116px;
    height: 42px;
    border-radius: 4px;
    border: 2px solid transparent;
    background-color: #437CA4;
    filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25)) drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));    
    outline: none;
    border: none;

    color: #FFF;
    font-family: 'ninomtavruli';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

    &:hover {
      border: 2px solid #437CA4;
      background-color: #fff;
      color: #437CA4;
      cursor: pointer;
      filter: none;
    }
  `;

  const Register = styled.button`
    width: 166px;
    height: 42px;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: #437CA4;
    outline: none;
    border: none;
    filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25)) drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));    

    color: #FFF;
    font-family: 'ninomtavruli';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

    &:hover {
      border: 2px solid #437CA4;
      background-color: #fff;
      color: #437CA4;
      cursor: pointer;
      filter: none;
    }
  `;