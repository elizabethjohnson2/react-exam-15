import React,{useState} from "react";
import styled from "styled-components";



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
                    <LogoButton>Add Droplet</LogoButton>
                </Button>
                
            </Leftcontainer>
            
        <HeaderContainer>
            <Left>
            <LineTag></LineTag>
                <LogoImage src={require("../../assets/images/Property 1=serach.svg").default} alt="logo"/>
                <StateImage src={require("../../assets/images/Component 429.svg").default} alt="Image"/>
                <ImageTag>
                <StateName>United States</StateName>
                <ArrowImage src={require("../../assets/images/Property 1=arrow.svg").default} alt="Image"/>
                </ImageTag>
                <ArrowName>87%</ArrowName>
            </Left>
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
      height:750px;
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
      width:45%;
     `;

    const ImageButton=styled.button`
    
    border-radius:8px;
    margin-left: 11px;
    background-color:#67636F;
    `;
      const LinkImage=styled.img`
      `;
      const LinkName=styled.p`
      font-size:15px;
      font-family:'dm_sansregular';
      margin-left: 5px;
      `;
      const ListMainItem=styled.div`
        padding-top:40px;
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;`;
      const ListMain=styled.div`
         width:45%;`;
      const ImageButtonTag=styled.button`
       border-radius:8px;
       margin-left: 11px;
       background-color:#67636F;
    `;
      const TagImages=styled.img`
      width:100%;
      display:flex;
      `;
      const TagNames= styled.p`
      font-size:15px;
      font-family:'dm_sansregular';
      margin-left: 5px;
      `;
      const Button=styled.div``;
      const LogoButton=styled.button``;

    const HeaderContainer=styled.div`
    width:80%;
    display:flex;
    justify-content:space-between;
    margin-left:10%;
    padding:10px;
    
    `;
    const Left=styled.div`
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
   
    `;
    const LineTag=styled.div`
    border-bottom:3px solid #000;
    `;
    const LogoImage=styled.img`
     width: 5%;
    display: block;
    margin-right: 445px;
    margin-bottom: 652px;
   
   
   `;
   const ImageTag=styled.div`
   display:flex;
   margin:0 auto;
  
   `;
    const StateImage=styled.img`
     width: 7%;  
    display: flex;
    border-radius: 50%;
    margin-right: 77px;
    margin-bottom: 670px;
   `;
    const StateName=styled.p`
    font-size:10px;
    margin-right: 26px;
    margin-bottom: 400px;
    color:#727488;

    margin-left: -59px;
    
    `;
    const ArrowImage=styled.img`
     margin-right:10px;
    display:flex;
    width: 24px;
    margin-bottom: 670px;
   
    `;
    
    const ArrowName=styled.p`
           margin-right: 141px;
       color:#727488;
       margin-top: 10px;
    `;
    const Middle=styled.div`
    width: 8%;
    padding-right:20px;
   
    display: flex;
    `;
    const PropertyImage=styled.img`
     width:30%;
    display: flex;
    
    margin-bottom: 670px;`;
    const BellImage=styled.img`
     width:30%;
    display: flex;
    margin-bottom: 670px;`;
    const Right=styled.div`
    width: 10%;
    padding-right:20px;
   
    display: flex;
    justify-content: space-between;`;
    const FrameImage=styled.img`
      width:50%;
    display: flex;
    border-radius: 50%;
    margin-bottom: 670px;
    `;
    const TagImage=styled.img`
     width:20%;
    display: flex;
    margin-right: 62px;
    margin-bottom:670px;
    `;
  
   

