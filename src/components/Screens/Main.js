import React from 'react'
import styled from 'styled-components'
import Nav from '../includes/Nav';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
// import Demo from"../Screens/Demo";


// import 'sweetalert2/src/sweetalert2.scss'



function Demo() {
 const pull=()=>{
    Swal.fire('Hi Hello')
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
                <HeadSection>
            
                    <LeftSection>
                    <Heade>Hi Mikey!</Heade>
                    </LeftSection>
                    <RightSection>
                    <State>
                        <Image src={require("../../assets/images/Component 429.svg")} alt="image"/>
                    </State>
                    <Name>US Sever</Name>
                    
                
                        <Arrow>
                            <ImageTag1 src={require("../../assets/images/Property 1=down.svg")} alt="image"/>
                        </Arrow>
                        <Icon>
                            <ImageTag2 src={require("../../assets/images/Property 1=control.svg")} alt="image"/>
                        </Icon>
                        <MainContent>
                            <ImageTag3 src={require("../../assets/images/Property 1=menu.svg")} alt="image"/>
                        </MainContent>
                    </RightSection>
                
                    
                </HeadSection>
                <MiddleSections>
                
                    <Number>
                        <ListItem>
                        <FirstNumber>35/40 </FirstNumber>
                        <Name12>GB</Name12>
                            <Name1>storage</Name1>
                            <Name2>+Add More</Name2>
                            </ListItem>
                            
                            <ListItem>
                        <SecondName>35/40 </SecondName>
                        <Name12>GB</Name12>
                            <Name1>storage</Name1>
                            <Name2>+Add More</Name2>
                            </ListItem>
                        
                    
                        <RightContent>
                            <ButtonTags>Add Droplet</ButtonTags>
                        </RightContent>
                    
                    </Number>
                
                
                
                    <Graph>
                        <GraphImage src={require("../../assets/images/images.png")} alt="image"/>
                    </Graph>
                    
                    <LeftBar>
                    <RecentName>Recently Commits </RecentName>
                    </LeftBar>
                
                    <Section> 
                    
                        
                        <ImageBares>
                            <Items>
                                <Leftitems>
                                    <ImageBar>
                                        <CatImage src={require("../../assets/images/Property 1=cat.svg")} alt="image"/>
                                    </ImageBar>
                                    <MiddleBar>
                                        <Code>dcf2b99</Code>
                                        <Time>10 oct,10:23pm</Time>
                                    </MiddleBar>
                                </Leftitems>
                                <MbTags>
                                    <Mb>12MB</Mb>
                                </MbTags>
                            </Items>
                            <Items>
                                <Leftitems>
                                    <ImageBar>
                                        <CatImage src={require("../../assets/images/Property 1=cat.svg")} alt="image"/>
                                    </ImageBar> 
                                    <MiddleBar>
                                        <Code>75075fa</Code>
                                        <Time>10 oct,10:23pm</Time>
                                    </MiddleBar>
                                </Leftitems>
                                <MbTags>
                                    <Mb>12MB</Mb>
                                </MbTags>
                            </Items>
                            <Items>
                                <Leftitems>
                                    <ImageBar>
                                        <CatImage src={require("../../assets/images/Property 1=trash b.svg")} alt="image"/>
                                    </ImageBar>
                                    <MiddleBar>
                                        <Code>8936e01</Code>
                                        <Time>10 oct,10:23pm</Time>
                                    </MiddleBar>
                                </Leftitems>
                                <MbTags>
                                    <Mb>12MB</Mb>
                                </MbTags> 
                            </Items>
                            
                            <Items>
                                <Leftitems>
                                    <ImageBar>
                                        <CatImage src={require("../../assets/images/Property 1=trash b.svg")} alt="image"/>
                                    </ImageBar> 
                                    <MiddleBar>
                                        <Code>6d5ddel</Code>
                                        <Time>10 oct,10:23pm</Time>
                                    </MiddleBar>
                                </Leftitems>
                                <MbTags>
                                    <Mb>12MB</Mb>
                                </MbTags> 
                            </Items>
                            <Items>
                                <Leftitems>
                                    <ImageBar>
                                        <CatImage src={require("../../assets/images/Property 1=cat.svg")} alt="image"/>
                                    </ImageBar> 
                                    <MiddleBar>
                                        <Code>ef65505</Code>
                                        <Time>10 oct,10:23pm</Time>
                                    </MiddleBar>
                                </Leftitems>
                                <MbTags>
                                    <Mb>12MB</Mb>
                                </MbTags>
                            </Items>

                            <Items>
                                <Leftitems>
                                    <ImageBar>
                                        <CatImage src={require("../../assets/images/Property 1=trash b.svg")} alt="image"/>
                                    </ImageBar> 
                                    <MiddleBar>
                                        <Code>67efafc</Code>
                                        <Time>10 oct,10:23pm</Time>
                                    </MiddleBar>
                                </Leftitems>
                                <MbTags>
                                    <Mb>12MB</Mb>
                                </MbTags>
                            </Items>
                            
                            </ImageBares> 
                            <BorderSection>
                                <Droplet>
                                    <Lefts>
                                    <DropName>Droplet 1</DropName>
                                    <Time1>78.43%</Time1>
                                    <Time2>2.35%</Time2>
                                    </Lefts>
                                    <TimeTag>
                                        <TimeImage src={require("../../assets/images/image4.png")} alt="image"/>
                                    </TimeTag>
                                    
                                </Droplet>
                                <Droplet>
                                    <Lefts>
                                    <DropName>Droplet 1</DropName>
                                    <Time1>78.43%</Time1>
                                    <Time2>2.35%</Time2>
                                    </Lefts>
                                    <TimeTag>
                                        <TimeImage src={require("../../assets/images/image2.png")} alt="image"/>
                                    </TimeTag>
                                    
                                </Droplet>
                                <Droplet>
                                    <Lefts>
                                    <DropName>Droplet 1</DropName>
                                    <Time1>78.43%</Time1>
                                    <Time2>2.35%</Time2>
                                    </Lefts>
                                    <TimeTag>
                                        <TimeImage src={require("../../assets/images/image.png")} alt="image"/>
                                    </TimeTag>
        
                                </Droplet>
                                <Droplet>
                                    <Lefts>
                                    <DropName>Droplet 1</DropName>
                                    <Time1>78.43%</Time1>
                                    <Time2>2.35%</Time2>
                                    </Lefts>
                                    <TimeTag>
                                        <TimeImage src={require("../../assets/images/image4.png")} alt="image"/>
                                    </TimeTag>
                                    
                                </Droplet>


                            </BorderSection>  

                </Section>
                </MiddleSections>
            </MiddleSec>
            <SideSec>
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
            
                    <ButtonBar onClick={pull}>
                    <ImageBar>
                    <Bar1>
                    <Image1 src={require("../../assets/images/Property 1=FILE B.svg")}alt="image"/>
                </Bar1>
                <Bar2>
                    <Image2 src={require("../../assets/images/Property 1=menu.svg")}alt="image"/>
                    </Bar2>
                    </ImageBar>
                    <HeadName>Python</HeadName>
                    <SubSection>
                    <SubName>14 Projects</SubName>
                    <SideName>24GB</SideName>
                    </SubSection>
                    </ButtonBar>

                    <ButtonBar onClick={pull}>
                <ImageBar>
                <Bar1>
                        <Image1 src={require("../../assets/images/Property 1=FILE O.svg")} alt="image"/>
                        </Bar1>
                        <Bar2>
                        <Image2  src={require("../../assets/images/Property 1=menu.svg")} alt="image"/>
                        </Bar2>
                        
                    
                    </ImageBar >
                    <HeadName>PHP</HeadName>
                    <SubSection>
                    <SubName>21 Projects</SubName>
                    <SideName>24GB</SideName>
                    </SubSection>
                    </ButtonBar>

                    <ButtonBar onClick={pull}>
                
                    
                    <ImageBar>
                    <Bar1>
                        <Image1 src={require("../../assets/images/Property 1=FILE Y.svg")} alt="image"/>
                        </Bar1>
                        <Bar2>
                        <Image2 src={require("../../assets/images/Property 1=menu.svg")} alt="image"/>
                        </Bar2>
                    </ImageBar>
                    <HeadName>ASP</HeadName>
                    <SubSection>
                    <SubName>19 Projects</SubName>
                    <SideName>24GB</SideName>
                    </SubSection>
                    </ButtonBar>

                    <ButtonBar onClick={pull}>
                    
                    
                    <ImageBar>
                        <Bar1>
                        <Image1 src={require("../../assets/images/Property 1=FILE C.svg")} alt="image"/>
                        </Bar1>
                        <Bar2>
                        <Image2 src={require("../../assets/images/Property 1=menu.svg")} alt="image" />
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
            </SideSec>
        </GridMain>
  )
}
const Items = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    color: gray;
`;
const Leftitems = styled.div`
    width: 50%;
    display: flex;
