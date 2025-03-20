import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid ${(props) => props.theme["shape02"]};
  background-color: ${(props) => props.theme["shape01"]};
  
  @media (max-width: 420px) {
    height: 6rem;
  }
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;


  @media (max-width: 720px) {
    padding: 14px;
  }

  @media (max-width: 620px) {
    padding: 12px;
  }

  @media (max-width: 520px) {
    padding: 10px;
  }

  @media (max-width: 420px) {
    padding: 6px;
  }

  @media (max-width: 320px) {
    padding: 6px;
  }
`

export const Image = styled.img`
  height: 42px;
  justify-content: center;
  align-items: center;

  @media (max-width: 720px) {
    height: 36px;
  }

  @media (max-width: 620px) {
    height: 32px;
  }

  @media (max-width: 420px) {
    height: 28px;
  }

  @media (max-width: 320px) {
    height: 24px;
  }
`;

export const Nav = styled.nav`
  background-color: ${(props) => props.theme["shape01"]};
  border-radius: 10px;
  width: 416px;
  padding: 16px;
  margin: auto;

  border: 1px solid ${(props) => props.theme["shape02"]};

  display: flex;
  align-items: center;
  

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['titlePrimary']};

     display: flex;
     align-items: center;
     gap: 0.75px;
     outline: none;
     /* border: 1px solid ${(props) => props.theme["shape02"]}; */
     /* width: 100%;
     height: 100%;
     outline: none;*/
   }

   ::placeholder {
     margin-left: 1rem;
     font-style: normal;
     font-weight: 400;
     font-size: 1rem;
     line-height: 1.625;

      color: #A0ACB3;
  }

    svg {
     margin-right: 1rem;
   }

//     a {
//       display: inline-block;
//       position: relative;
//       padding: 0 0.5rem;
//       height: 5rem;
//       line-height: 5rem;
//       color: #a8a8b3;

//       transition: 0.2s;

//       & + a {
//         margin-left: 2rem;
//       }

//       &:hover {
//         color: #FFF;
//       }

//       &.active{
//         color: #FFF;
//         font-weight: bold;
//       }

//       &.active::after {
//         content: '';
//         height: 3px;
//         border-radius: 3px 3px 0 0;
//         width: 100%;
//         position: absolute;
//         bottom: 1px;
//         left: 0;
//         background-color: #eba417;
//       }
//     }


  @media (max-width: 720px) {
    width: 350px;
    padding: 14px;
  }

  @media (max-width: 620px) {
    width: 300px;
    padding: 14px;
  }

  @media (max-width: 420px) {
    width: 240px;
    padding: 10px;
  }

  @media (max-width: 320px) {
    width: 200px;
    padding: 8px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 520px) {
    display: none;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  height: 3rem;
  border-radius: 10px;
  background: #DDE9F0;
  border: 0;
  padding: 0 1.5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  color: #115D8C;
  font-weight: normal;

  svg {
    width: 20px;
    height: 20px;
  }
  
  svg:first-child{
    margin-right: 1rem;
  }
  
  svg.closeIcon {
    margin-left: 1rem;
  }
  
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
 `;
