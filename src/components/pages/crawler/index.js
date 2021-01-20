import React, { useState } from 'react';
import CrawlerResults from './crawlerResults';
import GoogleSearch from './googleSearch';
import axios from 'axios';

const WebCrawler = () => {

    const [loading, setloading] = useState(false);
    const key = 'AIzaSyADW4EkYP50x0MO91rDQSi_XZmrqT6NQ6k';
    const cse = '109df34b90543fb83';
    const count = 5;

    const [googleResults, setGoogleResults] = useState('');

    const googleSearchResults = async (searchText) => {
        setloading(true);
        setGoogleResults("")
        const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cse}&q=${searchText}&num=${count}`;
        const results = await axios.get(url).then(res => {
            setloading(false);
            return res.data.items
        });
        setGoogleResults(results)
    }

    return (
        <>
            <GoogleSearch searchResultsfn={googleSearchResults} loading={loading}/>
            <CrawlerResults results={googleResults} />
        </>
    );
}

export default WebCrawler;