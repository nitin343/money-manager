const INITIAL_STATE = {
    User: '',
    hidden: true,
   
}

const userReducer = (state = INITIAL_STATE , action) => {
     switch (action.type){
         case 'SET_USER':
             return{
                 ...state,
                 User: action.payload
             }
          case 'HIDDEN':
              return{
                  ...state,
                  hidden:! state.hidden
              }
         default:
             return state;
     }
}

export default userReducer;