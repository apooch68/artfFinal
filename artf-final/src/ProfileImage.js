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
    background: no-repeat center/170% url("https://cdn.vox-cdn.com/thumbor/v3OyeorG4Honr3vIWBrcZmy0XlA=/0x0:1920x1080/1200x800/filters:focal(863x301:1169x607)/cdn.vox-cdn.com/uploads/chorus_image/image/56596751/1351055_94035_zoomed_1.0.jpg");
    border-radius: 100%;

`;