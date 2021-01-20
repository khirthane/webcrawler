import React, {useState} from 'react';
import './crawler.scss';
import intl from '../../utils/locales/en.json';

const GoogleSearch = ({ searchResultsfn, loading}) => {

    const [searchText, setSearchText] = useState('');

    return (
        <>
            <div className="crawler-container">
                <div className="crawler">
                    <p>{intl.searchtext}</p>
                    <div className="search-container">
                        <input id="search-input" className="search-input" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                        <button className={loading ? 'btn-loading search-btn' : 'search-btn'} onClick={() => searchResultsfn(searchText)}>{intl.search}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoogleSearch;