import { dbService } from "../../../firebase";
import React, { useState, useEffect } from "react";
import NweetFactory from "components/airing/airing3/NweetFactory";
import Nweet from "components/airing/airing3/Nweet";

const Airing3Mention = ({ userObj }) => {
    const [nweets, setNweets] = useState([]);
    useEffect(() => {
        dbService.collection("airing3").onSnapshot((snapshot) => {
            const nweetArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            nweetArray.sort((a, b) => b.createdAt - a.createdAt);
            setNweets(nweetArray);
        });
    }, []);
    return (
        <div className="container">
            <NweetFactory userObj={userObj} />
            <div style={{ marginTop: 30 }}>
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
};
export default Airing3Mention;