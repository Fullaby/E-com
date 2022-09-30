import CarouselHome from "../components/CarouselHome";
import NavBar from "../components/NavBar";

export default function HomePage(){
    return(
        <div className="">
            <NavBar/>
            <div className="flex justify-center pt-10">
            <CarouselHome/>
            </div>
            <div>
            <h1>test</h1>
            </div>
        </div>
    )
}