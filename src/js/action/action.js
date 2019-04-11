import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED } from "../constants/action-types";

export function addArticle(payload){
    return {
        type:ADD_ARTICLE,
        payload
    }
}

export function displayErrorMessage(payload){
    return {
        type:FOUND_BAD_WORD,
        payload
    }
}

export function getData(){
    return function(dispatch){
        return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(json=>{
            dispatch({type:DATA_LOADED,payload:json})
        })
    }
}