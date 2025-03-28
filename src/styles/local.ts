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
      height: 2.625rem;
      justify-content: center;
      align-items: center;
    }
  }

  
`

export const Container = styled.main`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    
  }


`;

export const Content = styled.section`
  max-width: 560px;
  margin: 0 auto;

  padding: 0 2rem;

  h1 {
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 3rem;
    line-height: 3.375rem;
    font-weight: 600;
    font-family: 'montserrat';
  }

  p{
    margin-bottom: 0.75rem; 
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

  img {
    display: none;

    @media (max-width: 430px) {
      display: block;
      margin-bottom: 16px;
      width: 495.86px;
      height: 311px;
    }
  }

  .Localizacao{
      /* height: 200px; */
      /* border: 1px solid #111; */
      padding: 2px;
    }

  .youtube h2{
    margin-bottom: 12px;
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
      margin-bottom: 16px;
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

export const Site = styled.div`
  display: flex;
  flex-direction: row;

    div {
      display: flex;
      height: 47px;
      width: 175px;
      background-color: blueviolet;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      margin-right: 16px;
      margin-bottom: 16px;
    }

    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      width: 26px;
      height: 26px;

    } 

    a {
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

  @media (max-width: 430px) {
    display: none;
  }
  
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

    @media (max-width: 430px) {
      grid-template-columns: 1fr;
      gap: 6px;
    }

    img {
      max-width: 375px;
      /* margin: 0 auto; */
      border-radius: 4px;

      object-fit: cover;

      @media (max-width: 430px) {
        max-width: 100%; 
      }
    }
  }
  
  .gallerySecondary {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 6px;
    margin-top: 6px;
    margin-bottom: 12px;

    @media (max-width: 430px) {
      grid-template-columns: 1fr 1fr;
    }

   img {
    width: 100%;
    height: 85px;
    max-width: 560px;
    margin: 0 auto;
    border-radius: 4px;
    object-fit: cover;
  }
  }

  @media (max-width: 430px) {
    padding: 0 2rem;

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
