import React from"react";
import styled from "styled-components";

export default function Main(){
return(

<MainContainer>

    
    <HeaderContainer>
    <Left>
        <HeadName>Hi,Mikey! </HeadName>
        </Left>
        <Middle>
            <ImageBar>
                <Image src={require("../../assets/images/Component 429.svg").default}alt="image"/>
            </ImageBar>
            <State>US Server</State>
        </Middle>
        <Right>
            <Image1>
                <Arrow src={require("../../assets/images/Property 1=down.svg").default}alt="image"/>
            </Image1>
            <Image2>
                <Icon src={require("../../assets/images/Property 1=control.svg").default}/>

            </Image2>
            <Image3>
                <Icon2 src={require("../../assets/images/Property 1=menu.svg").default}/>
            </Image3>

        </Right>

    </HeaderContainer>


    
</MainContainer>
    )
}
const MainContainer=styled.div`
width: 40%;
    top:200px;
  position:relative;`;
const HeaderContainer=styled.div`
 /* display:flex;
 justify-content: space-evenly;
 background-color:#000;
 width:52%;
 height:200px;
 border:30px; */
  `;
const Left=styled.div`
 width:5%;

`;
const HeadName=styled.span`
 font-size:12px;
`;
const Middle=styled.div`
 /* width:30%;
 display: flex; */
`;
const ImageBar=styled.div`
`;
const Image=styled.img`
 /* width:30%;
 display:block;
 border-radius:50%; */
`;
const State=styled.small`
/* font-size:12px;

height:10px; */

`;
const Right=styled.div`
`;
const Image1=styled.div``;
const Arrow=styled.img`
 width:3%;
`;
const Image2=styled.div``;
const Icon=styled.img`
 width:3%;
`;
const Image3=styled.div``;
const Icon2=styled.img`
 width:3%;
`;





















