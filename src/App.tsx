// import { Button } from "./components/ui/button";
// import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./redux/hook";

import { Outlet } from "react-router"
import { Navbar } from "./components/shared/Navbar"


function App() {
  return(
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
  // const dispatch = useAppDispatch();
  // const {count} = useAppSelector((state)=> state.counter)

  // const handleIncrement = (ammount : number) =>{
  //    dispatch(increment(ammount))
  // }
  // const handleDecrement = () =>{
  //   dispatch(decrement())
  // }
  // return (
  // <div>
  //   <h1>Counter with redux</h1>
  //   <Button onClick={()=>handleIncrement(5)}>Increament by 5</Button>
  //   <div>{count}</div>
  //   <Button onClick={handleDecrement}>Decrement</Button>
  // </div>
  // )
}

export default App
