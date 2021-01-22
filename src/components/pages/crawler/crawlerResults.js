import { useState, useEffect } from 'react'
import axios from 'axios';
import './crawler.scss';
import intl from '../../utils/locales/en.json';

const CrawlerResults = ({ results }) => {

    const corsurl = "https://api.allorigins.win/raw?url=";
    const [searchResults, setSearchResults] = useState("");

    const loadLibraries = async (res) => {
        if (!!res) {
            return Promise.all(res.map(resultItem => {
                return axios.get(corsurl + resultItem.link)
            })).then(list => {
                res.forEach((r, resIndex) => {
                    list.forEach((l, libIndex) => {
                        if (resIndex === libIndex) {
                            r.libraries = getLinks(l.data);
                        }
                    });
                });
                setSearchResults(res)
            });
        }
        console.log("searchResults", searchResults);
    }

    const getLinks = (doc) => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(doc, "text/html");
        const scripts = [...dom.scripts];
        const links = scripts.map(res => res.src)
            .filter(url => !!url)
            .map(url => url.split('/').pop().split('#')[0].split('?')[0]);
        return [...new Set(links)];
    }

    useEffect(() => {
        loadLibraries(results);
    }, [results])

    return (
        <>
            {searchResults &&
                <div className="library-list container" id="library-list">
                    {searchResults.map(website => (
                        <div key={website.cacheId} className="row library-row">
                            <div className="col-5 library-site">
                                <h3>{website.title}</h3>
                                <p>{website.snippet}</p>
                                <a href={website.link} target="_blank">{website.link}</a>
                            </div>
                            <div className="col-4 library-urls">
                                {website.libraries.map((url, index) => (
                                    <li key={url+index}>{index+1}. {url}</li>
                                ))
                                }
                            </div>
                            <div className="col-3 count-container">
                                <span className="library-text">{intl.noOfLibaries}</span>
                                <span className="library-count">{website.libraries.length}</span>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    );

}

export default CrawlerResults;