import { useState } from "react"

export default function NavBar(){
    const [search,setSearch]= useState("")

    let inputSearch=(e)=>{
        const{value}= e.target
        setSearch(value)
    }

    let handleSearch= (e)=>{
        e.preventDefault();
        
    }
    
    return(
        <nav className="w-screen bg-white shadow-md" style={{height: '80px'}}>
            <div className="pl-5 pr-5">
                <ul className="flex justify-between text-white">
                    <li className="pt-2"><img src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/tokopedia-apa-itu-startup-pengertian-cara-memulai-dan-1.png" alt="" style={{width: '200px'}}/></li>
                    <li className="pt-6 flex flex-row">
                        <form onSubmit={handleSearch} className='relative'>
                       <input onChange={inputSearch} className="pl-2 rounded-l-lg border-2 focus:outline-none focus:border-green-400" type='text' placeholder="Search item..." style={{height: '30px', width:'500px'}}/>
                       <button><img src="https://www.freepnglogos.com/uploads/search-png/search-file-vector-icon-svg-wikimedia-commons-25.png" className="bg-zinc-400 rounded-r pl-1 pr-1 pt-1 pb-1 mb-5" alt="" style={{width: '30px', height: '30px'}}/></button>
                        </form>
                    </li>
                    <li className="pt-6 flex flex-row">
                        <img style={{width: '25px', height: '25px'}} src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt=""/>
                        <h1 className="rounded-full text-black ml-1">2</h1>
                        <hr className="border-2 border-black ml-1" style={{height: '30px'}}></hr>
                        <img style={{width: '30px' , height: '30px'}} src="https://mediapublica.co/wp-content/uploads/2015/01/Mr_beans_holiday_ver2.jpg" alt="" className="rounded-full ml-1"/>
                        <h1 className="ml-1 text-black">name</h1>
                    </li>
                </ul>
            </div>
        </nav>
    )
}