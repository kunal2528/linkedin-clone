import React, { useState } from 'react';
import '../styles/Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Widgets() {
  const [showMore, setShowMore] = useState(false);

  const newsArticle = (heading, subtitle)=> (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>  
  )

  return (
    <div className='widgets'>
      <div className='widgets_head'>
        <div className="widgets_header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        {newsArticle('New Clone is ready', `Top news · 1231 readers`)}
        {newsArticle('Is redux too good ?', 'Code · 880 readers')}
        {newsArticle('TATA coming with new EV models', 'Auto · 451 readers')}
        {newsArticle('Are we ready to talk about AI?', 'AI · 1319 readers')}
        {showMore === true && newsArticle('India Inc bets big on upskilling', `16h ago · 841 readers`)}
        {showMore === true && newsArticle('Carbon emisison hit record in 2022', `2h ago · 41 readers`)}
        {showMore === true && newsArticle("This week's top newsletters", `15min ago · 10.1k readers`)}
        {showMore === true && newsArticle("Where did all the big screens go?", `11h ago · 232 readers`)}
        {showMore === true && newsArticle("Viral fever is dangerous", `11h ago · 232 readers`)}
        {showMore === true && newsArticle("Small town shopping favourites", `6h ago · 611 readers`)}
        <div className='widgets_showMore' onClick={() => setShowMore(!showMore)}>
          {showMore === true ? <p>Show less</p> : <p>Show more</p>}
          {showMore === true ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      <div className='widgets_footer'>
        <div className='footer_topics'>
          <p>About</p>
          <p>Accessibility</p>
          <p>Help Center</p>
        </div>
        <div className='footer_topics'>
          <p style={{display: 'flex', alignItems: 'center'}}>Privacy & Terms <ExpandMoreIcon /></p>
          <p>Ad Choices</p>
        </div>
        <div className='footer_topics'>
          <p>Advertising</p>
          <p style={{display: 'flex', alignItems: 'center'}}>Business Services <ExpandMoreIcon /></p>
        </div>
        <div className='footer_topics'>
          <p>Get the LinkedIn app</p>
          <p>More</p>
        </div>
      </div>
      <div className='trademark'>
        <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" alt="logo" />
        <h5>LinkedIn Corporation © 2023</h5>
      </div>
    </div>
  )
}

export default Widgets;