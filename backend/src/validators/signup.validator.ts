export const signUpValidator = {

    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'confirm password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    profileUserName: {
            escape: true,
            trim: true,
            isLength: {
                errorMessage: 'UserName must be between 3 and thirty two characters',
                options: { min: 3, max: 32 }
            }
        },
};