`;
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
     width:40%;
    
    `;
    const ArrowImage=styled.img`
     display:flex;
     width: 100%;
     height:60%;
    `;
    const ArrowName=styled.p`
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
    const HeadSection=styled.div`
    display:flex;
    justify-content:space-between;
    padding-top:20px;
    padding-bottom: 47px;
    `;
    const LeftSection=styled.div`
    margin-top:10px;
    
    `;
    const Heade=styled.span`
    font-size:15px;
    font-weight:100;
    color:#fff;
    margin-left:163px;
   
    `;
     const RightSection=styled.div`
     display:flex;
     justify-content:space-between;
     `;
    
    const State=styled.div` 
    `;
    const Image=styled.img`
    display:block;
    width: 100%;
    border-radius:50%;
    `;
    const Name=styled.span`
    font-size:15px;
    font-weight:100;
    margin-left:13px;
    /* margin-top:-53px; */
    color:#67636F;
    `;
    const Arrow=styled.div`
    `;
    const ImageTag1=styled.img`
    width:100%;
    display:block;
    `;
    const Icon=styled.div`
    padding-left: 12px;
    padding-right: 12px;
    `;
    const ImageTag2=styled.img`
    width:100%;
    display:block;
    `;
    const MainContent=styled.div` 
    `;
    const ImageTag3=styled.img`
    width:100%;
    display:block;
    `;
    const MiddleSections=styled.div`
    background-color:#212236;
    margin-left:30px;
    padding-top:67px;
    padding-right:20px;
    height:117px;
    border-radius:10px;
    `;
    const Number=styled.div`
     display:flex;
    justify-content:space-between;
    margin-top:-53px;
    margin-left:100px;
    width:80%;
    `;
    const ListItem=styled.div`
    `;
    const FirstNumber=styled.span`
     font-size:30px;
     font-weight:500;
     color:#fff; 
    `;
    const SecondName=styled.span`
     font-size:30px;
     font-weight:500;
     color:#fff;
    `;
    const Name1=styled.small`
     display:flex;
     font-size:20px;
     font-weight:100;
     text-align:center;
    `;
   const Name12=styled.span`
    color:#67636F;
   `;
    const Name2=styled.small`
     font-size:20px;
     font-weight:100;`;
    const RightContent=styled.div`
     margin-left:10px;`;
    const ButtonTags=styled.button`
     background-color:#FB896B;
     height:65px;
     width:100%;
     font-size:20px;
    `;
    const Graph=styled.div`
     width:40%;
     margin-left:70px;
    `;
    const GraphImage=styled.img`
     width:100%;
     display:block;
    `;
    const Section=styled.div` 
     display:flex;
     justify-content:space-between;
     padding-top:40px;
     padding-left:70px;
    
    `;
    const RecentName=styled.small`
     font-size:30px;
     font-weight:400;
     color:#fff;
   
    `;
    const LeftBar=styled.div`
     padding-top:47px;
     margin-left:25px;
    `;
    const ImageBares=styled.div`
     margin-left:-30px;
    width: 300px;
    `;
    
    const CatImage=styled.img`
     width:75%;
     display:block;
     background-color:gray;
     height:40px;
     border-radius: 20px;
    `;
    const MiddleBar=styled.div`
     width:50%;
    `;
    const Code=styled.small`
     font-size:10px;
     font-weight:200;
    `;
    const Time=styled.span`
     display:flex;
    `;
    const MbTags=styled.div`
     margin-left:50px;
    `;
    const Mb=styled.small`
     font-size:20px;
     font-weight:200;
    `;
    const BorderSection=styled.div`
  `;
    const Droplet=styled.div`
     display:flex;
     justify-content:space-between;
     border-radius:30px;
     background:1px solid;
     background-color:#212236;
     padding-top:10px;
    `;
    const Lefts=styled.div`
     width:70%;
     margin-right:30px;
    `;
    const Rights=styled.div`
     width:30%;
    `;
    const DropName=styled.small`
     font-size:20px;
     font-weight:200;
     color:#67636F;  
    `;
    const Time1=styled.h2`
     font-size:30px;
     margin-top:-1px;
     color:#fff;
    `;
    const TimeTag=styled.div`
     width:90%;
     margin-left:50px;
    `;
    const TimeImage=styled.img`
     width: 100%;
     display: block;
    `;
    const Time2=styled.small`
     font-size:10px;
     color:#FB896B;
     margin-top:10px;
    `;
    const RightContainer=styled.div`
     position: absolute;
     top: 20%;
     right: 5%;
     bottom: 0%;
     height:80px;
     width:25%;

    `;
    const Background=styled.div`
     background:#51459F;
     display: flex;
     width:90%;
     border-radius:30px;
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
    background-color:#26273b;
    border:5px;
    border-radius:10%;
    margin-bottom: 20px;
  
    `;
  const ImageBar=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
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
    background-color:#84E9F4;
    border-radius:15px;
    display:block;
    `;
















export default Demo