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
                    <h3 id="text">I create fully responsive and dynamic websites with stunning user interfaces.</h3>
                    
                </div>   
                <br/>     
                <div class="pic">
                    <a href="https://jake10693.github.io/Portfolio-Websites/"><img src={require("./click_me.png")} width="200" height="150" alt=" "></img></a>
                </div>
                <br/>
                <br/>
               
                <div class="p1"> <p id="text">I am 26 years old and am currently working as well as self-emplowed as a personal trainer. I am looking for a career change to both stabalize my time spent working and the my income. 
                   web development suits my interests and personality in many ways: </p>
                </div>
               
                <br/>
                    <div class="p1">  
                        <ul>
                            <li id="text">I'v always wanted to have the opportunity to work from my computer.</li>
                            <li id="text">I can work in a field that requires or at least allows a creative aspect.</li>
                            <li id="text">I'm intrigued by how limitless the possibilties are for what kind of software can be created.</li>
                            <li id="text">The ability to work remotely will allow me to do the one thing that I've always wanted, to travel the world.</li>
                            <li id="text">It has an endless opportunity for freelance jobs.</li>
                        </ul> 
                    </div>
                    <br/>
                    <div class="p1"> <p id="text">Quite frankly, I could easily write a daily blog going on-and-on about all the in-depth reasons why I am so
                        passionate about it (In fact, I think I just found my next project).
                        But moving on from my career, I really enjoy having deep conversations 1-on-1 with people. I find small talk
                        to be redundant an and pointless. I'm always up for an adventure and a new experience. If there is anything
                        I've learned in my 26 years of existence, it's that life is short and not worth wasting on meaningless
                        encounters/experiences.
                        Life is only worth living if it's to the fullest, and I intend to continue doing that.</p>
                    </div>
            </div>
          <footer>

          </footer>
    </div>   
  )
};

export default Home;