import React from "react";
import styled from "styled-components";
import { GiFastForwardButton } from "react-icons/gi";

const Wrapper = styled.div`
    text-align: center;
    color: #102a42;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`;

const Heading = styled.h1`
    font-size: 2.8rem;
    margin-bottom: 2rem;
`;

const BtnContainer = styled.div`
    .active {
        color: #2caeba;
        border-bottom: 2px solid #2caeba;
    }
    margin-bottom: 18px;
`;

const Btn = styled.button`
    border: none;
    outline: none;
    margin: 15px 22px;
    padding: 8px;
    font-size: 20px;
    background-color: white;
    border-bottom: 2px solid transparent;
    &:hover {
        color: #2caeba;
        border-bottom: 2px solid #2caeba;
    }
`;

const InfoContainer = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    max-width: 700px;
`;

const Title = styled.h3`
    margin: 10px;
`;

const Company = styled.h3`
    margin: 10px;
    background-color: #dae2ec;
    font-size: 1rem;
`;

const Dates = styled.h4`
    margin: 10px 0 20px 0;
`;

const Icon = styled.div``;

const RightIcon = styled(GiFastForwardButton)`
    color: #2caeba;
    font-size: 1.5rem;
    margin-right: 14px;
`;

const ParaContainer = styled.div`
    text-align: left;
    display: flex;
    margin: 20px 0;
`;

const ParaText = styled.p``;

const Jobs = ({ data, index, toggle }) => {
    const { id, title, dates, duties, company } = data[index];
    return (
        <>
            <Wrapper>
                <Heading>Experience</Heading>
                <BtnContainer>
                    {data.map((e, num) => (
                        <Btn
                            key={e.id}
                            onClick={() => {
                                toggle(num);
                            }}
                            className={`${num === index ? `active` : null}`}
                        >
                            {e.company}
                        </Btn>
                    ))}
                </BtnContainer>
                <InfoContainer>
                    <Title>{title}</Title>
                    <Company>{company}</Company>
                    <Dates>{dates}</Dates>
                    {duties.map((duty, index) => {
                        return (
                            <>
                                <ParaContainer key={index}>
                                    <Icon>
                                        <RightIcon />
                                    </Icon>
                                    <ParaText>{duty}</ParaText>
                                </ParaContainer>
                            </>
                        );
                    })}
                </InfoContainer>
            </Wrapper>
        </>
    );
};

export default Jobs;
