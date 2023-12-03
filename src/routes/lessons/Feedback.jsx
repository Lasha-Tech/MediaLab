import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import styled from "styled-components";

function Feedback({handleThanks}) {
  const [inputValue, setInputValue] = React.useState('')

    return (
      <Main>
        <Modal>
            <Feedbackimg src="https://s3-alpha-sig.figma.com/img/0730/d25d/821be09d87e58637db8479a9103ee464?Expires=1702252800&Signature=pVZXqhoxCaRB5Hra2UgRHtz6ZwLELkrq1m2j~sXa7qiIfYVO8zWKWoa1khLphJE97Oj~T~obI0dFoBdnGmRkUh-v-Z9J2EZt-RQle6PtBO~YT3Arrh3DRXVOQeeS1qoqNyGVvjiOQqWQQY5k0BMIXjsJ3g61DvLz5JMMFe0xdhHqFwMePhnZqfvqK6TnO8gc6gM5torVSLBdVIfJQW0ALZ5WGTcPz3LjNdn4l60LGnEuKVxwZ7j~KLNvse2IWxEd1VrwsFdAujNCsbsZNxig0UkSsA9ZOlyqQpdIG2F~J6zFSIBrREmrisAZVln5ZeLWnb~v7kpcDcNvuKWthkztaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  />

            <Cont>

                <Title>როგორ შეაფასებდით ჩვენს კურსს? </Title>

                <StackFeed spacing={1}>
                    <RatingStars name="size-large" defaultValue={0} size="large" />
                </StackFeed>

                <Share>გაგვიზიარეთ თქვენი აზრი უფრო ვრცლად:</Share>

                <InputDiv>
                  <TextInput required value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  type='text' placeholder='დაწერეთ აქ...' />
                </InputDiv>

                <Title>კმაყოფილი ხართ თუ არა მიღებული ცოდნით?</Title>

                <Label class="container">
                  <Checkbox type="radio" name='ki'/>
                  <CheckSpan class="checkmark">კი</CheckSpan>
                </Label>

                <Label2 class="container">
                  <Checkbox type="radio" name='ki'/>
                  <CheckSpan class="checkmark">არა</CheckSpan>
                </Label2>

                {inputValue !== ''?
                  <SendBtn onClick={() => handleThanks(true, false)}>გაგზავნა</SendBtn>
                :<DisabledSubmitButton disabled>
                  გაგზავნა
                  </DisabledSubmitButton>}

            </Cont>
        </Modal>
      </Main>
    )
  }
  
  export default Feedback;


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
    justify-content: center;
`;

const Feedbackimg = styled.img`
    width: 568px;
    height: 814px;
`;

const Cont = styled.div`
  width: 525px;
  height: 814px;
  margin: 0 30px 0 auto;
`;

const Title = styled.h2`
  margin-top: 58px;
  color: #0E3757;

  font-family: 'ninomtavruli';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;  
`;

const StackFeed = styled(Stack)`
  width: 250px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  scale: 2;
  margin-left: 130px;
`; 

const RatingStars = styled(Rating)`
  gap: 25px;
`;

const Share = styled.h3`
  margin-top: 64px;
  color: #0E3757;

  font-family: 'ninomtavruli';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InputDiv = styled.div`
  width: 440px;
  height: 170px;
  margin-top: 24px;
  border-radius: 5px;
  border: 1px solid #0E3757;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const TextInput = styled.input`
  width: 420px;
  margin: 10px auto 0 10px;
  color: #000;
  border: none;
  outline: none;

  font-family: 'ninomtavruli';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const Label2 = styled.label`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const CheckSpan = styled.span`
  margin-left: 19px;
  color: #000;

  font-family: 'ninomtavruli';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

const SendBtn = styled.button`
  width: 130px;
  height: 42px;
  background-color: #437CA4;
  filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25)) drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  margin-top: 106px;
  margin-right: 30px;
  float: right;
  border: none;
  outline: none;

  color: #FFF;
  border: 2px solid transparent;
  font-family: 'ninomtavruli';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #437CA4;
    border-color: #437CA4;
  }
`;

const DisabledSubmitButton = styled(SendBtn)`
  background-color: rgba(135, 155, 181, 0.43);

  &:hover {
    background-color: rgba(135, 155, 181, 0.43);
    color: #fff;
    border-color: transparent;
  }
`