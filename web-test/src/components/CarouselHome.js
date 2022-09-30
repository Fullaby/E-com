import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
export default function CarouselHome(){
    return(
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval= {4000}
        width= {'500px'}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        stopOnHover={false}
        >
                <div>
                    <img src="https://cdn1-production-images-kly.akamaized.net/CKCWRZD9miCtrSwopdgnPUcRSIk=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/840223/original/012309700_1427772429-rowan-atkinson-150331.jpg" alt='' />
                </div>
                <div>
                    <img src="https://cdn1-production-images-kly.akamaized.net/7QPUg6195alNHO3uk_a8OrG5RAc=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1090596/original/6be0635ea79ca981f7797f84fbac3c1ay_wide-bfaafef77349a2c9101d90e3eabe182a7fd1875f.jpg" alt='' />
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                </div>
            </Carousel>
    )
}