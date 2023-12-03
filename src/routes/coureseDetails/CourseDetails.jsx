import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';

function CourseDetails() {

    return (
      <>
            <Header/>
            <BgCont>
               <Natura src="./img/natura.svg" />
               <Link  style={{textDecoration: 'none'}} to='/'>
               <Back><LeftArrow src="./img/arrow-left.svg" alt="arrow" /> უკან</Back>
               </Link>

               <Title>სიფრთხილე და კრიტიკული აზროვნებავ</Title>

               <StarsCont>
                 <img src="./img/star.svg" alt="Varskvlavi" />
                 <img src="./img/star.svg" alt="Varskvlavi" />
                 <img src="./img/star.svg" alt="Varskvlavi" />
                 <img src="./img/star.svg" alt="Varskvlavi" />
                 <img src="./img/star.svg" alt="Varskvlavi" />

                 <Rate>(1309)</Rate>
               </StarsCont>

               <Content>
                    ამ კურსში თქვენ გაეცნობით იმ ძირითად პრობლემებს,
                    რომლებიც ინტერნეტის მოხმარებას უკავშირდება და ისწავლით,
                    თუ როგორ უნდა იმოქმედოთ უსაფრთხოდ, სხვადასხვა სახის ონლაინ პლატფორმებზე.
                    მიიღებთ რჩევებს, რომელთა გათვალისწინებაც მაქსიმალური დაცულობის გარანტიაა.
                    ამასთანავე, კურსში დაგხვდებათ კითხვებიც,
                    რომლებიც თქვენს მიერ მიღებულ ცოდნას კიდევ უფრო გაამყარებს.
               </Content>

              <Link to='/lessons' onClick={() => {setWelcome(true)}}>
                <Start>დაწყება</Start>
              </Link>
            </BgCont>

            <ContentMain>

                <Coursegak>
                    კურსის გაკვეთილები
                </Coursegak>

                <Lessons>

                    <Lesson>
                        <LogoNum>
                            <img src="./img/book.svg" alt="wigni"/>
                            <LesNum>გაკვეთილი 1</LesNum>
                        </LogoNum>

                        <CardTitle>როგორ ამოვიცნოთ ყალბი ახალი ამბები</CardTitle>

                        <CardContent>
                            ინფორმაციის კითხვის დროს, ყურადღება უნდა მიაქციოთ თითოეულ დეტალს.
                            უნდა დასვათ სხვადასხვა სახის კითხვები, რომლებიც მოგცემთ საშუალებას
                            გაერკვეთ მის სიზუსტესა და სიცხადეში.
                        </CardContent>
                    </Lesson>

                    <Lesson>
                        <LogoNum>
                            <img src="./img/book.svg" alt="wigni"/>
                            <LesNum>გაკვეთილი 2</LesNum>
                        </LogoNum>

                        <CardTitle>როგორია კარგი ონლაინ მეგობარი?</CardTitle>

                        <CardContent>
                          იდეალური არავინ არის, თუმცა კარგ მეგობარს უნდა გააჩნდეს ის ძირითადი თვისებები,
                          რომლებიც აუცილებელია კეთილი ადამიანური ბუნების გამოსახატად.
                        </CardContent>
                    </Lesson>

                    <Lesson>
                        <LogoNum>
                            <img src="./img/book.svg" alt="wigni"/>
                            <LesNum>გაკვეთილი 3</LesNum>
                        </LogoNum>

                        <CardTitle>ონლაინ აპლიკაციები</CardTitle>

                        <CardContent>
                          იმისდა მიხედვით, თუ რა ინტერესები აქვს მოზარდს,
                          მას შეუძლია თავის სმარტფონში ჩამოწეროს სხვადასხვა 
                          სახის აპლიკაციები, რომელთაც განსხვავებული დანიშნულება აქვთ. 
                        </CardContent>
                    </Lesson>

                    <Lesson>
                        <LogoNum>
                            <img src="./img/book.svg" alt="wigni"/>
                            <LesNum>გაკვეთილი 4</LesNum>
                        </LogoNum>

                        <CardTitle>ვიდეო ჩეტები და ვიდეოთვალი</CardTitle>

                        <CardContent>
                          ვიდეო თვალი ადამიანებს უმარტივებს, რომ სახლიდან გაუსვლელად ესაუბრონ ერთმანეთს,
                          როგორც ინდივიდუალურად, ასევე ჯგუფურად, ჩაატარონ პრეზენტაციები, 
                          გაუშვან ლაივი და გაუზიარონ ერთმანეთს თავიანთი იდეები.
                        </CardContent>
                    </Lesson>

                </Lessons>

                <Seeall>იხილეთ ყველა</Seeall>

                <RateTitle>შეფასება და მიმოხილვები</RateTitle>

                <AvverageRateCont>

                    <Avverage>საშუალო რეიტინგი:  4.8 </Avverage>

                    <Stack spacing={1}>
                      <RatingStar name="size-large" defaultValue={4.5} precision={0.5} size="large" readOnly />
                    </Stack>

                </AvverageRateCont>

                <View>(1309) ნახვა</View>

                <Cards>

                    <Card>
                        <CardRate>
                          “ამ კურსის გავლამ მიმახვედრა, რომ ინტერნეტში უამრავი ყალბი ინფორმაციაა, 
                          რომელსაც მომავალში აუცილებლად გადავამოწმებ”
                        </CardRate>

                        <LastCardRate>
                          <Name>შორენა ტივაძე</Name>
                          <Stack spacing={1}>
                            <Rating name="size-large" defaultValue={5} size="large" readOnly />
                          </Stack>
                        </LastCardRate>

                        <Date>9 თებერვალი, 2023</Date>

                    </Card>
                    <Card>
                        <CardRate>
                          “ჩემთვის ეს კურსი ძალიან მისაღებია, რადგან ტესტები დამეხმარა მოწოდებული 
                          ინფორმაციის განმტკიცებაში, რომელსაც მომავალში აუცილებლად გამოვიყენებ.”
                        </CardRate>

                        <LastCardRate>
                          <Name>ნინი მეტრეველი</Name>
                          <Stack spacing={1}>
                            <Rating name="size-large" defaultValue={5} size="large" readOnly />
                          </Stack>
                        </LastCardRate>

                        <Date>1 აპრილი, 2023</Date>
                    </Card>
                    <Card>
                        <CardRate>
                          კურსი ძალიან გამომადგა რეალურ ცხოვრებაში, რადგან უამრავი ახალი
                          რჩევა მივიღე ონლაინ სივრცის სწორად გამოყენებასთან დაკავშირებით.
                        </CardRate>

                        <LastCardRate>
                          <Name>გიორგი ჩხეიძე</Name>
                          <Stack spacing={1}>
                            <Rating name="size-large" defaultValue={5} size="large" readOnly />
                          </Stack>
                        </LastCardRate>

                        <Date>14 აგვისტო, 2023</Date>
                    </Card>

                </Cards>

            </ContentMain>
            <Footer/>
            </>
    )
}

