import {styled} from 'styled-components'
function Home() {
    return (
        <HomeContainer>
            <Wrapper>
            <HeaderTextContainer>
                    <HeaderTextText>ისწავლე და განვითარდი ჩვენთან ერთად!</HeaderTextText>
                    <HeaderTextContent>ჩვენი მისიაა დავეხმაროთ ხალხს <span className='header__text-span'>მედიაწიგნიერების</span>  შესწავლაში და თანამედროვე სამყაროში არსებულ საფრთხეებთან გამკლავებაში</HeaderTextContent>
                   
                    <div>
                    <Button>დაიწყე ახლა</Button>
            </div>
          </HeaderTextContainer>
          <div>
            <img src="./img/pexels-karolina-grabowska-4218701 1.png" alt="" />
          </div>
       
            </Wrapper>

        </HomeContainer>
    )
}
const HomeContainer = styled.div`
    background: #0E3757;
    height: 815px;
`
const Wrapper = styled.div`
   padding-left: 80px;
   display: flex;
   justify-content:center;
   align-items: center;
`
const HeaderTextContainer = styled.div`
  
` 
const HeaderTextText = styled.p`
    color: #FFF;
font-family: BPG Nino Mtavruli;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.6px;

` 
const HeaderTextContent = styled.p`
    color: #FFF;
font-family: BPG Nino Mtavruli;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 200.103%; /* 44.023px */
letter-spacing: 0.88px;
margin-top: 70px;
width: 75%;
    .header__text-span {
        color: #489CE0;
font-family: BPG Nino Mtavruli;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 200.103%;
letter-spacing: 0.88px;
    }
` 
const Button = styled.button`
background-color: #4078A0;
padding: 12px 17px 13px;
border: none;
outline: none;
color: #FFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: BPG Nino Mtavruli;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
border-radius: 6px;
filter: drop-shadow(5px 5px 4px rgba(97, 137, 154, 0.60));
margin-top: 71px;
`
export default Home
