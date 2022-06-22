import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      /*
        En Redux no se puede mutar así el estado, pero el toolkit añade una funcionalidad
        que detecta el cambio al state y produce un nuevo state inmutable, por lo que siempre 
        que usemos toolkit, es una buena práctica hacer los cambios directamente en el state
      */
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions


/* 
    Esta funcion se llama selector y nos permite seleccionar un valor del state.
*/
export const selectCount = (state) => state.counter.value

export default counterSlice.reducer
