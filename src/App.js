import React from 'react';
import './App.css';

function App() {
  return (
    <body>
      <div className="App">
        
        <h1>Procrastination Through Music</h1>
          <div class="content">
                <div id="About" class="content-box"> 
                    <h2> About</h2>
                    <img alt="procrastinationlayer" src="https://spunout-images.s3.amazonaws.com/articles/_articleHeader/procrastination.jpg?mtime=20180724024302" 
                          height="300px" width="550px"></img>
                    <p> In general, getting distracted by the use of technology is easy and can
                        add to the never ending cycle of procrastination. One example that is not
                        so obvious is music. It definitely depends on the person and the type of music,
                        but it can still cause people to postpone their work if they are jamming out to
                        their favorite songs.
                    </p>
                    <p> I will be using The Stack model to illustrate the different layers
                        of music. 
                    </p>
                </div>

                <div id="Layer1" class="content-box">
                    <h2>User</h2>
                    <p> In the User layer, the person who is listening to the music while doing their 
                        work is the user.
                    </p>
                    <img alt="user" src="https://ak5.picdn.net/shutterstock/videos/6596495/thumb/1.jpg"
                         height="300px" width="550px"></img>
                </div>

                <div id="Layer2" class="content-box">
                    <h2>Interface</h2>
                    <p> The tool that the User is using to listen to music is the Interface.
                        This can include mp3 players, ipods, phones, ipads, computers, and other less
                        technical items like a cd player, cassette player, and record player. 
                    </p>
                    <img alt="interface" src="https://cdn1.imggmi.com/uploads/2019/9/24/1c410dcd97b772b3c6c43698f810c186-full.jpg"></img>
                </div>

                <div id="Layer2" class="content-box">
                  <h2>Address</h2>
                  <p>Focusing more on the digital age, the music apps based through the internet
                        are considered to be the Address in which music content is gathered and streamed.
                        For example, Spotify, Apple Music, Pandora, SoundCloud, etc.
                  </p>
                  <img alt="address" height="300px" width="550px"
                      src="https://cdn1.imggmi.com/uploads/2019/9/24/df99fd56ba18f8239146753b16e1753c-full.jpg"></img>
                </div> 

                <div id="Layer4" class="content-box">
                    <h2>City</h2>
                    <p>The City level is the internet which connects users to music media around the world.
                        It can also connect content creators, musicians, and consumers/listeners to each
                        other to share and enjoy music.
                    </p>
                    <img alt="city" height="300px" width="550px"
                          src="https://cdn1.imggmi.com/uploads/2019/9/24/789b96476c937b0e76e12d0e2eb74a05-full.jpg"></img>
                </div>

                <div id="Layer5" class="content-box">
                    <h2>Cloud</h2>
                    <p> The Cloud is the huge databases of each music app that collects all of this music
                        data. It stores the information for people so they can stream the music over the 
                        internet.
                    </p>
                    <img alt="cloud" height="300px" width="550px"
                          src="https://cdn1.imggmi.com/uploads/2019/9/24/3a03e50925dd4d28d188549a6fe1b5f8-full.jpg"></img>
                </div>
                
                <div id="Layer6" class="content-box">
                  <h2>Earth</h2>
                  <p>The Earth is the ground level where music is made. Taking it back, it can include
                      the various of instruments that create music, but it can also include the musicians
                      who write the songs we listen to.
                  </p>
                  <img alt="earth" height="300px" width="550px"
                        src="https://cdn1.imggmi.com/uploads/2019/9/24/d4901cb553ac1cf33cdf257b4c896072-full.jpg"></img>
                </div>
                    
          </div>
            
      </div>
    </body>
  );
}

export default App;
