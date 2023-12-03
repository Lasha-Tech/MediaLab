import * as React from 'react';
import LessonData from '/data.json';
import styled, {css} from "styled-components";
import Header from '../../shared/header/Header';
import Feedback from './Feedback';
import { Link } from 'react-router-dom';
import Thanks from './Thanks';
import Hello from './Hello';
import Exit from './Exit';

function Lessons() {
    const [progressPercent, setProgressPercent] = React.useState(10);
    const [lessonNumber, setLessonNumber] = React.useState(0)
    const [lessonNumberRender, setLessonNumberRender] = React.useState(1)
    const [right, setRight] = React.useState(0)
    const [wrong, setWrong] = React.useState(0)
    const [selectedAnswer, setSelectedAnswer] = React.useState('');
    const [selectedVariant, setSelectedVariant] = React.useState('')
    // A 
    const [answerStyleA, setAnswerStyleA] = React.useState({})
    const [variantStyleA, setVariantStyleA] = React.useState({})
    const [answerTextStyleA, setAnswerTextStyleA] = React.useState({})
    // B 
    const [answerStyleB, setAnswerStyleB] = React.useState({})
    const [variantStyleB, setVariantStyleB] = React.useState({})
    const [answerTextStyleB, setAnswerTextStyleB] = React.useState({})
    // C 
    const [answerStyleC, setAnswerStyleC] = React.useState({})
    const [variantStyleC, setVariantStyleC] = React.useState({})
    const [answerTextStyleC, setAnswerTextStyleC] = React.useState({})
    // D 
    const [answerStyleD, setAnswerStyleD] = React.useState({})
    const [variantStyleD, setVariantStyleD] = React.useState({})
    const [answerTextStyleD, setAnswerTextStyleD] = React.useState({})

    const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)
    const [clicked, setClicked] = React.useState(false)
    const [exit, setExit] = React.useState(false)
    const [welcome, setWelcome] = React.useState(false)
    const [goodBye, setGoodBye] = React.useState(false)
    const [feedback, setFeedback] = React.useState(false)
    const [thanks, setThanks] = React.useState(false)

console.log(selectedVariant)
console.log(selectedAnswer)
console.log(clicked)

React.useEffect(() => {
    setWelcome(true)
    setTimeout(() => {
        setWelcome(false)
    }, 2500)
}, [])

// Wrong
React.useEffect(() => {
    if(selectedVariant == 'a') {
        setAnswerStyleA({
            border: '2px solid #CF0000',
            color: '#CF0000',
            background: '#FFF',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }),

        setAnswerTextStyleA({
            color: '#CF0000'
        }),

        setVariantStyleA({
            border: '2px solid #CF0000',
            color: '#CF0000'
        })
    } else if (selectedVariant == 'b') {
        setAnswerStyleB({
            border: '2px solid #CF0000',
            color: '#CF0000',
            background: '#FFF',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }),

        setAnswerTextStyleB({
            color: '#CF0000'
        }),

        setVariantStyleB({
            border: '2px solid #CF0000',
            color: '#CF0000'
        })
    } else if (selectedVariant == 'c') {
        setAnswerStyleC({
            border: '2px solid #CF0000',
            color: '#CF0000',
            background: '#FFF',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }),

        setAnswerTextStyleC({
            color: '#CF0000'
        }),

        setVariantStyleC({
            border: '2px solid #CF0000',
            color: '#CF0000'
        }) 
    } else if(selectedVariant == 'd') {
        setAnswerStyleD({
            border: '2px solid #CF0000',
            color: '#CF0000',
            background: '#FFF',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }),

        setAnswerTextStyleD({
            color: '#CF0000'
        }),

        setVariantStyleD({
            border: '2px solid #CF0000',
            color: '#CF0000'
        })  
    } else {
        setAnswerStyleA({}),
        setAnswerTextStyleA({}),        
        setVariantStyleA({})

        setAnswerStyleB({}),
        setAnswerTextStyleB({}),        
        setVariantStyleB({})

        setAnswerStyleC({}),
        setAnswerTextStyleC({}),        
        setVariantStyleC({})

        setAnswerStyleD({}),
        setAnswerTextStyleD({}),        
        setVariantStyleD({})
    }
}, [wrong, lessonNumberRender])


