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
    background: no-repeat center/170% url(https://scontent.fnyc1-1.fna.fbcdn.net/v/t1.18169-9/27751941_1039422206199079_3433496688128842182_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CW4e1bNnKFcAX9cR1Ut&_nc_ht=scontent.fnyc1-1.fna&oh=bdc2d957e54fe89250c9d1d884dcc69a&oe=60AC3F3E);
    border-radius: 100%;

`;