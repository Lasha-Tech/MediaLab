import styled from "styled-components";


function Header() {

    return (
      <>
        <Main>

            <LeftMenuCont>

                <img src="./header-logo.svg" alt="Logo" />

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
      </>
    )
  }
  
  export default Header

  const Main = styled.div`
    width: 100vw;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    padding-left: 38px;
    padding-right: 38px;
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
    background-color: #437CA4;
    box-shadow: 0px 3px 21px 8px rgba(0, 0, 0, 0.25);
    outline: none;
    border: none;

    color: #FFF;
    font-family: 'ninomtavruli';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  `;

  const Register = styled.button`
    width: 166px;
    height: 42px;
    border-radius: 4px;
    background-color: #437CA4;
    box-shadow: 0px 3px 21px 8px rgba(0, 0, 0, 0.25);
    outline: none;
    border: none;

    color: #FFF;
    font-family: 'ninomtavruli';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  `;
