import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Footer from "../../shared/footer/Footer";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Slider from "react-slick";
import React, { useState } from "react";
import Header from "../../shared/header/Header";
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
  const [courseHover, setCourseHover] = useState(false)
  const [courseHoverSecond, setCourseHoverSecond] = useState(false)
  const [courseHoverThird, setCourseHoverThird] = useState(false)

  return (
    <ParentDiv>
      <Header/>
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
              {/* <Link to='/details'> */}
              <a href='#kursebi'>
              <Button>დაიწყე ახლა</Button>
              </a>

              {/* </Link> */}
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

      <PopularCourses id='kursebi'>
        <PopularHeader>
          <PopularText>პოპულარული კურსები</PopularText>
          <PopularSeeMoreButton>იხილეთ ყველა</PopularSeeMoreButton>
        </PopularHeader>
        <PopularWrapper>
            {/* {CardData.map((res) => {
                return (
                   <> */}
                     <PopularCard onMouseOver={() => setCourseHover(true)} onMouseLeave={() => setCourseHover(false)}>
                     {courseHover && 
                     <CourseHover>
                      <Link style={{textDecoration: 'none'}} to='/details'>
                    <StartButton>
                      დაწყება
                    </StartButton>
                      </Link>

                   </CourseHover>}
            <PopularCardImg src='./img/idea.png'></PopularCardImg>
            <PopularCardTitle>სიფრთხილე და კრიტიკული აზროვნება</PopularCardTitle>
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
            <PopularCardSpanStyles>256</PopularCardSpanStyles>
            </Flex>
            </div>
            
            </PopularCardStarwrapper>
            <Line></Line>
            <PopularBottomWrapper>
                <Flex>
                    <PopularCardStarImg src="/img/note.png"></PopularCardStarImg>
                    <PopularCardSpanStyles>9</PopularCardSpanStyles>
                </Flex>
                <Flex>
                    <PopularCardStarImg src="./img/signal.png"></PopularCardStarImg>
                    <PopularCardSpanStyles>ადვილი</PopularCardSpanStyles>
                </Flex>
            </PopularBottomWrapper>
            
<PopularCardBlur></PopularCardBlur>
          </PopularCard>


          {/* 2 */}
          <PopularCard onMouseOver={() => setCourseHoverSecond(true)} onMouseLeave={() => setCourseHoverSecond(false)}>
                     {courseHoverSecond && 
                     <CourseHover>
                      <Link style={{textDecoration: 'none'}} to='/details'>
                    <StartButton>
                      დაწყება
                    </StartButton>
                      </Link>

                   </CourseHover>}
            <PopularCardImg src='./img/computer.png'></PopularCardImg>
            <PopularCardTitle>ინფორმაციის გაფილტვრა და მედიის შექმნა</PopularCardTitle>
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
            <PopularCardSpanStyles>301</PopularCardSpanStyles>
            </Flex>
            </div>
            
            </PopularCardStarwrapper>
            <Line></Line>
            <PopularBottomWrapper>
                <Flex>
                    <PopularCardStarImg src="/img/note.png"></PopularCardStarImg>
                    <PopularCardSpanStyles>10</PopularCardSpanStyles>
                </Flex>
                <Flex>
                    <PopularCardStarImg src="./img/signal.png"></PopularCardStarImg>
                    <PopularCardSpanStyles>საშუალო</PopularCardSpanStyles>
                </Flex>
            </PopularBottomWrapper>
            
<PopularCardBlur></PopularCardBlur>
          </PopularCard>



          {/* 3 */}
          <PopularCard onMouseOver={() => setCourseHoverThird(true)} onMouseLeave={() => setCourseHoverThird(false)}>
                     {courseHoverThird && 
                     <CourseHover>
                      <Link style={{textDecoration: 'none'}} to='/details'>
                    <StartButton>
                      დაწყება
                    </StartButton>
                      </Link>

                   </CourseHover>}
            <PopularCardImg src='https://s3-alpha-sig.figma.com/img/4582/4c8a/2544d569d85505e5bcf1f2b8f0817abb?Expires=1702252800&Signature=CSqyWE8f6iKUuhlomDNBCLmnHlgtwXFe6KxSGaajy27FSt38-bjCNi8d6vNrmBXiIHXQuw~01JR7SBV2rnKn5LpimkYXq7wucghbMKkg2xJYItAufTZbM10Jr0SCrzD7XY4hH0y-GjgpvSpntkdtz6GJIwLJIZdtsyK7RSOKLU5oHXBQFDWSxCLgG8ueTvIgJ3L5lWFGV9WNy0djmXXKXm4vQtggi~QzyRUu~MjkxLsYq9onGJoMsYfMmtChp~HRsgJawFah-MbwY101Dj0yOtAPspdVoId1ALOfD36Rinw2JzV1rheqOJRNUsolJwRUEt8cBWs3eyrGO~MrciJ~cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></PopularCardImg>
            <PopularCardTitle>ტენდენციების ამოცნობა მედიაში</PopularCardTitle>
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
            <PopularCardSpanStyles>288</PopularCardSpanStyles>
            </Flex>
            </div>
            
            </PopularCardStarwrapper>
            <Line></Line>
            <PopularBottomWrapper>
                <Flex>
                    <PopularCardStarImg src="/img/note.png"></PopularCardStarImg>
                    <PopularCardSpanStyles>15</PopularCardSpanStyles>
                </Flex>
                <Flex>
                    <PopularCardStarImg src="./img/signal.png"></PopularCardStarImg>
                    <PopularCardSpanStyles>საშუალო</PopularCardSpanStyles>
                </Flex>
            </PopularBottomWrapper>
            
<PopularCardBlur></PopularCardBlur>
          </PopularCard>
                   {/* </> 
                )
            })} */}
        
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
  text-decoration: none;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 6px;
  border: 2px solid transparent;
  filter: drop-shadow(5px 5px 4px rgba(97, 137, 154, 0.6));
  margin-top: 71px;
  cursor: pointer;

  &:hover {
    background-color: #2773ad;
    color: #fff;
    border: 2px solid #fff;
    filter: none;
  }
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
  margin-top: 130px;
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
    top: 80%;
    z-index: 9999999999;
`;
const DotsWrapper2 = styled.div`

display: flex;
justify-content: center;
position: relative;
bottom: 90px;
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
  position: relative;

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
  margin-left: 0px;
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

const CourseHover = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.68);
    position: absolute;
    z-index: 10;
  `

  const StartButton = styled.div`
    width: 120px;
    height: 42px;
    background-color: #4078A0;
    color: #fff;
    border: 2px solid #FFF;
    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: #FFF;
      color: #4078A0;
      border: 2px solid #4078A0;
      filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
    }
  `



  

export default Home;
