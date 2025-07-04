import App from "@/App";
import Books from "@/pages/Books";
import BorrowSummaryTable from "@/pages/BorrowSummary";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const router =  createBrowserRouter([
    {
        path:"/",
        Component: App,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path:"books",
                Component: Home
            },
            {
                path:"add-books",
                element: <div>Add A Book</div>           
            },
            {
                path:"borrow-books"
            },
            {
                path:"borrow-summary",
                Component: BorrowSummaryTable
            },
        ]
    }
])
