import {Schema} from "express-validator";

export const profileValidator : Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'please provide a valid ProfileId'
        }
    },
    profileUseName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileUserName must be between one and thirty two characters',
            options: {min:1, max: 32 }
        }
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },
};