// Right
React.useEffect(() => {
    if(selectedVariant == 'a') {
        setAnswerStyleA({
            border: '2px solid #039134',
            color: '#039134',
            background: '#FFF',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }),

        setAnswerTextStyleA({
            color: '#039134'
        }),

        setVariantStyleA({
            border: '2px solid #039134',
            color: '#039134'
        })
    } else if (selectedVariant == 'b') {
        setAnswerStyleB({
            border: '2px solid #039134',
            color: '#039134',
            background: '#FFF',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }),

        setAnswerTextStyleB({
            color: '#039134'
        }),

        setVariantStyleB({
            border: '2px solid #039134',
            color: '#039134'
        })
    } else if (selectedVariant == 'c') {
        setAnswerStyleC({
            border: '2px solid #039134',
            color: '#039134',
            background: '#FFF',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }),

        setAnswerTextStyleC({
            color: '#039134'
        }),

        setVariantStyleC({
            border: '2px solid #039134',
            color: '#039134'
        }) 
    } else if(selectedVariant == 'd') {
        setAnswerStyleD({
            border: '2px solid #039134',
            color: '#039134',
            background: '#FFF',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }),

        setAnswerTextStyleD({
            color: '#039134'
        }),

        setVariantStyleD({
            border: '2px solid #039134',
            color: '#039134'
        })  
    } else {
        setAnswerStyleA({}),
        setAnswerTextStyleA({}),        
        setVariantStyleA({})

        setAnswerStyleB({}),
        setAnswerTextStyleB({}),        
        setVariantStyleB({})

        setAnswerStyleC({}),
        setAnswerTextStyleC({}),        
        setVariantStyleC({})

        setAnswerStyleD({}),
        setAnswerTextStyleD({}),        
        setVariantStyleD({})
    }
}, [right, lessonNumberRender])

const handleConfirmClick = (rightAns) => {
    if(selectedAnswer !== rightAns) {
        setWrong(wrong + 1)
        new Audio('wrongAudio.mp3').play()

    } else {
        setRight(right + 1)
        new Audio('rightAudio.mp3').play()
    }
    setNextBtnDisabled(false);
}

const handleWelcome = (e) => {
    setWelcome(e)
}

const handleExit = (e) => {
    setExit(e)
}

const handleNextClick = () => {
    setLessonNumberRender(lessonNumberRender + 1);
    setLessonNumber(lessonNumber + 1);
    setProgressPercent(progressPercent + 10)
    setNextBtnDisabled(true);
    setSelectedAnswer('');
    setSelectedVariant('');
    setClicked(false);

    if(lessonNumberRender == 9) {
        setGoodBye(true)
    }

}

// // Selected
// React.useEffect(() => {
//     if(selectedVariant == 'a') {
//         setAnswerStyleA({
//            borderColor: '#437CA4'  
//         }) 
//     } else {
//         setAnswerStyleA({})
//     }
// }, [selectedVariant])

const handleThanks = (thanks, feedback) => {
    setThanks(thanks),
    setFeedback(feedback)
}

