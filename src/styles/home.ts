import styled from 'styled-components';

export const Wrapper = styled.main`
  max-width: 1120px;
  margin: 0 auto;
/* background: red; */

  @media (max-width: 430px) {
    margin: 1.5rem;

    .watsapp{
      display: none;
    }
  }

  @media (max-width: 360px) {
    margin: 1rem;

    .watsapp{
      display: none;
    }
  }
 
`

export const Title = styled.h1`
  margin: 2.5rem 0 2.813rem;
  font-style: normal;
  font-family: 'montserrat';
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.875rem;

  @media (max-width: 720px) {
    font-size: 2rem;
    line-height: 1.275rem;

    display: flex;
    align-items: center;
    justify-content: center;

  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.125rem;
  margin-bottom: 36px;

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
  width: 100%;
  height: 11rem;
  border-radius: 16px 16px 0 0;

  @media (max-width: 420px) {
    height: 15rem;
  }
`;

export const Text = styled.div`
  margin-top: 16px;
  padding-left: 2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: #123952;
`;

export const Span = styled.text`
  display: inline-block;
  padding-left: 2rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75rem;
  color: #617480;
  margin-bottom: 1rem
`;