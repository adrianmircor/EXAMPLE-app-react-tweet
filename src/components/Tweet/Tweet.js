import React from 'react';
import {Card, CardContent} from '@material-ui/core';
import DeleteTwoToneIcone from '@material-ui/icons/DeleteTwoTone'
import moment from 'moment';

import './Tweet.scss'

const Tweet = (props) => {

    const {tuit, index, deleteTweet} = props;
    const {name, tweet, time} = tuit;

    return (  
        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                    <h5>{name}</h5>
                    <DeleteTwoToneIcone
                        onClick={() => {deleteTweet(index)}}>
                    </DeleteTwoToneIcone>
                </div>
                <p>{tweet}</p>
                <div className="tweet__date-add-tweet">
                    {moment(time).format("DD/MM/YYYY HH:mm")}
                </div>
            </CardContent>
        </Card>
    );
}
 
export default Tweet;