// const handleAnswerClick = (answer, variant) => {
//     setSelectedAnswer(answer);
//     // if(selectedAnswer !== '')
//     if(selectedVariant === '') {
//         setSelectedVariant(variant)
//     } else {
//         return
//     }
// }
    return (
        <ParentDiv>
        {welcome?
        <Hello handleWelcome={handleWelcome}/>
        :exit?
        <Exit handleExit={handleExit}/>
        :goodBye?
        <Main>
            <Modal>

            <GoodByimg src="https://s3-alpha-sig.figma.com/img/57d8/4f11/6a5385bb9e79f82d080f90295f5cb366?Expires=1702252800&Signature=KDuWjXW7t1szXZOUR8gkWFHXrK55FbLyeA0co2mH5TlYEe7smmNcOtAMZ~pK6GOMfIyEXNwB4gIbFqXf57VtOQ2979gksoYVYT38U-WJqliIOKcTosiTvme68f28TUyOQaFoJiWNpJO9235LAlypJ-hZ5-B1vaWowAGLAPzY7AUuACLRnaoECtMX~G43Uvdg45Gn0m~DcBxVzVJyxl~1U7U8jFTvJ51idgZwzTpvAATKT5IRNK8DxkLa3Ao1MD7C0bZfeFXXlds~2Cy2KZdZhGXFZZ3wanSkhFLgfD38ikNx3cIHnReGH8bc2Y3Zp1F6gxXai2SpDdg84TzZHv1Ydg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

            <Title>გილოცავთ, თქვენ გახდით სიფრთხილე და კრიტიკული აზროვნების კურსდამთავრებული.</Title>

            <Text>
                ერთი წუთით დაფიქრდით იმაზე, თუ რამდენად შორს წახვედით.
                ფარული მნიშვნელობების გაშიფვრიდან დაწყებული, საზოგადოებაზე 
                მედიის გავლენის გაგებამდე დამთავრებული. თქვენი ახლად აღმოჩენილი
                უნარები გაძლევს საშუალებას, ჩაერთო მედიის შინაარსთან ინფორმირებული,
                გააზრებული და ცნობიერი გზით.
                მედიაწიგნიერებით შეიარაღებული სამყაროში შესვლისას დაფიქრდით,
                როგორ შეგიძლიათ გამოიყენოთ თქვენი ცოდნა პირად და პროფესიულ ცხოვრებაში.
                იქნება ეს ახალი ამბების წყაროებში ნავიგაცია, ონლაინ დისკუსიებში წვლილი,
                თუ მედია კონტენტის პასუხისმგებლობით შექმნა,
                ახლა თქვენ ფლობთ ინსტრუმენტებს პოზიტიური გავლენის მოსატანად. წარმატებებს გისურვებთ!
            </Text>

            <Buttons>
                <Link to='/'>
                    <Mtavari>მთავარი</Mtavari>                
                </Link>
                <Rate onClick={() => {setGoodBye(false), setFeedback(true)}}>შეფასება</Rate>
            </Buttons>

        </Modal>
      </Main>:
      feedback?
            <Feedback handleThanks={handleThanks}/>
    : thanks?
            <Thanks/>

     : <ParentDiv>
                <Header/>
                  <MainDiv>
                  {/* Exit Button */}
                  {/* <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'> */}
                      <ExitButton onClick={() => setExit(true)}>
                          <img width='40' height='40' src='https://s3-alpha-sig.figma.com/img/3439/cbdb/8e8a77b717b6c0cdddd72a3c84351bbb?Expires=1702252800&Signature=Ucky2hyiPSyCu6eVcHHhUqRG3HX14vcITIZT6xJtOXrLqsEHPBGS7ravOCbDb3qd0ixJW2Xg2Sn8kXdYe8zornkVUyvtsIceY1JvFIKjPwNFrvE7syEez6SfJwI3isV-umItu4gkr68bBOw31ASgjuoTHLPjsgJb1fkR70aeyHLoFdEjwSzXpYR5VuAVg8n7155eiPjLZBCgdxSNGgUIM4NeRJbyjIkjnrJdNkJCsqgEUVQFe35wuMDQxxgt7jvhr-mrYEFhFbYjWa0IAIU4JnjIQznqk7sIs-c1MdxRVIVJ3BXR8gjuknH8U4CZuEs1LNr7-8be~ExJ9wbGeGYPlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                          გასვლა
                      </ExitButton>
                  {/* </Link> */}
  
  
                  {/* Progress */}
                  <ProgressDiv>
                      <ProgressTitleDiv>
                          <ProgressTitle>
                              თქვენი პროგრესი
                          </ProgressTitle>
                          <ProgressTitle style={{fontSize: 22, fontWeight: 700}}>
                              {progressPercent}%
                          </ProgressTitle>
                      </ProgressTitleDiv>
                      <ProgressLine>
                          <Progress style={{width: `${progressPercent}%`}}/>
                      </ProgressLine>
                  </ProgressDiv>
  
                  {/* Answer */}
                  <AnswerContainer>
                      <RightAnswer>
                          {right}
                      </RightAnswer>
                      <WrongAnswer>
                          {wrong}
                      </WrongAnswer>
                  </AnswerContainer>
  
                  {/* Lesson */}
                  {LessonData.map(current => {
                      if(current.id === lessonNumber) {
                          return (
                              <LessonContainer>
                              <LessonNumberTitle>
                                  გაკვეთილი {lessonNumberRender}
                              </LessonNumberTitle>
                              {/* Title */}
                              <LessonTitle>
                                  {current.title}
                              </LessonTitle>
                              {/* Content */}
                              <LessonText>
                                  {current.content}
                              </LessonText>
                              {/* Question */}
                              <QuestionTitle>
                                  შეკითხვა:
                              </QuestionTitle>
                              <Question>
                                  {current.question}
                              </Question>
                              {/* Answers */}
                              <AnswerDiv style={answerStyleA}
                               onClick={() => {setSelectedAnswer(current.answers.a), setSelectedVariant('a')}}>
                                  <VariantDiv style={variantStyleA}>
                                      ა
                                  </VariantDiv>
                                  <Answer style={answerTextStyleA}>
                                  {current.answers.a}
                                  </Answer>
                              </AnswerDiv>
  
                              <AnswerDiv style={answerStyleB}
                               onClick={() => {setSelectedAnswer(current.answers.b), setSelectedVariant('b')}}>
                                  <VariantDiv style={variantStyleB}>
                                      ბ
                                  </VariantDiv>
                                  <Answer style={answerTextStyleB}>
                                  {current.answers.b}
                                  </Answer>
                              </AnswerDiv>
  
                              <AnswerDiv style={answerStyleC}
                               onClick={() => {setSelectedAnswer(current.answers.c), setSelectedVariant('c')}}>
                                  <VariantDiv style={variantStyleC}>
                                      გ
                                  </VariantDiv>
                                  <Answer style={answerTextStyleC}>
                                  {current.answers.c}
                                  </Answer>
                              </AnswerDiv>
  
                              <AnswerDiv style={answerStyleD}
                               onClick={() => {setSelectedAnswer(current.answers.d), setSelectedVariant('d')}}>
                                  <VariantDiv style={variantStyleD}>
                                      დ
                                  </VariantDiv>
                                  <Answer style={answerTextStyleD}> 
                                  {current.answers.d}
                                  </Answer>
                              </AnswerDiv>
  
                              {/* Confirm */}
                              <ConfirmDiv>
                              {selectedAnswer === ''?
                              <DisabledConfirmButton disabled>
                                  დადასტურება
                              </DisabledConfirmButton>
                              : selectedAnswer !== '' && clicked?
                              <ConfirmButton disabled >
                                  დადასტურება
                              </ConfirmButton>:
                              <ConfirmButton onClick={() => {handleConfirmClick(current.right), setClicked(true)}} >
                                  დადასტურება
                              </ConfirmButton>
                              } 
                              
                              </ConfirmDiv>
                          </LessonContainer> 
                          )
                      }
                  })}
              </MainDiv>
  
              {/* Footer */}
              <FooterDiv>
                  {/* Back Button */}
                  {lessonNumber == 0? 
                  <DisabledBackButton>
                      <svg style={{marginBottom: 4}} xmlns="http://www.w3.org/2000/svg" height="20" width="35" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
                      უკან
                  </DisabledBackButton>
                  :<BackButton onClick={() => {setLessonNumberRender(lessonNumberRender - 1), setLessonNumber(lessonNumber - 1)}}>
                      <svg style={{marginBottom: 4}} xmlns="http://www.w3.org/2000/svg" height="20" width="35" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
                      უკან
                  </BackButton>}
  
                  {/* Next Button */}
                  {nextBtnDisabled? 
                  <DisabledNextButton>
                      შემდეგი
                      <svg style={{marginBottom: 4}} xmlns="http://www.w3.org/2000/svg" height="20" width="35" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                  </DisabledNextButton>
                  :<NextButton onClick={() => handleNextClick()}>
                      შემდეგი
                      <svg style={{marginBottom: 4}} xmlns="http://www.w3.org/2000/svg" height="20" width="35" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                  </NextButton>}
              </FooterDiv>
            </ParentDiv>
      }

        </ParentDiv>
    )
}

