import styled from 'styled-components';

export const ContentImage = styled.img`
  width: 100%;
  background-size: cover;
  max-height: 395px;
`

export const Content = styled.main`
  max-width: 1120px;
  margin: 0 auto;
`

export const ContentDescription = styled.div`
  margin-top: 26px;
  display: grid; 
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    
  }
`;

export const Description = styled.div`
  h1 {
    margin-bottom: 16px;
    font-size: 3.375rem;
    line-height: 3.375rem;
    font-weight: 600;
    font-family: 'montserrat';
  };
  p {
    margin-bottom: 12px; 
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 400;
    font-family: 'montserrat';
  };
  span {
    font-size: 1rem;
    color: #617480;
    line-height: 26px;
    font-family: 'montserrat';
  }
`;

export const ContentPoint = styled.div`
  /* background-color: red; */

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    list-style: none;

    @media (max-width: 1024px) {
      margin-top: 30px;
      grid-template-columns: repeat(5, 1fr);
    }

    li {
      background: #FFFFFF;
      border: 1px solid #FFFFFF;
      height: 268px;
      width: 10rem;
      border-radius: 8px;
      /* padding: 32px 24px 16px; */

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      /* align-items: center; */

      /* text-align: center; */
      svg {
        margin-left: 32px;
        margin-top: 32px;
      }

      hr {
        width: 100%;
        border-top: 1px solid #DCE2E5;
      }

      p{
        font-size: 40px;
        margin-left: 32px;
        
      }
      span{
        font-size: 16px;
        margin-bottom: 32px;
        margin-left: 32px;
      }
  }
}
`;

export const TopRated = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  h1 {
    font-size: 36px;
    line-height: 46px;
    margin-top: 52px;
    font-family: 'montserrat';

  }
`;

export const MeetEveryone = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  h1 {
    font-size: 36px;
    font-family: 'montserrat';
    line-height: 46px;
    margin-top: 52px;

  }
`;


export const Cards = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 34px;
  margin-bottom: 36px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid #DCE2E6;
  border-radius: 16px;
`;

export const Image = styled.img`
  /* width: 256px; */
  width: 100%;
  height: 172px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Text = styled.div`
  margin-top: 16px;
  padding-left: 32px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #123952;
  font-family: 'montserrat';
`;

export const Span = styled.text`
  display: inline-block;
  padding-left: 32px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #617480;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-left: 50px;
    margin-right: 50px;
  }
`;