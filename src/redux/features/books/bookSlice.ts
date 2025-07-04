import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IBooks } from "./type";
// import type { RootState } from "@/redux/store";

interface InitialState{
    books: IBooks[]
}

const initialState:InitialState = {
    books:[]
}
const bookSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        addBook: (state, action : PayloadAction<IBooks>) =>{
            const bookData = {
                ...action.payload,
                available:true
            }
            state.books.push(bookData);
        },
        deleteBook: (state, action : PayloadAction<string>)=>{
            state.books = state.books.filter((book) => book._id !== action.payload);
        },
        updateBook: (state, action : PayloadAction<{ id: string; data: Partial<IBooks> }>)=>{
            const { id, data } = action.payload;
            const index = state.books.findIndex((book)=>book._id === id);
            if(index != -1){
                state.books[index]= {
                     ...state.books[index],
                    ...data,
                }
            }
        }
    }
})

export const {addBook,deleteBook,updateBook} = bookSlice.actions
export default bookSlice.reducer;