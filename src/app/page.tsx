import Link from "next/link"
import Button from "./Components/Button"


export default function Home(){
    
    return(
        <div className="bg-slate-400
         flex-col gap-5 h-screen flex justify-center items-center">
          <h1 className="sm:text-4xl text-4xl  font-bold">Home page</h1> 
        <div className="">
            <Link href={"about"}>
        <Button  btnName="About"/>
        </Link>
        </div>
        </div>
    )
}