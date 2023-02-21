import React from "react";
import styled from "styled-components";
import {Link} from"react-router-dom";


 export default function Nav(){
  
  
    return (
        
        <MainContainer>
            <SectionContainer>
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
            
     
        </SectionContainer>
        
        </MainContainer>
     
    )
}
    const MainContainer=styled.div`
     
   
     background-color:#212236;
     margin-left: auto; 
     /* height:140vh; */
    `;
    const SectionContainer=styled.div`
     display: flex;`;
      const Leftcontainer=styled.div`
    
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
    background-color:#212236;
    height: 52px;
    width: 50px;    
    `;
      const LinkImage=styled.img`
      width:100%;
      display:block;
      `;
      const LinkName=styled.p`
      font-size:15px;
      font-family:'dm_sansregular';
      margin-left: 8px;
      color:#727488;
      `;
      const ListMainItem=styled.div`
        padding-top:40px;
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;`;
      const ListMain=styled.div`
         width:50%;`;
      const ImageButtonTag=styled.button`
       /* border-radius:8px;
       margin-left: 11px;
       background-color:#67636F; */
    border-radius:10px;
    margin-left: 15px;
    background-color:#1B1C30;
    height: 52px;
    width: 50px;
    `;
      const TagImages=styled.img`
      width:100%;
      display:flex;
      `;
      const TagNames= styled.p`
      font-size:15px;
      font-family:'dm_sansregular';
      margin-left: 15px;
      color:#727488;
      `;
      const Button=styled.div`
      padding-top:140px;
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

       
      
   

