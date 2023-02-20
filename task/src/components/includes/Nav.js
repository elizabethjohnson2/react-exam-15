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
            
        <HeaderContainer>
            <InnerBox>
            <Left>
                <LinkImageContainer>
                <LogoImage  src={require("../../assets/images/Property 1=serach.svg").default} alt="logo"/>
                </LinkImageContainer>
               <Images>
                <ImageTag>
                <StateImage src={require("../../assets/images/Component 429.svg").default} alt="Image"/>
                <StateName>United States</StateName>
                </ImageTag>
                <ImageTags>
                <ArrowImage src={require("../../assets/images/Property 1=arrow.svg").default} alt="Image"/>
                <ArrowName>87%</ArrowName>
                </ImageTags> 
                </Images>     
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
        </SectionContainer>
        <RightContainer>
        <Background>
            <OutLetSection>
           <HeadLine>Current Subscription plan</HeadLine>
            <TimeLine>$ 1325.00</TimeLine>
            <SubHeading>Company Plus</SubHeading>
            <ButtonLag>Change Plan</ButtonLag>
            </OutLetSection> 
            <ImageBars>
            <SideImage src={require("../../assets/images/Frame 3466680.png")} alt="image"/>
            </ImageBars>
        </Background>
        <MainSection>
           
                <ButtonBar>
                <ImageBar>
                <Bar1>
               <Image1 src={require("../../assets/images/Property 1=FILE B.svg").default}alt="image"/>
               </Bar1>
               <Bar2>
                <Image2 src={require("../../assets/images/Property 1=menu.svg").default}alt="image"/>
                </Bar2>
                </ImageBar>
                <HeadName>Python</HeadName>
                <SubSection>
                <SubName>14 Projects</SubName>
                <SideName>24GB</SideName>
                </SubSection>
                </ButtonBar>

                <ButtonBar>
            <ImageBar>
            <Bar1>
                    <Image1 src={require("../../assets/images/Property 1=FILE O.svg").default} alt="image"/>
                    </Bar1>
                    <Bar2>
                    <Image2  src={require("../../assets/images/Property 1=menu.svg").default} alt="image"/>
                    </Bar2>
                    
                   
                </ImageBar>
                <HeadName>PHP</HeadName>
                <SubSection>
                <SubName>21 Projects</SubName>
                <SideName>24GB</SideName>
                </SubSection>
                </ButtonBar>

                <ButtonBar>
              
                
                <ImageBar>
                <Bar1>
                    <Image1 src={require("../../assets/images/Property 1=FILE Y.svg").default} alt="image"/>
                    </Bar1>
                    <Bar2>
                    <Image2 src={require("../../assets/images/Property 1=menu.svg").default} alt="image"/>
                    </Bar2>
                </ImageBar>
                <HeadName>ASP</HeadName>
                <SubSection>
                <SubName>19 Projects</SubName>
                <SideName>24GB</SideName>
                </SubSection>
                </ButtonBar>

                <ButtonBar>
                
                
                <ImageBar>
                    <Bar1>
                    <Image1 src={require("../../assets/images/Property 1=FILE C.svg").default} alt="image"/>
                    </Bar1>
                    <Bar2>
                    <Image2 src={require("../../assets/images/Property 1=menu.svg").default} alt="image" />
                    </Bar2>
                </ImageBar>
                <HeadName>Ruby</HeadName>
                <SubSection>
                <SubName>17 Projects</SubName>
                <SideName>12GB</SideName>
               </SubSection>
                </ButtonBar>
        </MainSection>
        <Bottomsection>
            <MainBar>
            <MainHeading>Invite 2 friends and get 5GB extra space.</MainHeading>
            <ButtonTag>Invite Now!</ButtonTag>
            </MainBar>
            <ImageSection>
            <Image3 src={require("../../assets/images/Frame 3466890.png")} alt="Image"/>
            </ImageSection>
            
        </Bottomsection>
        </RightContainer>
        </MainContainer>
     
    )
}
    const MainContainer=styled.div`
    position:absolute;
     
   
     background-color:#212236;
     margin-left: auto; 
    `;
    const SectionContainer=styled.div`
     display: flex;`;
      const Leftcontainer=styled.div`
    
      width:12%;
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

    const HeaderContainer=styled.div`
    width:85%;
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
    /* margin-left:15%; */
   `;
   const Images =styled.div`
   width:20%;
   display:flex;
   justify-content:space-between;
   `;
   const ImageTag=styled.div`
   display:flex;
   margin:0 auto;
   /* margin-left:200px; */
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
   
    const RightContainer=styled.div`
    position: absolute;
    top: 0%;
    right: 5%;
    bottom: 0%;
    height:80px;
    width:25%;
    padding-top:200px;
    `;
    const Background=styled.div`
  
   /* width: 100px; */
    background:#51459F;
    display: flex;
    width:90%;
    border-radius:30px;
    /* margin-left: 11px; */
    padding-left:40px;
    `;
    const OutLetSection=styled.div`
        height: 200px;
        width: 100%;
        margin-left: 5px;
    `;
    
    const HeadLine=styled.h3`
    font-size:15px;
    color:#fff;
    `;
    const TimeLine=styled.h6`
    font-size:15px;
    color:#fff;
    `;
    const SubHeading=styled.p`
    font-size:15px;
    color:#fff;
    `;
    const ButtonLag=styled.button`
    height: 19%;
    width: 47%;
    background-color:#fff;
    border-radius:10px;
    `;
    const ImageBars=styled.div`
    height:200px;
    width: 100%;
    `;
    const SideImage=styled.img`
    width:100%;
    height:100%;
    display:block;
    border-radius:30px;
    `;
    const MainSection=styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    margin-top:50px;
    `;

    const ButtonBar=styled.button`
    width:48%;
    height:128px;
    background-color:#212236;
    border:5px;
    border-radius:10%;
    margin-bottom: 20px;
  
    `;
    const ImageBar=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    /* width:20%; */
    `;
    const Bar1=styled.div`
    width:23%;
    `;
    const Bar2=styled.div`
    width:10%;
    `;
    const Image1=styled.img`
    width:100%;
    display:block;
    `;
    const Image2=styled.img`
    width:100%;
    display:block;
    `;
    const HeadName=styled.h6`
    font-size:18px;
    text-align:start;
   margin-top:5px;
   color:#fff;
    `;
    const SubSection=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
   margin-top:-26px;
    /* width:20px; */
    `;
    const SubName=styled.small`
    font-size:15px;
    color:#727488;
    `;
    const SideName=styled.small`
    font-size:15px;
    color:#727488;
    `;
    const Bottomsection=styled.div`
     background:#51459F;
    width:93%;
    height:150%;
    border-radius:30px;
    display: flex; 
    `;
    const MainBar=styled.div`
    margin-left:50px;
    height:100%;
    width:60%;
    text-align:start;
    margin-top:10px;
    `;
    const ImageSection=styled.div`
    height:90%;
    width: 34%;
    `;
     const MainHeading=styled.small`
     font-size:15px;
     color:#fff;
     `;
    const Image3=styled.img`
    display: block;
    width:100%;
    border-radius:30px;
    /* margin-left:20px; */
    height: 100%;
    `;
   
    const ButtonTag=styled.button`
    margin-top:10px;
    height: 40%;
    width: 45%;
    background-color:#fff;
    border-radius:15px;
    display:block;
    `;
  
   

