import CardItem from "../components/CardItem";
import CarouselHome from "../components/CarouselHome";
import NavBar from "../components/NavBar";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from "react";
import { fetchProduct } from "../store/actions/index";

export default function HomePage(){
    const dispatch= useDispatch()
    const {Product}= useSelector((state)=> state)
    const [loading, setLoading]= useState(true)
    
    useEffect(()=>{
        dispatch(fetchProduct())
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    

    return(
        <div className="overflow-hidden">
            <NavBar/>
            <div className="flex justify-center pt-10">
            <CarouselHome/>
            </div>
            <div className="p-10">
            <h1 className="pl-10 pb-5 font-semibold" style={{ fontSize:'18pt'}}>Product</h1>
            <div className="overflow-x-hidden">
                <div className=" overflow-x-scroll flex flex-row box-content ">
                    {loading ? <h1>Loading...</h1> :  Product.map((el)=>{ 
                       return(<CardItem el={el}/> ) 
                    })}
              
                </div>
            </div>
            </div>
        </div>
    )
}