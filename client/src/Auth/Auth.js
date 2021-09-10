import { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
//styles    
import useStyles from './styles'
//component
import Input from './Input'
import Icon from './Icon'

const Auth = () => {

    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const handleSubmit = () => { }
    const handleChange = () => { }
    /** change to sing in and sing up mode */
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        handleShowPassword(false)
    }
    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({ type: 'AUTH', data: { result, token } })

            /**redirect after login to home page */
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = (error) => {
        console.log(error)
        console.log(`Google Sing In was unsuccessful. Try again later`)
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{
                    isSignUp ? 'Sign Up' : 'Sing In'
                }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="FirstName" label='First Name' handleChange={handleChange} autoFocus half />
                                    <Input name="FirstName" label='First Name' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label='Email Address' handleChange={handleChange} type="email" />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId='997321988146-3ferjf8et0b1rnbp5jp66fqq0gb4f5t7.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color='primary'
                                fullWidth onClick={renderProps.onClick}
                                startIcon={<Icon />}
                                variant='contained'
                            >
                                Google Sing In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode} >
                                {isSignUp ? 'Already have and account? Sign In' : 'Do not have an account? sing up'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
