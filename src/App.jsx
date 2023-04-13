import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { GiStairsGoal } from "react-icons/gi";
import './prof.css';

const GoodNight = () => {
  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(false);
  const [keywords, setKeywords] = useState(['nature', 'sky', 'planet', 'galaxy']);
  const [randomIndex, setRandomIndex] = useState(0);
  const currentTime = new Date().getUTCHours() + 5.5;
    let greetings;
    if (currentTime >= 0 && currentTime < 12) {
      greetings = 'Good morning ';
      
    } else if (currentTime >= 12 && currentTime < 17) {
      greetings = 'Good afternoon';
     
    } else if (currentTime >= 17 && currentTime < 21) {
      greetings = 'Good evening';
      
    } else {
      greetings = 'Good night';
     
    }
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * keywords.length));
  }, []);
  
  const handleClick1 = () => {
    
    setShowButton1(false);
    setShowButton2(true);
  };

  const handleClick2 = () => {
    setShowButton2(false);
  };

  return (
<>  

    <div
      className="bg-dark text-black p-5"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(https://source.unsplash.com/1920x1080/?${keywords[randomIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.7,
        overflowY: 'scroll'
      }}
    >
      <h1 className='bg-light' style={{ fontSize: '30px', textAlign: 'center',position: 'absolute', top: '18%',display: showButton1 ? 'block' : 'none' }}>Welcome! {greetings}</h1>
      {showButton1 ? (
        <button className="btn btn-primary" style={{ fontSize: '22px' }} onClick={handleClick1}>
         click Here to see Deepak's portfolio
        </button>
      ) : (
          <div className='p-2' style={{ width: '100%', height: '100%' }}  > 
            
               <div  className="card bg-black  top-0 start-50 translate-middle-x" >
     <div className="d-flex justify-content-center mt-2">
    <img className="card-img-top bg-light rounded-circle" style={{ width: '10rem', borderRadius: '10px', border: '5px solid skyblue' }} src="https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966" alt="..." />
  </div>
      <div className="card-body bg-light ">
  <h5 className="card-title text-Black"><a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1&color=000000&multiline=true&width=435&lines=About+Deepak" alt="Typing SVG" /></a></h5>
  <hr className="my-2"/>
  <p className="  card-text">
    Deepak Gautam is a skilled Software Engineer with expertise in Python development, automation, game development, and ethical hacking. He is an avid open-source contributor and has a passion for learning and growing in the field of technology.
<br/><br/>
Recently, Deepak works as a Technical Consultant at Acxiom Consulting Private Limited, where he has assisted in the development and testing of Android and IOS apps. 
Deepak has extensive experience in freelancing, having worked as a Python Selenium Bot Developer on multiple projects for global clients on platforms such as Fiverr and Upwork. He has also managed software development projects, collaborated with clients for requirements, led team operations, and developed code for personal and client automation projects.
<br/><br/>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Work</th>
      <th scope="col">Video of Task</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>Twitter Tweet Schedule  Italy Project by Alberto</strong>
        <ul>
          <li>Automates scheduling of media-rich tweets on a server</li>
          <li>Allows for extended scheduling of tweets in advance</li>
          <li>Provides significant improvements in social media management and engagement on Twitter</li>
          <li>Increases brand presence and visibility on the platform</li>
          <li>Check below Alberto's testimonial</li>
        </ul>
      </td>
      <td><iframe width="560" height="315" src="https://www.youtube.com/embed/Hci3ZOz4u_A" frameborder="0" allowfullscreen></iframe></td>
    </tr>
    <tr>
      <td>
        <strong>Quora Upvoting in multiple account Italy Project by Alberto</strong>
        <ul>
          <li>Automates upvoting process for improved engagement on Quora</li>
          <li>Works with multiple Quora accounts for increased efficiency</li>
          <li>Customizable settings to ensure safe and effective use</li>
           <li>Check below Alberto's testimonial</li>
        </ul>
      </td>

      <td><iframe width="560" height="315" src="https://www.youtube.com/embed/lpX4gxys8to" frameborder="0" allowfullscreen></iframe></td>
    </tr>
    <tr>
      <td>
        <strong>Facebook auto post into page Morcco Project by Oneno Amin</strong>
        <ul>
         <li>Automates posting into a Facebook page</li>
        <li>Allows for scheduling of posts in advance</li>
        <li>Can upload and post media-rich content (images, videos, etc.)</li>
        <li>Provides detailed analytics and metrics on post performance</li>
         <li>Check below Oneno Amin's testimonial</li>    
        </ul>
      </td>
      <td><iframe width="560" height="315" src="https://www.youtube.com/embed/LUBjuWF_yUs" frameborder="0" allowfullscreen></iframe></td>
    </tr>
    <tr>
      <td>
          <strong>Google scrapper</strong>
          <ul>
            <li>Scrapes search engine results for specified keywords</li>
            <li>Uses database creation to identify potential leads for business growth</li>
            <li><a href='https://app.darakhsharayen11.repl.co/' target="_blank">Click here for a demo API</a></li>
          </ul>
        </td>

      <td><iframe width="560" height="315" src="https://www.youtube.com/embed/D2Pnt8Yfpfw" frameborder="0" allowfullscreen></iframe></td>
    </tr>
    <tr>
      <td>
        <strong>Facebook auto Post by word file</strong>
        <ul>
          <li>Automates posting using a Word file as input</li>
        <li>Allows for batch uploading of posts for scheduled release</li>
        <li>Reduces manual labor and time required for posting</li>
        <li>Can be customized for specific posting formats and requirements</li>
        </ul>
      </td>
      <td><iframe width="560" height="315" src="https://www.youtube.com/embed/42uz8hMF3w0" frameborder="0" allowfullscreen></iframe></td>
    </tr>
    <tr>
      <td>
          <strong>Discord DM bot</strong>
          <ul>
            <li>Automates sending direct messages on Discord</li>
            <li>Schedules DMs to be sent at specific times</li>
            <li>Personalizes messages with variables such as username or server name</li>
            <li>Handles message responses with customizable triggers and responses</li>
          </ul>
        </td>

      <td><iframe width="560" height="315" src="https://www.youtube.com/embed/sBMd5tduPos" frameborder="0" allowfullscreen></iframe></td>
    </tr>
    <tr>
      <td>
        <strong>Twitter Tweet like by kewwords  Israle Porject by Oren </strong>
        <ul>
          <li>Likes tweets based on specified keywords</li>
          <li>Helps in increasing engagement on Twitter</li>
          <li>Can be used to like tweets of potential customers for lead generation</li>
          <li>Allows for targeted liking of tweets for effective marketing</li>
          
        </ul>
      </td>
      <td><iframe width="560" height="315" src="https://www.youtube.com/embed/klKUFjdF2OY" frameborder="0" allowfullscreen></iframe></td>
    </tr>
    <tr>
      <td>
          <strong>Instagram Profile Scraper Bot</strong>
          <ul>
              <li>Extracts specified data from Instagram profiles</li>
              <li>Helps in finding potential leads for businesses</li>
              <li>Automatically collects and saves data to a spreadsheet</li>
              <li>Fast and efficient way to gather valuable information</li>
          </ul>
      </td>

      <td><iframe width="560" height="315" src="https://www.youtube.com/embed/-Dkwu1IjBGg" frameborder="0" allowfullscreen></iframe></td>
    </tr>
  </tbody>
</table>




<br/><br/>
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1&color=000000&multiline=true&width=435&lines=Overall%2C+Deepak's+portfolio+showcases+" alt="Typing SVG" /></a> <br/> <br/>his strong technical skills, his passion for learning and growing in the field of technology, and his ability to deliver results for clients and personal projects 
  </p>
  
  <hr className="my-1"/>
</div>

  

  
  <ul className="list-group list-group-flush">
  <li className="d-flex justify-content-center list-group-item">
    <a className="list-group-item" href="https://github.com/deepakstark01"><AiFillGithub /> Github</a>
    <a className="list-group-item" href="https://www.linkedin.com/in/deepak-gautam-14b027184/"><SiLinkedin /> Linkedin</a>
    <a className="list-group-item" href="https://leetcode.com/darakhshadeepak/"><SiLeetcode /> Leetcode</a>
  </li>
</ul>


      <div className="card-body bg-light">
          <p className="list-group-item " href="https://leetcode.com/darakhsha11/"><GiStairsGoal/>
           I want to do MAANG (Meta Facebook, Amazon, Apple, Netflix, and Google)
        </p>
        
      </div>
    </div>
            <p>
              
            </p>
         <div className="card-body bg-light testcard">
          <p className="list-group-item testmonial">
           Testmonials
        </p>
        
      </div>


<div class="card-group">
  <div class="card mcard">
    <div class="card-body">
      <div class="media">
        <div class="media-body">
          <h5 class="mt-0">Alberto Ces</h5>
          <p class="mb-1">Social Media Manager</p>
          <p class="mb-1">August 25, 2022, Alberto was DEEPAK's client</p>
          <p class="card-text">"I don't really use LinkedIn but I have made this account just to write an honest review about Deepak because of how much I was impressed with his work ethic and intelligence. I have been his client for more than a year now, hired him for multiple complex projects and I have nothing negative to say about him. He is very honest and smart and if we faced any bugs even with old projects he would always take responsibility and fix no questions asked. And it seems like he only gets better and better with time. I think he will do great things in the future and I'm honored to know such a man :)"</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="card mcard">
    <div class="card-body">
      <div class="media">
        <div class="media-body">
          <h5 class="mt-0">Oren</h5>
          <p class="mb-1">Automation Engineer</p>
          <p class="mb-1">September 1, 2022, Oren was DEEPAK's client</p>
          <p class="card-text">"Deepak created a Twitter bot for me that automatically likes tweets based on their content, and it works perfectly! He's very knowledgeable about automation and programming in general, and he's also a great communicator. I would definitely recommend him to anyone looking for automation solutions."</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Oneno Amin</h5>
      <p class="card-text">Automation Engineer</p>
      <p class="card-text">August 7, 2022, Oneno managed DEEPAK directly</p>
      <p class="card-text">"Deepak is amazing at his job! He knows his way around people, he is good with selenium and he is always willing to go the extra mile. I would definitely work with him again."</p>
    </div>
  </div>
</div>

            
          </div>

       
          
          
    
      
      )}
    </div>  </>
  );
};
export default GoodNight;