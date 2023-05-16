import React, {useState,useEffect,Fragment} from 'react';
import Button from 'react-bootstrap/Button';

function GameRoundDashboard(props) {
    const [timeLeft] = useState(props.timeLeft)
      
      return (
        <Fragment>
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="md:shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://media.tenor.com/IGjQ2m8Wh7QAAAAi/clock.gif" alt="Modern building architecture"/>
                </div>
                <div class="p-8 text-8xl">
                    {props.timeLeft}s
                </div>
            </div>
            </div>
        </Fragment>
      )

      }

export default GameRoundDashboard;