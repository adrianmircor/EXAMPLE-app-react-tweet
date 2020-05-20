import React from 'react';
import {Grid} from '@material-ui/core';
import Tweet from '../Tweet'

import './ListTweets.scss'

const ListTweets = (props) => {

    const {listTweets, deleteTweet} = props;

    if(!listTweets || listTweets.length === 0){
        return (
            <div className="list-tweets-empty">
                <h2>No hay tweets</h2>
            </div>
        )
    }
    return (  
        <Grid
            container 
            spacing={3}
            className="list-tweets">
                {listTweets.map( (tuit,index) => (
                    <Grid
                        key={index}
                        item xs={4}>

                            <Tweet
                                tuit={tuit}
                                index={index}
                                deleteTweet={deleteTweet}></Tweet>

                    </Grid>
                ))}
        </Grid>
    );
}
 
export default ListTweets;