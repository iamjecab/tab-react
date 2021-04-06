import React, { useState, useEffect } from "react";

import GlobalStyles from "./Components/GlobalStyles";
import Loading from "./Components/Loading";
import Jobs from "./Components/Jobs";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const url = "https://course-api.com/react-tabs-project";

    const toggle = (num) => {
        setIndex(num);
    };

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const jobs = await response.json();
            setData(jobs);
            // console.log(jobs);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <GlobalStyles />
            {isLoading ? (
                <Loading />
            ) : (
                <Jobs data={data} index={index} toggle={toggle}></Jobs>
            )}
        </>
    );
}

export default App;