export default Lessons;

const ParentDiv = styled.div(
    css`
        width: 100%;
        min-height: 100vh;
        max-height: max-content;
    `
)

const MainDiv = styled.div(
    css`
        width: 100%;
        height: 100%;
        padding: 46px 297px 120px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-family: inherit;
    `
)

const ExitButton = styled.div(
    css`
        width: 166px;
        height: 53px;
        background-color: #437CA4;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 28px 0 20px;
        border: 2px solid #437CA4;
        border-radius: 4px;
        filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25)) drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
        margin-bottom: 57px;

        &:hover {
            background-color: #fff;
            color: #437CA4;
            cursor: pointer;
            filter: unset;
        }
    `
)

const ProgressDiv = styled.div`
    width: 100%;
    margin-bottom: 40px;
`

const ProgressTitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const ProgressTitle = styled.p`
    color: #0E3757;
`

const ProgressLine = styled.div`
    width: 100%;
    height: 6px;
    background-color: #d9d9d9;
    margin-top: 8px 0 44px;
`

const Progress = styled.div(
    () => css`
        height: 100%;
        background-color: #437CA4;
    `
)

const AnswerContainer = styled.div(
    css`
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 24px;
        margin-bottom: 24px;
    `
)

const RightAnswer = styled.div(
    css`
        width: 86px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #AFEFC5;
        color: #006C25;
        font-size: 32px;
        font-weight: 700; 
        border-radius: 6px;
`
)

