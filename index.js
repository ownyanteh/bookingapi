import express from 'express';
import { bookingRouter } from './routes/all-routes.js';
import mongoose from 'mongoose';
import cors from "cors"
// import 'dotenv/config'

// connect database
await mongoose.connect(process.env.BOOKING_URL);
// create booking app
const booking = express();

// define routes
// booking.get('/booking', function (req, res, next) {
// console.log(req.headers);
// res.json('get all booking')
// });
booking.use(express.json());
booking.use(bookingRouter);
booking.use(cors());


// listen for incoming request
booking.listen(3030, function () {
    console.log('App is listening on port 3030!')
});

