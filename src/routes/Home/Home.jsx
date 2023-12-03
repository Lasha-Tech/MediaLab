import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Footer from "../../shared/footer/Footer";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Slider from "react-slick";
import React, { useState } from "react";
const spanStyle = {};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  height: "574px",
  marginBottom: "100px",
};
const divStyle2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  height: "607px",
  marginBottom: "100px",
  backgroundposition: "center",
}

const slideImages = [
  {
    url: "./img/Group6.png",
    caption: "Slide 1",
  },
  {
    url: "./img/Group7.png",
    caption: "Slide 2",
  },
  {
    url: "./img/Group8.png",
    caption: "Slide 3",
  },
];
const slideImages2 = [
  {
    url: "./img/Group9.png",
    caption: "Slide 1",
  },
  {
    url: "./img/Group10.png",
    caption: "Slide 2",
  },
  {
    url: "./img/Group12.png",
    caption: "Slide 3",
  },
];
const NextArrows = (props) => (
  <div className="slick-arrow slick-next">{props.children}</div>
);

const PrevArrows = (props) => (
  <div className="slick-arrow slick-prev">{props.children}</div>
);


const CardData = [
    {
        title:'სიფრთხილე და კრიტიკული აზროვნება',
        img:'./img/idea.png',
        signal:'ადვილი',
        state:9,
        people:222
    },
    {
        title:'ინფორმაციის გაფილტვრა და მედიის შექმნა',
        img:'./img/computer.png',
        signal:'საშუალო',
        state:10,
        people:333
    },
    {
        title:'სიფრთხილე და კრიტიკული აზროვნება',
        img:'./img/phone.png',
        signal:'საშუალო',
        state:15,
        people:444
    }
]

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrows>{">"}</NextArrows>, 
    prevArrow: <PrevArrows>{"<"}</PrevArrows>, 
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide1, setCurrentSlide2] = useState(0);
  return (
    <ParentDiv>
      <HomeContainer>
        <Wrapper>
          <HeaderTextContainer>
            <HeaderTextText>
              ისწავლე და განვითარდი ჩვენთან ერთად!
            </HeaderTextText>
            <HeaderTextContent>
              ჩვენი მისიაა დავეხმაროთ ხალხს{" "}
              <span className="header__text-span">მედიაწიგნიერების</span>{" "}
              შესწავლაში და თანამედროვე სამყაროში არსებულ საფრთხეებთან
              გამკლავებაში
            </HeaderTextContent>

            <div>
              <Link to="/details">
                <Button>დაიწყე ახლა</Button>
              </Link>
            </div>
          </HeaderTextContainer>
          <div>
            <img src="./img/pexels-karolina-grabowska-4218701 1.png" alt="" />
          </div>
        </Wrapper>
      </HomeContainer>

      {/** */}
      <SliderContainer>
        <SliderText>რატომ უნდა აგვირჩიოთ ჩვენ?</SliderText>
      </SliderContainer>

      <SliderContainerWrapper >
      <DotsWrapper>
          {slideImages.map((_, index) => (
            <Dot key={index} active={index === currentSlide} />
          ))}
        </DotsWrapper>
        <Slide
          prevArrow={<PrevArrow>{"<"}</PrevArrow>}
          nextArrow={<NextArrow>{">"}</NextArrow>}
          onChange={(previous, next) => setCurrentSlide(next)}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index} style={{ position: "relative" }}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
          
          
                  </Slide>

       
      </SliderContainerWrapper>

      <PopularCourses>
        <PopularHeader>
          <PopularText>პოპულარული კურსები</PopularText>
          <PopularSeeMoreButton>იხილეთ ყველა</PopularSeeMoreButton>
        </PopularHeader>
        <PopularWrapper>
            {CardData.map((res) => {
                return (
                   <>
                     <PopularCard>
            <PopularCardImg src={res.img}></PopularCardImg>
            <PopularCardTitle>{res.title}</PopularCardTitle>
            <PopularCardStarwrapper>
                <Flex >
            <PopularCardStarImg src="./img/full-star.png"></PopularCardStarImg>
            <PopularCardStarImg src="./img/full-star.png"></PopularCardStarImg>
            <PopularCardStarImg src="./img/full-star.png"></PopularCardStarImg>
            <PopularCardStarImg src="./img/full-star.png"></PopularCardStarImg>
            <PopularCardStarImg src="./img/full-star.png"></PopularCardStarImg>
            <PopularCardStarText>5.0 (216  რეიტინგი)</PopularCardStarText>
                </Flex>
            <div>
            <Flex >
            <PopularCardStarImg src="./img/user.png"></PopularCardStarImg>
            <PopularCardSpanStyles>{res.people}</PopularCardSpanStyles>
            </Flex>
            </div>
            
            </PopularCardStarwrapper>
            <Line></Line>
            <PopularBottomWrapper>
                <Flex>
                    <PopularCardStarImg src="/img/note.png"></PopularCardStarImg>
                    <PopularCardSpanStyles>{res.state}</PopularCardSpanStyles>
                </Flex>
                <Flex>
                    <PopularCardStarImg src="./img/signal.png"></PopularCardStarImg>
                    <PopularCardSpanStyles>{res.signal}</PopularCardSpanStyles>
                </Flex>
            </PopularBottomWrapper>
            
<PopularCardBlur></PopularCardBlur>
          </PopularCard>
                   </> 
                )
            })}
        
        </PopularWrapper>
      </PopularCourses>

