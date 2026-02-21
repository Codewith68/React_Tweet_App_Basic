import {memo} from 'react'
import Tweet from './Tweet'
import '../css/TweetList.css'
const MemoisedTweet=memo(Tweet)
function TweetList({tweets,onEditTweet}) {
  return (
    <>
    <ul className='tweet-list'>
            {
            tweets.map((tweet,id)=>(
                <li key={id} className='tweet-like-wrapper'> 
                    <MemoisedTweet content={tweet.content}
                     likeCount={tweet.likeCount} 
                     createdAt={tweet.createdAt.toString()}
                      onEditTweet={onEditTweet}
                       tweetId={tweet.id}/>
                </li>
            ))
        }
    </ul>    
    </>
  )
}

export default TweetList