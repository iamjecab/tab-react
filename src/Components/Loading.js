import React from "react";
import styled from "styled-components";

const Text = styled.h1`
    font-size: 2.5rem;
    margin: 30px 0;
    text-align: center;
`;

const Loading = () => {
    return (
        <>
            <Text>Loading...</Text>
        </>
    );
};

export default Loading;
