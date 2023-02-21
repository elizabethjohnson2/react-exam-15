import React from 'react'
import styled from 'styled-components'
import Nav from '../includes/Nav';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

// import 'sweetalert2/src/sweetalert2.scss'



function Demo() {
 const pull=()=>{
    Swal.fire('Comming Soon')
 }
  return (
    <GridMain>
        <SideBar>
        <Nav />
        </SideBar>
        <Header>
        <HeaderContainer>
        
            <InnerBox>
            <Left>
                <LinkImageContainer>
                <LogoImage  src={require("../../assets/images/Property 1=serach.svg")} alt="logo"/>
                </LinkImageContainer>
               <Images>
                <ImageTag>
                <StateImage src={require("../../assets/images/Component 429.svg")} alt="Image"/>
                <StateName>United States</StateName>
                </ImageTag>
                <ImageTags>
                <ArrowImage src={require("../../assets/images/Property 1=arrow.svg")} alt="Image"/>
                <ArrowName>87%</ArrowName>
                </ImageTags> 
                </Images>     
            </Left>
            <LineTag></LineTag>
            </InnerBox>

            <Middle>
                <PropertyImage src={require("../../assets/images/Property 1=night.svg")} alt="Night"/>
                <BellImage src={require("../../assets/images/Property 1=bell.svg")} alt="Bell"/>
            </Middle>
            <Right>
                <FrameImage src={require("../../assets/images/Frame 3466889.png")} alt="frame"/>
                <TagImage src={require("../../assets/images/Property 1=down.svg")} alt="arrow"/>
            </Right>
        </HeaderContainer>
        </Header>
        <MiddleSec>
            commingsoon
        </MiddleSec>
    </GridMain>
  )
}
const Items = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    color: gray;
`
const Leftitems = styled.div`
    width: 50%;
    display: flex;
`
const GridMain = styled.div`
    display: grid;
    grid-template-columns: repeat(2, .5fr) repeat(7, 1fr);
    grid-template-rows: .5fr repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 110vh;
    background-color: #212236;
`;
const SideBar = styled.div`
    grid-area: 1 / 1 / 5 / 3;

`;
const Header = styled.div`
grid-area: 1 / 3 / 2 / 10;
`;
const MiddleSec = styled.div`
grid-area: 2 / 3 / 5 / 7;
color: #fff;
font-size: 60px;
margin-left: 500px;
margin-top: 300px;
`;
const SideSec = styled.div`
grid-area: 2 / 7 / 5 / 10;
`;



const HeaderContainer=styled.div`
    height: 100px;
    display:flex;
    justify-content:space-between;
    padding:10px;
    `;
    const Left=styled.div`
    width:90%;
    
    /* margin: 0 auto; */
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    `;
    
    const InnerBox=styled.div`
    width:85%;
    `;
    const LineTag=styled.hr`
    border-bottom:1px solid #727488;
    width: 100%;
    margin-top:20px;

    `;
    const LinkImageContainer=styled(Link)`
    padding-right: 500px;
    width:40px;
    
    `;
    const LogoImage=styled.img`
    display: block;
    width:100%;
   `;
   const Images =styled.div`
   width:20%;
   display:flex;
   justify-content:space-between;
   `;
   const ImageTag=styled.div`
   display:flex;
   margin:0 auto;
   width:40%;
   align-items:center;
   justify-content:space-between;
  
  
  
   `;
    const StateImage=styled.img`
     width: 100%; 
     height: 50%; 
    display: flex;
    border-radius: 50%;
    /* margin-right: 90px; */
    
   
    
   `;
    const StateName=styled.span`
    font-size:15px;
    color:#727488;
    display: inline-block;
    margin-right:40px;
    margin-left: 20px;
    `;
    const ImageTags=styled.div`
    display:flex;
    margin:0 auto;
    align-items:center;
    justify-content:space-between;
    /* margin-left:10px; */
    width:40%;
    
    `;
    const ArrowImage=styled.img`
     /* margin-right:10px; */
    display:flex;
    width: 100%;
    height:60%;

    `;
    
    const ArrowName=styled.p`
           /* margin-right: 141px; */
       color:#727488;
       font-size:20px;
       margin-top: 10px;
    `;
    const Middle=styled.div`
    width: 10%;
    padding-right:20px;
    display: flex;
    margin-left: 59px;

    `;
    const PropertyImage=styled.img`
     width:30%;
    display: flex;
    `;
    const BellImage=styled.img`
     width:30%;
    display: flex;
    `;
    const Right=styled.div`
    width: 10%;
    padding-right:20px;
    display: flex;
    justify-content: space-between;
    padding-top:20px;
    `;
    const FrameImage=styled.img`
    width: 45%;
    height: 80%;
    display: flex;
    border-radius: 50%;
    `;
    const TagImage=styled.img`
     width:21%;
    display: flex;
    /* margin-right: 62px; */
    margin-right: 30px;  
    `;

 export default Demo;