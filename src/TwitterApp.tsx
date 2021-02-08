import React, { useState } from 'react'
import { TwitCard } from './components/twit-card/TwitCard';
import { InputSearch } from './components/input-search/InputSearch';
import TweetButton from './components/twitter-button/TweetButton';

 export const TwitterApp = () => {

    const [twits, setTwits] = useState<string[]> (['Jhonatan',  'Carolaine', 'Janina', 'Alvarito', 'Kay', 'Ruth', 'Diana', 'Isaac']);

    const getTwits = async()=>{
        const url="";
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
    }

    getTwits();

    return (
        <div>
            <div className="input-container">
                <InputSearch />
                <TweetButton />
            </div>
            <div className="row container">
                    {
                        twits.map( twit => {
                            return <div className="col-sm-4" data-align="center" key={ twit + '_col' }> <TwitCard twit= { twit } /></div>
                        })
                    }
            </div>
        </div>

    )
}
