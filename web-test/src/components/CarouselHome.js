import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
export default function CarouselHome(){

    let img= [
        {
            link: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/10/2/3f273857-e4c1-4a83-8b65-417befae6e17.jpg.webp?ect=3g"
        },
        {
            link: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/10/1/ccb94cd2-8d97-4ca5-a3e7-df6d6605d341.jpg.webp?ect=3g"
        }
    ]

    return(
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval= {4000}
        width= {'1200px'}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        stopOnHover={false}
        >
            {img.map((el)=>
                <div >
                    <img className='rounded-xl' src={el.link} alt='' />
                </div>
            )}
               
            </Carousel>
    )
}