import { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//styles
import useStyles from './styles'
//component
import Input from './Input'

const Auth = () => {

    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const handleSubmit = () => { }
    const handleChange = () => { }
    /** change to sing in and sing up mode */
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        handleShowPassword(false)
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
