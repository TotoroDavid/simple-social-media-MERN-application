import * as api from '../api/index'
import { AUTH } from '../constants/actionTypes'

export const signIn = (formData, history) => async (dispatch) => {
    try {
        //log in the user 

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        //sign up in the user 

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}