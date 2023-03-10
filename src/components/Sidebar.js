import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import '../styles/Sidebar.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Sidebar() {
  const user = useSelector(selectUser);
  const [showMore, setShowMore] = useState(false);

  const recentItem = (topic) => (
    <div className='sidebar_recentItem'>
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div> 
  )

  return (
    <div className='sidebar'>
      <div className="sidebar_top">
        <img src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" />
        <Avatar src={user.photoURL} className='sidebar_avatar'>{user.email[0].toUpperCase()}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who's viewed your profile</p>
          <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Impression of your post</p>
          <p className='sidebar_statNumber'>2,448</p>
        </div>
      </div>

      <div className='sidebar_premium'>
        <h5>Access exclusive tools & insights</h5>
        <div className='premium_icon'>
          <img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/LIlogo.jpg" alt="premium" />
          <p>Try Premium for free</p>
        </div>
      </div>

      <div className='sidebar_saved'>
        <BookmarkIcon />
        <h5>My Items</h5>
      </div>

      <div className="sidebar_bottom">
        <p style={{marginBottom: '5px'}}>Recent</p>
        {recentItem('FrontEndDeveloper')}
        {recentItem('ReactJs')}
        {recentItem('JavaScript')}
        {recentItem('Programming')}
        {recentItem('Computerengineering')}
        <div className='sidebar_title'>
          <p>Groups</p>
        </div>
        <div className='sidebar_titleTwo'>
          <p>Events</p>
          <AddIcon className='addIcon' />
        </div>
        <p style={{color: '#0a66c2', fontWeight: '600', marginBottom: '5px'}}>Followed Hashtags</p>
        {recentItem('jobseekers')}
        {recentItem('jobs')}
        {recentItem('hiring')}
        {showMore && recentItem('realestate')}
        {showMore && recentItem('design')}
        {showMore && recentItem('personaldevelopment')}
        {showMore && recentItem('retailing')}
        {showMore && recentItem('econmoy')}
        {showMore && recentItem('innovation')}
        {showMore && recentItem('management')}
        {showMore && recentItem('studentvoices')}
        {showMore && recentItem('india')}
        <div className='sidebar_showMore' onClick={() => setShowMore(!showMore)}>
          {showMore === true ? <p>Show less</p> : <p>Show more</p>}
          {showMore === true ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      <div className='sidebar_discover'>Discover more</div>
    </div>
  )
}

export default Sidebar