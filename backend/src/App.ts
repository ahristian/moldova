import express, { Application } from 'express'
import morgan from 'morgan'
import DestinationRoutes from './routes/destination.routes';
import TraditionRoutes from './routes/tradition.routes';
import FoodRoutes from './routes/food.routes';
import SignupRoute from './routes/signup.route';
import LikeRoute from './routes/like.route';
// Routes
import {IndexRoutes} from './routes/index.routes';
import { SignInRouter } from './routes/sign-in.route';
import { passportMiddleware } from './lib/auth.controller';
const session = require("express-session");
import passport = require('passport');
import {SignOutRoute} from "./routes/sign-out.route";
const MemoryStore = require('memorystore')(session);


// The following class creates the app and instantiates the server
export class App {
    app: Application;

    constructor (
        private port?: number | string
    ) {

        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings () {
        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod

    private middlewares () {

        const sessionConfig  =  {
            store: new MemoryStore({
                checkPeriod: 10800
            }),
            secret:"secret",
            saveUninitialized: true,
            resave: true,
            maxAge: "3h"
        };

        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(session(sessionConfig));
        this.app.use(passport.initialize());
        this.app.use(passport.session());

    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () {

        this.app.use('/apis/',IndexRoutes);
        this.app.use('/apis/destination/', DestinationRoutes);
        this.app.use('/apis/tradition/', TraditionRoutes);
        this.app.use('/apis/food/', FoodRoutes);
        /*this.app.use('/apis/sign-in', SignInRouter);
          this.app.use("/apis/sign-out", SignOutRoute);
          this.app.use('/apis/sign-up', SignupRoute);
          this.app.use('/apis/like', LikeRoute);*/
    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully')
    }
}