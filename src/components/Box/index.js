import styled from 'styled-components'

  const Box = styled.div`
  background: #454545;
  border-radius: 8px;
  padding: 16px;

  /* CSS Pré pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #bababa;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #bababa;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #bababa;
  }
  input {
    width: 100%;
    background-color: #151515;
    color: #bababa;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #bababa;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #151515;
  }
  
  `;



 export default Box