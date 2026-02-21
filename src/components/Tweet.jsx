import React, { useState } from 'react'
import '../css/Tweet.css'
function Tweet({content,likeCount ,createdAt,onEditTweet,tweetId}) {
    const[isediting,setIsediting]=useState(false)
    const[contentt,setContent]=useState(content)
  return (
    <div className='tweet-wrapper'>
        <div className='tweet-edit-wrapper'>
            <div className='tweet-content'>
            {
                (isediting)? <input
                value={contentt}
                type='text'
                onChange={(e)=>{
                        onEditTweet({
                            id:tweetId,
                            content:e.target.value,
                            likeCount:likeCount,
                            createdAt:createdAt
                        })
                        setContent(e.target.value)
                }}

                />:content

            }
        </div>
        <div className='edit-tweet'>
            <button onClick={()=>setIsediting(!isediting)}>{isediting? 'Save' : 'Edit'}</button>
        </div>
        </div>
        <div className='like-createdAt-wrapper'>
            <div className='likes'>
            {likeCount} like
        </div>
        <div className='created-at'>
            <b>Tweeted at :</b>{createdAt}
        </div>
        </div>
    </div>
  )
}

export default Tweet