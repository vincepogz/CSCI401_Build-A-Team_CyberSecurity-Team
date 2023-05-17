import React, {useState} from 'react';
import MissionAssignModal from './missionAssignModal';

function MissionList(props) {
    const [modalShow, setModalShow] = useState(false);

    return(
        <>
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl border border-2  border-indigo-600 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://cdn-icons-png.flaticon.com/512/1409/1409014.png" alt="Woman's Face" />
        <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
                {props.newMission.missionDetail.missionType}
            </p>
            <p className="text-slate-500 font-medium">
                Reward: ${props.newMission.missionReward}
            </p>
            </div>
            <button className="px-4 py-1 text-sm text-black-600 font-semibold rounded-full border bg-green-600 border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent" onClick={() => setModalShow(true)}>More Details</button>
        </div>
    </div>

    <MissionAssignModal
        employees={props.employees}
        newMission={props.newMission}
        assignMission={props.assignMission}
        clearEmployeeAssignment = {props.clearEmployeeAssignment}
        show={modalShow}
        onHide={() => setModalShow(false)}/>
    </>
    )
};

export default MissionList;