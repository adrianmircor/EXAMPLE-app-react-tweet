import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets";

import { Container, Snackbar } from "@material-ui/core";
import { TWEETS_STORAGE } from "./utils/constants";

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });

  const [listTweets, setListTweets] = useState([]);
  const [execute, setExecute] = useState(false);

  useEffect(() => {

    let lista_Tweets_LS = localStorage.getItem(TWEETS_STORAGE);

    if(!lista_Tweets_LS){
      lista_Tweets_LS = localStorage.setItem(TWEETS_STORAGE, JSON.stringify([]));
    }

    const lista_Tweets = JSON.parse(lista_Tweets_LS);
    setListTweets(lista_Tweets);
    console.log("Recupera valores del LS");
    setExecute(false);
    console.log("---");
  }, [execute]);

  const deleteTweet = (index) => {
    listTweets.splice(index, 1);
    setListTweets(listTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(listTweets));
    setExecute(true);
  };

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header></Header>

      <SendTweet
        setToastProps={setToastProps}
        listTweets={listTweets}
      ></SendTweet>

      <ListTweets
        listTweets={listTweets}
        deleteTweet={deleteTweet}
      ></ListTweets>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      ></Snackbar>
    </Container>
  );
}

export default App;
