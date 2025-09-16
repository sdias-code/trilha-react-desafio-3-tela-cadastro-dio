import styled, { css } from 'styled-components';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';


export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Wrapper = styled.div`
    max-width: 374px;
`
export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`
export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 388px;
    margin-bottom: 20px;
    margin-top:-110px;
    line-height: 44px;

    color: #FFFFFF;
`
export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`
export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`
export const InfoCadastrarContaText = styled.p`

    width: 372px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px; 
    color: #FFFFFF;
`
export const JaTenhoContaText = styled.p`
    width: 372px;  
    margin-top: 5px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #FFFFFF;

    a {
    color: #23DD7A; 
    text-decoration: underline;
    cursor: pointer;
  }

`
export const FontesIcons = css`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color:white;
`;

export const IconPerson = styled(MdPerson)`
${FontesIcons}
color: #8647AD;
`;

export const IconEmail = styled(MdEmail)`
${FontesIcons}
color: #8647AD;
`;

export const IconLock = styled(MdLock)`
${FontesIcons}
color: #8647AD;
`;

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    color: #FFFFFF;
    padding: 2px 12px;    
    width: 280px;
    margin-top: 29px;
    
    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        
        background: #E4105D;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`