{/* <SlickWrapper >
<Slider {...settings}>
<div style={{height:'100px',backgroundColor:'blue'}}>
<p>awdawdawdawdawdawd</p>
</div>
    </Slider>
</SlickWrapper> */}
  <SliderContainer>
        <SliderText>ჩვენი მომხამრებლების შეფასებები</SliderText>
      </SliderContainer>
   <SliderContainerWrapper >
     
        <Slide
          prevArrow={<NextArrow1>{"<"}</NextArrow1>}
          nextArrow={<PrevArrow2>{">"}</PrevArrow2>}
          onChange={(previous, next) => setCurrentSlide2(next)}
        >
          {slideImages2.map((slideImage, index) => (
            <div key={index} style={{ position: "relative" }}>
              <div
                style={{
                  ...divStyle2,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
          
          
                  </Slide>

        
      </SliderContainerWrapper>
      <DotsWrapper2>
          {slideImages2.map((_, index) => (
            <Dot2 key={index} active={index === currentSlide1} />
          ))}
        </DotsWrapper2>
      <Footer/>
    </ParentDiv>
  );
}

const ParentDiv = styled.div`
  width: 100%;
  .wrap {
    width: 1280px;
height: 534px;
flex-shrink: 0;
background: #437CA4;
margin-left: 80px;
  }
`;
const HomeContainer = styled.div`
  background: #0e3757;
  height: 815px;
`;
const SlickWrapper = styled.div`
width: 80%;
height: 500px;
margin-left: 100px;
background-color: red;
`
const Wrapper = styled.div`
  padding-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SliderContainerWrapper = styled.div`
  position: relative;
`
const HeaderTextContainer = styled.div``;
const HeaderTextText = styled.p`
  color: #fff;
  font-family: "ninomtavruli";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.6px;
`;
const HeaderTextContent = styled.p`
  color: #fff;
  font-family: "ninomtavruli";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 200.103%; /* 44.023px */
  letter-spacing: 0.88px;
  margin-top: 70px;
  width: 75%;
  .header__text-span {
    color: #489ce0;
    font-family: "ninomtavruli";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 200.103%;
    letter-spacing: 0.88px;
  }
`;
const Button = styled.button`
  background-color: #4078a0;
  padding: 12px 17px 13px;
  border: none;
  outline: none;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 6px;
  filter: drop-shadow(5px 5px 4px rgba(97, 137, 154, 0.6));
  margin-top: 71px;
`;
const SliderContainer = styled.div``;
const SliderText = styled.h2`
  color: #0e3757;
  font-family: "ninomtavruli";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 23.5px;
  letter-spacing: 2.8px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 79px;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const NextArrow = styled(ArrowButton)`
  background-image: url("./img/rigth.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 32px;
  height: 32px;

  margin-right: 40px;
`;

const PrevArrow = styled(ArrowButton)`
  background-image: url("./img/left.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 32px;
  height: 32px;
  margin-left: 40px;

`;
const NextArrow1 = styled(ArrowButton)`
  background-image: url("./img/left.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 32px;
  height: 32px;

  margin-left: 12%;
  margin-bottom: 15%;
  width: 100px;
height: 100px;
flex-shrink: 0;
background-color: #8EABC0;
display: none;
`;

const PrevArrow2 = styled(ArrowButton)`
  background-image: url("./img/rigth.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  margin-right: 5%;
  margin-bottom: 15%;
  width: 100px;
height: 100px;
flex-shrink: 0;
background-color: #8EABC0;
display: none;
`;
const DotsWrapper = styled.div`
    position: absolute;
    left: 44%;
    top: 67%;
    z-index: 9999999999;
`;
const DotsWrapper2 = styled.div`

display: flex;
justify-content: center;
position: relative;
bottom: 198px;
`;
const Dot = styled.span`
  height: 4px;
  width: 32px;
  background-color: ${({ active }) => (active ? "#fff" : "#336377")};
  margin: 0 5px;
  display: inline-block;
  cursor: pointer;

`;
const Dot2 = styled.span`
  height: 8px;
  width: 8px;
  background-color: ${({ active }) => (active ? "#0E3757" : "#B4D5E4")};
  margin: 0 5px;
  display: inline-block;
  cursor: pointer;
  border-radius:50% ;
`;
const PopularCourses = styled.div`
  background: #0e3757;
  margin-bottom: 100px;
`;
const PopularHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: 126px;
  padding-top: 91px;
`;
const PopularText = styled.div`
  color: #fff;
  font-family: "ninomtavruli";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 39px; /* 97.5% */
  letter-spacing: 2.8px;
`;
const PopularSeeMoreButton = styled(Button)`
  margin-top: 0;
`;
const PopularCard = styled.div`
  max-width: 320px;
  width: 100%;
  height: 391px;
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;

`;
const PopularCardButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 12px 17px;
  border: none;
  outline: none;
  color: #294f36;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
z-index:99999;

`;
const PopularCardBlur = styled.button`
&:hover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    border-radius: 8px;
background: rgba(0, 0, 0, 0.68);
    width: 320px;
    height: 392px;
    filter: blur(0.5px); 
}
 

`;
const PopularWrapper = styled.div`
  padding-bottom: 91px;
  margin-left: 130px;
  display: flex;
justify-content: center;
gap: 135px;
margin-top: 100px;
`;
const PopularCardImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
const PopularCardTitle = styled.p`
  width: 76%;
  color: #294f36;
  font-family: "ninomtavruli";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22.5px;
  letter-spacing: 1.12px;
  margin:21px 0  0 9px;
`;
const PopularCardStarwrapper = styled.div`
display: flex;
justify-content: space-between;
margin-inline: 9.79px;
margin-top: 16.80px;
`;
const PopularCardStarText = styled.div`
color: #000;
font-family: "ninomtavruli";
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1.2px;
margin-top: 6px;

`;
const PopularCardStarImg = styled.img`
    width: 22px;
    height: 17px;
`;
const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Line = styled.div`
width:100%;
height: 0.5px;
stroke-width: 1px;
background-color: #3E7790;
stroke-width: 1px;
stroke: #3E7790;
margin-top: 16px;
`
const PopularBottomWrapper = styled.div`
    margin-inline: 11.26px;
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
`
const PopularCardSpanStyles = styled.span `
    color: #294F36;
font-family: Sylfaen;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 5px;
`
export default Home;
