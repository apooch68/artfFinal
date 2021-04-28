import styled, {css} from 'styled-components';

export const ProfileImage = styled.div`
    width: 200px;
    height: 200px;
    margin: 40px;
    @media (max-width: 990px){
        margin: 20px;
        width: 120px;
        height: 120px;
    }
    ${({mini}) => mini && css`
        width: 50px;
        height: 50px;
        margin: 5px;
        @media (max-width: 990px){
            margin: 5px;
            width: 30px;
            height: 50px;
        } 
        
    `};
    background: no-repeat center/170% url(https://pyxis.nymag.com/v1/imgs/7b1/f7e/d9537726a7ff3eb18f3221a5a7b17b3058-11-bojack.rsquare.w330.jpg);
    border-radius: 100%;

`;