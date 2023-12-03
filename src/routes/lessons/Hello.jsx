import styled from "styled-components";

function Hello({handleWelcome}) {

    return (
      <Main onClick={() => handleWelcome(false)}>
        <Modal>

          <Helloimg src="https://s3-alpha-sig.figma.com/img/6c52/f20d/780b61ec45bf211e74b6e1e309f412d4?Expires=1702252800&Signature=YF3X6BpfA7V0xHW8gSXZ02oXj9Ikwt9A4FsEH~OOWaSNXdIs5XWgxBzmR3tKBqn8lDH~a5Y~T-qvG9MyZ2RQZrRy2TZC6xgaJXsXwJcLKP3RWKOgoGZlW80Rod7c8xOzwmFmwJVwYXx-EMiyac3rnzj8FD6M8dodT-xk2drpCx2he81xXh0AmG1J6to8bsvrQOWJ7sZg1MdwBh2FeiwIKp4CXl7Vm7ZvUIWZP3jxPWkWsj7rvwkwPr4CIODU2uTdGMlt1rkOP0tiEgBtdFwYADFq-ztx~gEweC9ZUZdo081f6jmXv8oE-6KKhdnE7wIFHjwB0xl01ZzsaibQP6fTQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Modal" />

          <Title>კეთილი იყოს თქვენი მობრძანება სიფრთხილე და კრიტიკული აზროვნების კურსზე</Title>

          <Text>
            იმ ეპოქაში, რომელიც სავსეა ინფორმაციით, აუცილებელია აღვიჭურვოთ გაშიფვრის, 
            ანალიზისა და მედიის შინაარსის უზარმაზარ ზღვაში ნავიგაციის უნარებით.
            ეს კურსი შექმნილია არა მხოლოდ ინფორმირებისთვის, არამედ შთაგონებისთვის.
            ჩვენი მიზანია მოგცეთ ძალა, გახდეთ დარწმუნებული და კრიტიკული მონაწილე დღევანდელი მედიით მდიდარი საზოგადოებისთვის.
          </Text>

          <Warmateba>
            წარმატებებს გისურვებთ!
          </Warmateba>

        </Modal>
      </Main>
    )
  }
  
  export default Hello;

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

  const Helloimg = styled.img`
    width: 541px;
    height: 437px;
  `;

  const Title = styled.h1`
    max-width: 871px;
    width: 100%;
    margin-top: 32px;
    color: #0E3757;

    text-align: center;
    font-family: 'ninomtavruli';
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;

  const Text = styled.p`
    max-width: 999px;
    width: 100%;
    margin-top: 34px;
    color: #0E3757;

    text-align: center;
    font-family: 'ninomtavruli';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 142.9%;
    letter-spacing: 0.2px;
  `;

  const Warmateba = styled.h3`
    color: #0E3757;
    margin-top: 34px;

    font-family: 'ninomtavruli';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;