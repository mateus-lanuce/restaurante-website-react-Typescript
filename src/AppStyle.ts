import styled from "styled-components";

export const section__padding = styled.div`
    padding: 4rem 6rem;
`
  
export const flex__center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
  
export const app__bg = styled.div `
    background: url('./assets/bg.png');
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
`
  
export const app__wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    min-height: 100vh;
`
  
export const app__wrapper_info = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`
  
export const app__wrapper_img = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  
    margin-left: 2rem;
`
  
export const app__wrapper_img_reverse = styled.div`
    justify-content: flex-start;
    margin-right: 2rem;
`
  
export const app__wrapper_image = styled.img`
    width: 80%;
`
  
export const custom__button = styled.div`
    background-color: var(--color-crimson);
    font-family: var(--font-base);
    color: var(--color-black);
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 16px;
    padding: 0.5rem 1.5rem;
    border-radius: 1px;
    border: none;
    outline: none;
    cursor: pointer;
`
  
export const p__cormorant = styled.div`
    font-family: var(--font-base);
    color: var(--color-white);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: 'tnum' on, 'lnum' on;
    line-height: 29.9px;
    font-size: 23px;
`

export const p__opensans = styled.div`
    font-family: var(--font-alt);
    color: var(--color-white);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
`
  
export const headtext__cormorant = styled.div`
    font-family: var(--font-base);
    color: var(--color-golden);
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
`

export const spoon__img = styled.img`
    width: 45px;
`

export const Container = styled.div`
@media screen and (min-width: 2000px) {
    ${custom__button},

    ${p__cormorant} {
      font-size: 37px;
      line-height: 67px;
    }
  
    ${p__opensans} {
      font-size: 30px;
      line-height: 50px;
    }
  
    ${headtext__cormorant} {
      font-size: 150px;
      line-height: 210px;
    }
  
    ${spoon__img} {
      width: 80px;
    }
  }
  
  @media screen and (max-width: 1150px) {
    ${app__wrapper} {
      flex-direction: column;
    }
  
    ${app__wrapper_img} {
      margin: 5rem 0 0 0;
    }
  
    ${app__wrapper_img_reverse} {
      margin: 0 0 5rem 0;
    }
  
    ${app__wrapper_image} {
      width: 100%;
    }
  }
  
  @media screen and (max-width: 850px) {
    ${section__padding} {
      padding: 4rem;
    }
  }
  
  @media screen and (max-width: 650px) {
    ${section__padding} {
      padding: 4rem 2rem;
    }
    
    ${p__cormorant} {
      font-size: 21px;
    }
  
    ${p__opensans} {
      font-size: 14px;
    }
  }
  
  @media screen and (max-width: 450px) {
    ${p__opensans} {
      font-size: 12px;
    }
  
    ${p__cormorant} {
      font-size: 19px;
    }
  
    ${headtext__cormorant} {
      font-size: 45px;
      line-height: 70px;
    }
  }
`;