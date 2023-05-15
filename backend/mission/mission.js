const MISSION_DETAILS = require('./missionDetails.json')
missionCount = 1;

const DEFAULT_PROPERTIES = {
    
    missionId: 0,
    missionLevel: 'unset',
    missionReward: 0,
    missionRequiredPoints: 0,
    missionCurrentPoints: 0,
    missionDetail: 'unset',
    missionExpiration: new Date(),
    missionAssignedEmployees: []

};

const getMissionRewardRange = function (missionLevel) {
    if (missionLevel == 'high') {
        return [17000,31600]
    } else if (missionLevel == 'medium') {
        return [9500,15800]
    } else {
        return [5000,7500]
    }
}

const getMissionRequiredPointsRange = function (missionLevel) {
    if (missionLevel == 'high') {
        return [210,220]
    } else if (missionLevel == 'medium') {
        return [130,140]
    } else {
        return [50,60]
    }       
}

const getMissionReward = function (missionLevel) {
    const missionRange = getMissionRewardRange(missionLevel)
    const missionReward = Math.random() * (missionRange[1]-missionRange[0]) | missionRange[0]

    return missionReward
}

const getMissionRequiredPoints = function (missionLevel) {
    const missionRequiredPointRange = getMissionRequiredPointsRange(missionLevel)
    const missionRequiredPoint = 
        Math.random() * (missionRequiredPointRange[1]-missionRequiredPointRange[0]) |
        missionRequiredPointRange[0]

    return missionRequiredPoint
}

const getMissionDetail = function () {
    const mission = MISSION_DETAILS[
        Math.floor(Math.random() * MISSION_DETAILS.length)
    ];

    const missionType = mission.type;

    const missionDetail = mission.value[
        Math.floor(Math.random() * mission.value.length)
    ];

    return {missionType,missionDetail}

}

class Mission {
    constructor(missionLevel) {
        this.missionId = missionCount++ || DEFAULT_PROPERTIES.missionId;
        this.missionLevel = missionLevel || DEFAULT_PROPERTIES.missionLevel;
        this.missionReward = getMissionReward(missionLevel) || DEFAULT_PROPERTIES.missionReward;
        this.missionRequiredPoints = getMissionRequiredPoints(missionLevel) || DEFAULT_PROPERTIES.missionRequiredPoints;
        this.missionCurrentPoints = DEFAULT_PROPERTIES.missionCurrentPoints;
        this.missionDetail = getMissionDetail() || DEFAULT_PROPERTIES.missionDetail;
        this.missionExpiration = DEFAULT_PROPERTIES.missionExpiration;
        this.missionAssignedEmployees = DEFAULT_PROPERTIES.missionAssignedEmployees;

    }
}

module.exports = Mission