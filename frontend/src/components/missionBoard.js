import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import MissionList from '../modals/missionList';

function MissionBoard(props) {


    return(
        <>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
            <div classNameName="p-8">
            <div className="mb-5 uppercase tracking-wide text-lg text-indigo-500 font-semibold">MISSION BOARD</div>
                        <div classNameName="flex flex-wrap">
                        {props.newMissions.map((newMission)=> {
                            return(
                            <MissionList 
                                newMission={newMission}
                                employees={props.employees}
                                assignMission={props.assignMission}/>
                                
                            )
                        })}
                        </div>
                    </div>
            </div>
        </div>
        </>
    );
};

export default MissionBoard;