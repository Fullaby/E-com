import CardItem from "../components/CardItem";
import CarouselHome from "../components/CarouselHome";
import NavBar from "../components/NavBar";

export default function HomePage(){
    return(
        <div className="">
            <NavBar/>
            <div className="flex justify-center pt-10">
            <CarouselHome/>
            </div>
            <div className="p-10">
            <h1>Product</h1>
            <div>
                <CardItem/>
            </div>
            </div>
        </div>
    )
}