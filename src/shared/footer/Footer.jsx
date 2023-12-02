import styled from "styled-components";



function Footer() {

    return (
      <>
        <Main>

            <FooterMenu>

                <img src="./img/Footer-logo.svg" alt="Logo" />

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

                    <MenuLi>
                        ხშირად  დასმული  კითხვები
                    </MenuLi>

                </MenuUl>

            </FooterMenu>

            <Line></Line>

            <News>
                გამოიწერე სიახლეები
            </News>

            <InputCont>

                <Mail type="email" placeholder="ელ-ფოსტა" />

                <SendBtn>
                    გაგზავნა
                </SendBtn>

            </InputCont>

            <SocMain>

                <C>© 2023 - ყველა უფლება დაცულია</C>

                <Soc>
                    <img src="./img/Facebook.svg" alt="Facebook" />
                    <img src="./img/ig.svg" alt="Instagram" />
                    <img src="./img/linkedin.svg" alt="Linkedin" />
                </Soc>

            </SocMain>
            
        </Main>
      </>
    )
  }
  
export default Footer;


  const Main = styled.div`
    width: 100%;
    height: 407px;
    padding-top: 21px;
    background-color: #073453;
    text-align: center;
  `;

  const FooterMenu = styled.div`
    max-width: 1108px;
    width: 100%;
    margin: 0 auto;
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
    color: #FFF;

    font-family: 'ninomtavruli';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;

  const Line = styled.hr`
    width: 100vw;
    height: 1px;
    margin-top: 16px;
    background-color: #FFF;
  `;

  const News = styled.p`
    margin-top: 69px;
    color: #FFF;

    font-family: 'ninomtavruli';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  `;

  const InputCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 408px;
    width: 100%;
    height: 46px;
    margin: 25px auto 0 auto;
    border-radius: 5px;
    background-color: #FFF;
    padding-left: 15px;
  `;

  const Mail = styled.input`
    width: 246px;
    outline: none;
    border: none;
  `;

  const SendBtn = styled.button`
    width: 132px;
    height: 46px;
    border: none;
    background: #4078A0;
    border-radius: 0 5px 5px 0;

    color: #FFF;

    font-family: 'ninomtavruli';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 10px;
  `;

  const SocMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    margin-top: 71px;
    padding-right: 32px;
    padding-left: 42px;
  `;

  const C = styled.p`
    color: #FFF;

    font-family: 'ninomtavruli';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  `;

  const Soc = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 174px;
    width: 100%;
  `;