export default CourseDetails

const BgCont = styled.div`
  position: relative;
  width: 100%;
  height: 815px;
  background-image: url(./img/Rectangle-79.svg);
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center;
  padding: 59px 0 0 81px;
`;

const Natura = styled.img`
  position: absolute;
  right: 0;
  z-index: -1;
  top: 0;
`;

const Back = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  height: 40px;
  padding: 0 17px 0 17px;
  border-radius: 4px;
  border: none;
  background: #437CA4;
  color: #FFF;

  font-family: 'glaho';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;

    cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    background-color: #2773ad;
    color: #fff;
    border: 2px solid #fff;
    filter: none;
  }
`;

const LeftArrow = styled.img`
  width: 30px;
  height: 17.779px;
`;

const Title = styled.h1`
  margin-top: 94px;
  color: #FFF;

  font-family: 'ninomtavruli';
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
`;

const StarsCont = styled.div`
  display: flex;
  margin-top: 47px;
`;

const Rate = styled.p`
  margin-top: 10px;
  color: #FFF;

  font-family: 'ninomtavruli';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
`;

const Content = styled.p`
  width: 782px;
  margin-top: 50px;
  color: #FFF;

  font-family: BPG Glaho;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 176.309%;
  letter-spacing: 0.24px;
`;

const Start = styled.button`
  width: 174px;
  height: 60px;  
  background-color:#4078A0;
  border-radius: 4px;
  border: none;
  margin-top: 48px;
  color: #FFF;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'ninomtavruli';
  font-size: 24px;
  font-style: normal;
  font-weight: 400; 
  line-height: normal;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    background-color: #2773ad;
    color: #fff;
    border: 2px solid #fff;
    filter: none;
  }
