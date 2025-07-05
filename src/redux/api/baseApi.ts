import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath : "baseApi",
    baseQuery : fetchBaseQuery({ baseUrl: "https://library-api-weld.vercel.app/api" }),
    tagTypes: ["books"],
    endpoints : (builder)=>({
        getAllBooks: builder.query({
            query: ({ page = 1, limit = 10 }) =>
            `/books?page=${page}&limit=${limit}`,
        }),

        addBooks : builder.mutation({
            query : (bookData)=> ({
                url: "/books",
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["books"],
        }),
        editBooks : builder.mutation({
            query : ({id, ...bookData})=> ({
                url: `/books/${id}`,
                method: "PUT",
                body: bookData
            }),
            invalidatesTags: ["books"],
        }),
        deleteBooks : builder.mutation({
            query : (id)=> ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["books"],
        }),
        borrowBook: builder.mutation({
        query: (borrowData) => ({
            url: "/borrow",
            method: "POST",
            body: borrowData,
        }),
            invalidatesTags: ["books"],
        }),
        getBorrowSummary: builder.query({
        query: () => "/borrow",
        }),
    })
})

export const {useGetAllBooksQuery, useAddBooksMutation,useEditBooksMutation,useDeleteBooksMutation, useBorrowBookMutation, useGetBorrowSummaryQuery} = baseApi












