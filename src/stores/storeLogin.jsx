import { configureStore } from '@reduxjs/toolkit';

// Constante para inicializar el contador
const initialState = {
  identificacion: '1020736603',
  correo: '', 
  token: '',
}

// función para incrementar o decrementar el contador según el caso.
// La función tiene dos propiedades, el estado y la action.
const loginReducer = (state = initialState, action) =>{
  switch (action.type){
    case 'SET_IDENTIFICACION':
      return { ...state, identificacion: action.payload };
    case 'SET_CORREO':
      return { ...state, correo: action.payload };
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

// Constante para configurar el store de REDUX.
// Sirve para que la aplicación se actualice de manera global en sus componentes, donde sea utilizado.
const store = configureStore({
  reducer: loginReducer
});

// Exportando el store
export default store;