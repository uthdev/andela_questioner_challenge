// import express from 'express'
import express from 'express';
import meetupController from '../../controllers/meetupController';

const meetupRoute = express();

meetupRoute.route('/').get(meetupController.allMeetup);
meetupRoute.route('/:id').get(meetupController.getAMeetup);

export default meetupRoute;
