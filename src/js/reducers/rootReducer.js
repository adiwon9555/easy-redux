import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED } from "../constants/action-types";

const initialState={
    articles:[],
    message:"",
    remoteArticles:[]
}
function rootReducer(state=initialState,action){
    if(action.type===ADD_ARTICLE){
       return Object.assign({},state,{
           articles:state.articles.concat(action.payload),
           message:""
       })
    }
    if(action.type===FOUND_BAD_WORD){
        return Object.assign({},state,{
            message:action.payload
        })
     }
     if(action.type===DATA_LOADED){
        return Object.assign({},state,{
            remoteArticles:action.payload
        })
     }
     return state;
}

export default rootReducer;