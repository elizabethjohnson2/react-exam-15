import React from"react";
import styled from "styled-components";


export default function NavBar(){
    return(



<MainContainer>
    <RightContainer>
        <Background>
            <SideImage/>
            <HeadLine>Current Subscription plan</HeadLine>
            <TimeLine>$ 1325.00</TimeLine>
            <SubHeading>Company Plus</SubHeading>
            <Button>Change Plan</Button>
        </Background>
        <MainSection>
            <LeftSection>
                <ImageBar>
                    <Image1/>
                    <Image2/>
                </ImageBar>
                <HeadName>Python</HeadName>
                <SubSection>
                <SubName>14 Projects</SubName>
                <SideName>24GB</SideName>
                </SubSection>

            </LeftSection>
            <RightSection>
            <ImageBar>
                    <Image1/>
                    <Image2/>
                </ImageBar>
                <HeadName>PHP</HeadName>
                <SubSection>
                <SubName>21 Projects</SubName>
                <SideName>24GB</SideName>
                </SubSection>
                </RightSection>
                <BottomLeftSection>
                <ImageBar>
                    <Image1/>
                    <Image2/>
                </ImageBar>
                <HeadName>ASP</HeadName>
                <SubSection>
                <SubName>19 Projects</SubName>
                <SideName>24GB</SideName>
                </SubSection>
                
                </BottomLeftSection>
                <BottomRightSection>
                <ImageBar>
                    <Image1/>
                    <Image2/>
                </ImageBar>
                <HeadName>Ruby</HeadName>
                <SubSection>
                <SubName>17 Projects</SubName>
                <SideName>12GB</SideName>
                </SubSection>
                </BottomRightSection>
        </MainSection>
        <Bottomsection>
            <MainHeading>Invite 2 friends and get 5GB extra space.</MainHeading>
            <ButtonTag>Invite Now!</ButtonTag>
        </Bottomsection>
    </RightContainer>
</MainContainer>
    )
}
const MainContainer=styled.div`
`;
const RightContainer=styled.div`
display:flex;
justify-content:space-between;
`;
const Background=styled.div``;
const SideImage=styled.img``;
const HeadLine=styled.h1``;
const TimeLine=styled.h5``;
const SubHeading=styled.h3``;
const Button=styled.button``;
const MainSection=styled.div``;
const LeftSection=styled.div``;
const ImageBar=styled.div``;
const Image1=styled.img``;
const Image2=styled.img``;
const HeadName=styled.h1``;
const SubSection=styled.div``;
const SubName=styled.h3``;
const SideName=styled.h5``;
const RightSection=styled.div``;
const BottomLeftSection=styled.div``;
const BottomRightSection=styled.div``;
const Bottomsection=styled.div``;
const MainHeading=styled.h1``;
const ButtonTag=styled.button``;



