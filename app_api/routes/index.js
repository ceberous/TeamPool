var express = require('express');
var router = express.Router();
var ctrlTeams = require('../controllers/teams');


// locations

router.get('/teams' , ctrlTeams.getAllTeams);

router.put('/teams/:teamNumber/' , ctrlTeams.teamCreate);
router.get('/teams/:teamNumber' , ctrlTeams.getTeamNumber);
router.delete('/teams/:teamNumber' , ctrlTeams.deleteTeam);


router.put('/teams/:teamNumber/:newPlayer' , ctrlTeams.playerAdd);

router.get('/getCurrentTeam/' , ctrlTeams.getCurrentTeam);
router.put('/makeCurrentTeam/' , ctrlTeams.makeCurrentTeam);
router.put('/updateCurrentTeam/:number' , ctrlTeams.updateCurrentTeam );

//router.put('/teams/:teamnumber/:newName' , ctrlTeams.playerAdd);

module.exports = router;

