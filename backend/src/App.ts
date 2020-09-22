import express, { Application } from 'express'
import morgan from 'morgan'
import DestinationRoutes from './routes/destination.routes';
import ProfileRoutes from './routes/profile.routes';
import TraditionRoutes from './routes/tradition.routes';
import SaveRoutes from './routes/save.routes';
import FoodRoutes from './routes/food.routes';
import IndexRoutes from './routes/index.routes';
const session = require("express-session");
const MemoryStore = require('memorystore')(session);
import passport = require('passport');
import {SignOutRoute} from './routes/sign-out.route';
import {SignInRouter}  from './routes/sign-in.route';
import SignupRoute from './routes/sign-up.route';
import helmet from "helmet/dist";


// The following class creates the app and instantiates the server
export class App {
    app: Application;

    constructor (
        private port?: number | string
    ) {

        this.app = express()
        this.settings()
        this.middleware()
        this.routes()
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings () {
        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    private middleware () {

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
        this.app.use(helmet());
        this.app.use(session(sessionConfig));
        this.app.use(passport.initialize());
        this.app.use(passport.session());

    }


    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () {

        this.app.use('/apis/',IndexRoutes);
        this.app.use('/apis/destinations/', DestinationRoutes);
        this.app.use('/apis/traditions/', TraditionRoutes);
        this.app.use('/apis/foods/', FoodRoutes);
        this.app.use('/apis/profile/', ProfileRoutes);
        this.app.use('/apis/sign-in', SignInRouter);
        this.app.use('/apis/sign-out', SignOutRoute);
        this.app.use('/apis/sign-up', SignupRoute);
        this.app.use('/apis/save', SaveRoutes);

    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully')
    }
}