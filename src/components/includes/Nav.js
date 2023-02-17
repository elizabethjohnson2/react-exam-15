import React from "react";
import styled from "styled-components";
import {Link} from"react-router-dom";



 export default function Nav(){
  
  
    return (
        
        <MainContainer>
            <Leftcontainer>
                <TagContainer>
                    <TagName>a</TagName>
                    <Heading>arifeen</Heading>
                </TagContainer>
                
                <ListTagItem>
                 <LinkItems>
                 <ImageButton>
                <LinkImage src={require("../../assets/images/Property 1=dashboard.svg").default} alt="Image1"/>
                </ImageButton>
                <LinkName>DashBoard</LinkName> 
                </LinkItems>
                <LinkItems>
                <ImageButton>
                <LinkImage src={require("../../assets/images/Property 1=all.svg").default} alt="Image2"/>
                </ImageButton>
                <LinkName>All Files</LinkName> 
                </LinkItems>
                <LinkItems>
                <ImageButton>
                <LinkImage src={require("../../assets/images/Property 1=share.svg").default} alt="Image3"/>
                </ImageButton>
                <LinkName>Shared</LinkName> 
                </LinkItems>
                <LinkItems>
                <ImageButton>
                <LinkImage src={require("../../assets/images/Property 1=like.svg").default} alt="Image4"/>
                </ImageButton>
                <LinkName>Favourites</LinkName> 
                </LinkItems>
                <LinkItems>
                <ImageButton>
                <LinkImage src={require("../../assets/images/Property 1=unread.svg").default} alt="Image5"/>
                </ImageButton>
                <LinkName>Recent</LinkName> 
                </LinkItems>
                <LinkItems>
                <ImageButton>
                <LinkImage src={require("../../assets/images/Property 1=reduce.svg").default} alt="Image6"/>
                </ImageButton>
                <LinkName>Request</LinkName> 
                </LinkItems>
                </ListTagItem>
                <ListMainItem>
                    <ListMain>
                        <ImageButtonTag>
                            <TagImages src={require("../../assets/images/Property 1=camera.svg").default} alt="Image"/>
                        </ImageButtonTag>
                        <TagNames>Picture</TagNames>
                    </ListMain>
                    <ListMain>
                        <ImageButtonTag>
                            <TagImages src={require("../../assets/images/Property 1=vedio.svg").default} alt="Image"/>
                        </ImageButtonTag>
                        <TagNames>Videos</TagNames>
                    </ListMain>
                    <ListMain>
                        <ImageButtonTag>
                            <TagImages src={require("../../assets/images/Property 1=note.svg").default} alt="Image"/>
                        </ImageButtonTag>
                        <TagNames>Documents</TagNames>
                    </ListMain>
                    <ListMain>
                        <ImageButtonTag>
                            <TagImages src={require("../../assets/images/Property 1=sign.svg").default} ait="Image"/>
                        </ImageButtonTag>
                        <TagNames>Signed</TagNames>
                    </ListMain>
                </ListMainItem>
                <Button>
                    <LogoButton>Add Droplet</LogoButton>
                    <ButtonLogo>
                    <LogoButton>Add Droplet</LogoButton>
                    </ButtonLogo>
                </Button>
                
            </Leftcontainer>
            
        <HeaderContainer>
            <InnerBox>
            <Left>
                <LinkImageContainer>
                <LogoImage  src={require("../../assets/images/Property 1=serach.svg").default} alt="logo"/>
                </LinkImageContainer>
               
                <ImageTag>
                <StateImage src={require("../../assets/images/Component 429.svg").default} alt="Image"/>
                <StateName>United States</StateName>
                </ImageTag>
                <ImageTags>
                <ArrowImage src={require("../../assets/images/Property 1=arrow.svg").default} alt="Image"/>
                <ArrowName>87%</ArrowName>
                </ImageTags>
                
                
            </Left>
            <LineTag></LineTag>
            </InnerBox>

            <Middle>
                <PropertyImage src={require("../../assets/images/Property 1=night.svg").default} alt="Night"/>
                <BellImage src={require("../../assets/images/Property 1=bell.svg").default} alt="Bell"/>
            </Middle>
            <Right>
                <FrameImage src={require("../../assets/images/Frame 3466889.png")} alt="frame"/>
                <TagImage src={require("../../assets/images/Property 1=down.svg").default} alt="arrow"/>
            </Right>
        </HeaderContainer>
       
        </MainContainer>
     
    )
}
    const MainContainer=styled.div`
     
     display:flex;
     background-color:#212236;
    

   margin-left: auto;
    
   
    `;
      const Leftcontainer=styled.div`
      width:15%;
      height:100vh;
      background-color:#1B1C30;
      padding-left:20px;
      `;
      const TagContainer=styled.div`
      display:flex;
     
      `;
      const TagName=styled.button`
    background-color: #84E9F4;
    margin-top: 30px;
    border-radius: 30%;
    /* margin-left: 20px; */
    width:30px;
    height: 35px;
    `;
      const Heading=styled.h1`
      margin-left: 20px;
      font-size: 38px;
      `;
      const ListTagItem=styled.div`
      padding-top:20px;
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;
      `;
     
      const LinkItems=styled.div`
      width:50%;
     `;

    const ImageButton=styled.button`
    
    border-radius:8px;
    margin-left: 11px;
    background-color:#67636F;
    height: 57px;
    width: 59px;
    `;
      const LinkImage=styled.img`
      width:100%;
      display:flex;
      `;
      const LinkName=styled.p`
      font-size:15px;
      font-family:'dm_sansregular';
      margin-left: 5px;
      color:#727488;
      `;
      const ListMainItem=styled.div`
        padding-top:40px;
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;`;
      const ListMain=styled.div`
         width:45%;`;
      const ImageButtonTag=styled.button`
       /* border-radius:8px;
       margin-left: 11px;
       background-color:#67636F; */
    border-radius:8px;
    margin-left: 11px;
    background-color:#67636F;
    height: 57px;
    width: 59px;
    `;
      const TagImages=styled.img`
      width:100%;
      display:flex;
      `;
      const TagNames= styled.p`
      font-size:15px;
      font-family:'dm_sansregular';
      margin-left: 5px;
      color:#727488;
      `;
      const Button=styled.div`
      padding-top:10px;
      display:flex;
      flex-wrap: wrap;
      padding-left:20px;
      align-items:center;
      `;
      const ButtonLogo=styled.div`
      padding-top:15px;
    margin-right: 39px;
      `;
      const LogoButton=styled.button`
      padding:15px 30px;
      border: 1px solid #000;
      border-radius: 18px;
      height: 42px;
      background-color:#F77958;
      `;

    const HeaderContainer=styled.div`
    width:85%;
    height: 100px;
    display:flex;
    justify-content:space-between;
    padding:10px;
    `;
    const Left=styled.div`
    width:20px;
    /* margin: 0 auto; */
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    `;
    const InnerBox=styled.div`
    `;
    const LineTag=styled.hr`
    border-bottom:1px solid #727488;
    width: 917px;
    margin-top:20px;

    `;
    const LinkImageContainer=styled(Link)`
    padding-right: 500px;
    
    `;
    const LogoImage=styled.img`
    display: block;
   `;
   const ImageTag=styled.div`
   display:flex;
   margin:0 auto;
   margin-left:200px;
   
   align-items:center;
   justify-content:space-between;
  
  
  
   `;
    const StateImage=styled.img`
     width: 100%; 
     height: 40px; 
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
    margin-left:20px;
   
   
   
    `;
    const ArrowImage=styled.img`
     /* margin-right:10px; */
    display:flex;
    width: 100%;
   
    `;
    
    const ArrowName=styled.p`
           /* margin-right: 141px; */
       color:#727488;
       font-size:20px;
       margin-top: 10px;
    `;
    const Middle=styled.div`
    width: 8%;
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
  
   

