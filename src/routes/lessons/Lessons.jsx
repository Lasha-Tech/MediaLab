import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import styled, {css} from "styled-components"

function Lessons() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const Progress = () => {
        return (
          <MobileStepper
            variant="progress"
            steps={9}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: '100%', background: 'transparent' }}
          />
        );
      }

    return (
        <ParentDiv>
            <MainDiv>
                {/* Exit Button */}
                <ExitButton>
                    <img width='40' height='40' src='https://s3-alpha-sig.figma.com/img/3439/cbdb/8e8a77b717b6c0cdddd72a3c84351bbb?Expires=1702252800&Signature=Ucky2hyiPSyCu6eVcHHhUqRG3HX14vcITIZT6xJtOXrLqsEHPBGS7ravOCbDb3qd0ixJW2Xg2Sn8kXdYe8zornkVUyvtsIceY1JvFIKjPwNFrvE7syEez6SfJwI3isV-umItu4gkr68bBOw31ASgjuoTHLPjsgJb1fkR70aeyHLoFdEjwSzXpYR5VuAVg8n7155eiPjLZBCgdxSNGgUIM4NeRJbyjIkjnrJdNkJCsqgEUVQFe35wuMDQxxgt7jvhr-mrYEFhFbYjWa0IAIU4JnjIQznqk7sIs-c1MdxRVIVJ3BXR8gjuknH8U4CZuEs1LNr7-8be~ExJ9wbGeGYPlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                    გასვლა
                </ExitButton>

                {/* Progress */}
                <Progress/>
            </MainDiv>

            
                {/* Footer */}
                <FooterDiv>
                    {/* Back Button */}
                    <BackButton onClick={handleBack} disabled={activeStep === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="35" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
                        უკან
                    </BackButton>

                    {/* Next Button */}
                    <NextButton onClick={handleNext} disabled={activeStep === 8}>
                        შემდეგი
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="35" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                    </NextButton>
                </FooterDiv>
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
        padding: 46px 297px;
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
        padding: 0 24px 0 14px;
        fill: #fff;
        margin: 0;

        &:hover {
            fill: #437CA4;
        }
`

const NextButton = styled(BackButton)`
    width: 135px;
    padding: 0 9px 0 16px;
`






