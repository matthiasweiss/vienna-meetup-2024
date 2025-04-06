import * as RegisteredUserController from './RegisteredUserController'
import * as AuthenticatedSessionController from './AuthenticatedSessionController'
import * as PasswordResetLinkController from './PasswordResetLinkController'
import * as NewPasswordController from './NewPasswordController'
import * as EmailVerificationPromptController from './EmailVerificationPromptController'
import * as VerifyEmailController from './VerifyEmailController'
import * as EmailVerificationNotificationController from './EmailVerificationNotificationController'
import * as ConfirmablePasswordController from './ConfirmablePasswordController'

const Auth = {
    RegisteredUserController, 
    AuthenticatedSessionController, 
    PasswordResetLinkController, 
    NewPasswordController, 
    EmailVerificationPromptController, 
    VerifyEmailController, 
    EmailVerificationNotificationController, 
    ConfirmablePasswordController,
}

export default Auth