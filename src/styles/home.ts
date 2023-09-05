import styled from 'styled-components';

export const Wrapper = styled.main`
  max-width: 1120px;
  margin: 0 auto;
/* background: red; */
`

export const Title = styled.h1`
  margin: 40px 0 48px;
  font-style: normal;
  font-family: 'montserrat';
  font-weight: 600;
  font-size: 36px;
  line-height: 46px;
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 34px;
  margin-bottom: 36px;
`;

export const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid #DCE2E6;
  border-radius: 16px;
`;

export const Image = styled.img`
  width: 256px;
  height: 176px;
  border-radius: 16px 16px 0 0;

`;

export const Text = styled.div`
  margin-top: 16px;
  padding-left: 32px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #123952;
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
  margin-bottom: 16px
`;
