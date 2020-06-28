import React from "react";
import './Home.css'
function Home() {
  return (
    <div class="bg-text">
            <header>
            Jacob Carver
        </header>
        <div class="topnav">
            <a class="inactive" href="https://jake10693.github.io/Portfolio/">About Me</a>
            <a class="active" href="https://jake10693.github.io/Portfolio-Websites/" alt="pw">Portfolio</a>
            <a class="active" href="https://jake10693.github.io/Contact-Info/" alt='ci'>Contact</a>
        </div>
        
                <br/>
                <hr/>
            <div id="center">
                <div class="header">
                    <h2 id="text">Hello, I'm a Full-Stack Web Developer</h2>
                    <h3 id="text">
                        I create fully responsive and dynamic websites with fun and interactive user interfaces. Click the spinning image to see my work!
                    </h3>
                    
                </div>   
                <br/>     
                <div class="row">
                    <div class="col-lg"></div>
                    <div class="col-lg">
                    <a href="https://github.com/jake10693"><img src={require("./Github.png")} width="125" height="100" alt=" " class="pic" id="ithub"></img></a>
                    <a href="https://jake10693.github.io/Portfolio-Websites/"><img src={require("./click_me.png")} width="125" height="100" alt=" " class="pic" id="clickme"></img></a>
                    <a href="https://www.linkedin.com/in/jacob-carver-125b81191/"><img src={require("./LinkedIn.png")} width="125" height="100" alt=" " class="pic" id="linkedin"></img></a>
                    </div>
                    <div class="col-lg"></div>
                </div>
                <br/>
                <br/>
               
                <div class="p1"> <p id="text">Hello, I am a software developer with a strong passion for solving problems and the ambition to change the world for the better. I am versed in the complexity of full-stack web development, I thoroughly enjoy both working in front-end and back-end development. I believe that organization and communication is the number one key for success in building projects with a team. It is for this reason that my next endeavor into my software engineering education is to learn the ins-and-outs of quality assurance and unit testing to improve workflow and productivity. </p>
                </div>
               
                <br/>
                    <div class="p1">  
                        <ul>
                            <li id="text">I'v always wanted to have the opportunity to make the world a better place.</li>
                            <li id="text">I enjoy being creative.</li>
                            <li id="text">I enjoy working alone, but I prefer working in an effective team environment.</li>
                            <li id="text">I like working from computers.</li>
                            <li id="text">I plan to become a seniore software engineer in 5 years.</li>
                            <li id="text">I never want to stop learning and growing.</li>
                        </ul> 
                    </div>
                    <br/>
                    <div class="p1"> <p id="text"></p>
                    </div>
            </div>
          <footer>

          </footer>
    </div>   
  )
};

export default Home;