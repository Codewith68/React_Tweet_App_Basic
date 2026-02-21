import { useState,useCallback, memo } from 'react'
import AddTweet from './AddTweet'
import TweetList from './TweetList'

const MemoisedAddTweet=memo(AddTweet)
function Tweeter() {

    const initialDummyTweets = [
        {
            id:1,
            content:"we have a new tweeter called as thred",
            likeCount:10,
            createdAt:new Date()
        },
        {
            id:2,
            createdAt:new Date(),
            content:"we have new name your",
            likeCount:16
        },
        {
            id:3,
            createdAt:new Date(),
            content:"we have a new video game",
            likeCount:19
        },
        {
            id:4,
            createdAt:new Date(),
            content:"we have a new tweeter called  instagram and you know what it is",
            likeCount:17
        },
        {
            id:5,
            createdAt:new Date(),
            content:"we have a new time here bro ",
            likeCount:15
        },
    ]
    const [tweets, setTweets] = useState(initialDummyTweets)


    const handelAddTweet = useCallback((text) => {
        let nextId=(tweets.length>0)?tweets[tweets.length-1].id+1:1 
        setTweets([...tweets, {
            id:nextId,
            content:text,
            likeCount:Math.floor(Math.random()*10),
            createdAt:new Date()
        }])
    },[tweets])

    const handelEditTweet=useCallback((tweet)=>{
        setTweets(tweets.map((currentTweet)=>{
            if(currentTweet.id===tweet.id){
                return tweet
            }
            return currentTweet
        }))
    },[tweets])

    const sortTweet= useCallback(() => {
        tweets.sort((a, b) => {
            return b.createdAt.getTime() - a.createdAt.getTime();
        });
        setTweets([...tweets]);
    },[tweets])
  return (
    <>
    <div>
        <MemoisedAddTweet onAddTweet={handelAddTweet} />
        <button onClick={ sortTweet}>
            Sort Tweet By Created At
        </button>
        <TweetList tweets={tweets} onEditTweet={handelEditTweet}/>
    </div>

    </>
  )
}

export default Tweeter 