const WrongAnswer = styled(RightAnswer)`
    background-color: #F79191;
    color: #730404;
`
const LessonContainer = styled.div(
    css`
        width: 100%;
    `
)

const LessonNumberTitle = styled.p`
    color: #000;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 50px;
`

const LessonTitle = styled.p`
    color: #0E3757;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 40px;
`

const LessonText = styled.p`
    color: #0E3757;
    font-size: 22px;
    line-height: 158.447%;
    letter-spacing: 0.22px;
    margin-bottom: 75px;
`

const QuestionTitle = styled.p`
    color: #000;
    font-size: 22px;
    font-weight: 700;
    line-height: 158.447%; 
    letter-spacing: 0.22px;
    margin-bottom: 35px;
`

const Question = styled.p`
    color: #0E3757;
    font-size: 20px;
    font-weight: 700;
    line-height: 158.447%;
    letter-spacing: 0.2px;
    margin-bottom: 55px;
`

const AnswerDiv = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    margin-bottom: 31px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0 40px 0 25px;
    color: #0E3757;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        box-shadow: none;
        background: rgba(217, 217, 217, 0.35);
    }
`
const VariantDiv = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid #0E3757;
    color: #0E3757;
    font-size: 20px;
    font-weight: 700;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 6px;

`

const Answer = styled.p`
    color: #0E3757;
    font-size: 20px;

`

const ConfirmDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-end;
`

const ConfirmButton = styled.div`
    width: 166px;
    height: 42px;
    background-color: #437CA4;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 4px;
    border: 1px solid transparent;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #437CA4;
        border: 2px solid #437CA4;
    }
`

const DisabledConfirmButton = styled(ConfirmButton)`
    background-color: rgba(135, 155, 181, 0.43);

    &:hover {
        background-color: rgba(135, 155, 181, 0.43);
        color: #fff;
        filter: none;
        border: 2px solid transparent;
    }
`

const FooterDiv = styled.div(
    css`
        width: 100%;
        height: 90px;
        box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.25);
        position: fixed;
        bottom: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        padding: 0 80px;
    `
)

const BackButton = styled(ExitButton)`
        width: 124px;
        height: 42px;
        padding: 5px 24px 0 14px;
        fill: #fff;
        margin: 0;

        &:hover {
            fill: #437CA4;
        }
`

const NextButton = styled(BackButton)`
    width: 135px;
    padding: 5px 9px 0 16px;
`

const DisabledNextButton = styled(NextButton)`
    background-color: rgba(135, 155, 181, 0.43);
    border: 0;
    filter: unset;

    &:hover {
        background-color: rgba(135, 155, 181, 0.43);
        fill: #fff;
        color: #fff
    }
`

const DisabledBackButton = styled(DisabledNextButton)`
    width: 124px;
    height: 42px;
    padding: 5px 24px 0 14px;
    filter: unset;
`

// Goodbye
const ModalParent = styled(ParentDiv);

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

  const GoodByimg = styled.img`
    width: 757px;
    height: 399px;
  `;

  const Title = styled.h1`
    margin-top: 18px;
    color: #0E3757;

    text-align: center;
    font-family: 'ninomtavruli';
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;

  const Text = styled.p`
    margin-top: 19px;
    max-width: 1092px;
    width: 100%;
    color: #0E3757;

    text-align: center;
    font-family: 'ninomtavruli';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  `;

  const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 406px;
    width: 100%;
    margin-top: 32px;
  `;

  const Mtavari = styled.button`
    width: 166px;
    height: 51px;
    background-color: #437CA4;
    border-radius: 4px;
    filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25)) drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
    border: none;
    color: #FFF;

    font-family: 'ninomtavruli';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    transition: .5s;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #437CA4;
      border: 2px solid #729DBB;
    }
  `;

  const Rate = styled.button`
    width: 166px;
    height: 51px;
    background-color: #437CA4;
    border-radius: 4px;
    filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25)) drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
    border: none;
    color: #FFF;

    font-family: 'ninomtavruli';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    transition: .5s;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #437CA4;
      border: 2px solid #729DBB;
    }
  `;







