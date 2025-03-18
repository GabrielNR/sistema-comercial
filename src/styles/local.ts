import styled from "styled-components";
// import { LocalProps } from '../pages/local/[slug]'



export const Header = styled.header`
  height: 5rem;
  border-bottom: 1px solid #DCE2E5;
  background-color: #FFFFFF;

  > div {
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    img {
      height: 42px;
      justify-content: center;
      align-items: center;
    }
  }

  
`

export const Container = styled.main`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;


`;

export const Content = styled.section`
  max-width: 560px;
  margin: 0 auto;

  padding: 0 2rem;
  h1 {
    margin-bottom: 16px;
    margin-top: 16px;
    font-size: 48px;
    line-height: 54px;
    font-weight: 600;
    font-family: 'montserrat';
  }

  p{
    margin-bottom: 12px; 
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    font-family: 'montserrat';
  }

  h2 {
    font-size: 24px;
    line-height: 34px;
    margin-top: 12px;
  }

  .Localizacao{
      height: 200px;
      /* border: 1px solid #111; */
      padding: 2px;
    }
`;

export const Service = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;

  div {
    background: white;
    margin-top: 16px;
    border: 1px solid #DCE2E5;
    border-radius: 8px;

    height: 84px;
    width: 104px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* gap: ; */

    span {
      font-size: 16px;
      line-height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span > span {
      font-size: 16px;
      line-height: 26px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 16px;

    div {
      display: flex;
      height: 47px;
      width: 47px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      margin-right: 16px;
      margin-bottom: 24px;
    }

    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      width: 22px;
      height: 22px;
    } 

    span {
      margin-left: 18px;
      color: white;
    }
`;

export const ContentLeft = styled.div`
  margin: 0 auto

`;

export const Background = styled.img`
  margin-top: -80px;
  flex: 1;
  /* background: url('/doce_companhiaVerical.png') no-repeat center; */
  background-size: cover;
`;


export const ContentMedia = styled.section`
  display: grid;
  margin-top: 36px;

  h1 {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 16px;
  }

  div {
    /* max-width: 560px; */
    margin: 0 auto;

    iframe{
      margin: 0 auto;
      width: 495.86px;
      height: 311px;
    }
  }


`;

export const Gallery = styled.div`
  h1 {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 16px;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;

    img {
      max-width: 375px;
      /* margin: 0 auto; */
      border-radius: 4px;

      object-fit: cover;
    }
  }
  


  .gallerySecondary {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 6px;
    margin-top: 6px;

   img {
    width: 100%;
    height: 85px;
    max-width: 560px;
    margin: 0 auto;
    border-radius: 4px;
    object-fit: cover;
  }
  }
`

export const Doubts = styled.div`
  margin-top: 40px;
  margin-bottom: 120px;
  padding: 0 2rem;
  p{
    border-bottom: 1px solid #868686;
    font-size: 16px;
    line-height: 26px;
    height: 55px;
    display: flex;
    align-items: center;
  }
`;
