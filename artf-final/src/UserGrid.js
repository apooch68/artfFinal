import React from 'react';
import styled from 'styled-components';
import {ProfileImage} from './ProfileImage';

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    gap: 15px;
    grid-template-areas: "photo name"
                         "photo label"
                         "photo description";
    @media (max-width: 990px){
        grid-template-areas: "photo name"
                                "label ."
                                "description .";
    }
`;

export const MiniUserGrid = styled.div`
    display: grid;
    justify-content: left;
    grid-template-columns: auto auto;
    gap: 10px;
`;

const Photo = styled.div`
    grid-area: photo;
`;

const Name = styled.div`
    grid-area: name;
    font-size: 35px;
    align-self: center;
`;

const Label = styled.div`
    grid-area: label;
    @media (max-width: 990px){
        padding-left: 25px;
    }
`;

const LabelBlurred = styled.div`
    grid-area: label;
    color: transparent;
    text-shadow: 1px 2px 5px rgba(0,0,0,0.5);
    @media (max-width: 990px){
        padding-left: 25px;
    }
`;

const Description = styled.div`
    grid-area: description;
    max-width: 400px;
    @media (max-width: 990px){
        grid-column: 1/3;
        padding-left: 25px;
    }
`;

const DescriptionBlurred = styled.div`
    grid-area: description;
    max-width: 400px;
    color: transparent;
    text-shadow: 1px 2px 5px rgba(0,0,0,0.5);
    @media (max-width: 990px){
        grid-column: 1/3;
        padding-left: 25px;
    }
`;

export const Profile = ({blurInfo}) => {
    const DescriptionComponent = blurInfo ? DescriptionBlurred : Description;
    const LabelComponent = blurInfo ? LabelBlurred : Label;
    return <UserGridStyled> 
            <Photo><ProfileImage/></Photo>
            <Name>GridGallary</Name>
            <LabelComponent><strong>400</strong> followers </LabelComponent>
            <DescriptionComponent>Pitchfork tilde lomo chillwave keytar, tofu chartreuse letterpress mumblecore. 
                 mixtape palo santo kitsch sustainable food truck asymmetrical microdosing pok pok.</DescriptionComponent>
            
         </UserGridStyled>;
}