`;

const ContentMain = styled.div` 
  display: flex;
  flex-direction: column;
  max-width: 1281px;
  width: 100%;
  margin: 129px auto 125px auto;
`;

const Coursegak = styled.h1`
  color: #0E3757;

  font-family: 'ninomtavruli';
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 23.5px;
  letter-spacing: 2.8px;
`;

const Lessons = styled.div`
  display: flex;
  width: 100%;
  margin-top: 74px;
  justify-content: space-between;
`;

const Lesson = styled.div`
  width: 280px;
  height: 297px;
  padding-left: 16px;
  border-radius: 4px;
  border: 1px solid #0E3757;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px #0E3757;
`;

const LogoNum = styled.div`
  display: flex;
  align-items: center;
  margin-top: 13px;
`;

const LesNum = styled.h3`
  margin-left: 10px;
  color: #0E3757;

  font-family: 'ninomtavruli';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CardTitle = styled.h1`
  max-width: 236px;
  width: 100%;
  margin-top: 32px;
  color: #0E3757;

  font-family: 'ninomtavruli';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 122.7%;
`;

const CardContent = styled.p`
  max-width: 255px;
  width: 100%;
  margin-top: 37px;
  color: #0E3757;

  font-family: 'ninomtavruli';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 146.924%;
  letter-spacing: 0.13px;
`;

const Seeall = styled.button`
  width: 166px;
  height: 59px;
  background-color: #437CA4;
  filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25)) drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
  border: none;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 4px;
  align-self: center;
  margin-top: 65px;
  color: #FFF;

  font-family: 'ninomtavruli';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    background-color: #FFF;
    color: #437CA4;
    border: 2px solid #437CA4;
    filter: none;
  }
`;

const RateTitle = styled.h1`
  margin-top: 142px;

  color: #0E3757;

  font-family: 'ninomtavruli';
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 23.5px;
  letter-spacing: 2.8px;
`;

const AvverageRateCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  margin-top: 38px;
`;

const Avverage = styled.h3`
  margin-top: auto;
  margin-bottom: 0;
  color: #0E3757;

  font-family: 'ninomtavruli';
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
`;

const View = styled.p`
  margin-top: 12px;
  color: #000;

  font-family: 'ninomtavruli';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 23.5px;
  letter-spacing: 1.68px;  
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 93px;
`;

const Card = styled.div`
  width: 411px;
  height: 268px;
  border-radius: 6px;
  border: 1px solid #0E3757;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px #0E3757;
  padding: 0 23px 0 23px;
`;

const CardRate = styled.p`
  margin-top: 32px;
  color: #0E3757;

  font-family: 'ninomtavruli';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26.5px;
  letter-spacing: 0.18px;  
`;

const LastCardRate = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 38px;
`;

const Name = styled.p`
  margin-top: auto;
  margin-bottom: 0;
  margin-right: 24px;
  color: #0E3757;

  font-family: 'ninomtavruli';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const Date = styled.p`
  color: #000;

  font-family: 'ninomtavruli';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26.5px;
  letter-spacing: 0.16px;
`;


const RatingStar = styled(Rating)`
  transform: scale(2);
`;
