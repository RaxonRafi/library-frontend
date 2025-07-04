import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IBooks } from "./type";
import type { RootState } from "@/redux/store";

interface InitialState{
    books: IBooks[]
}

const initialState:InitialState = {
    books:[
        {
            "_id":"18564545435185468",
            "title": "The Theory of Everything 4",
            "author": "Stephen Hawking",
            "genre": "SCIENCE",
            "description": "An overview of cosmology and black holes.",
            "isbn": "9780553380166",
            "copies": 5,
            "available": false,
        }
    ]
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

export const getBooks = (state: RootState) =>{
    return state.books.books
}
export const {addBook,deleteBook,updateBook} = bookSlice.actions
export default bookSlice.reducer;