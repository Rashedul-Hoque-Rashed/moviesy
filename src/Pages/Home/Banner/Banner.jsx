import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/free-mode'; 
import 'swiper/css/pagination'; 
import './Banner.css'; 
import { useEffect, useState } from 'react';
import { EffectCoverflow } from 'swiper/modules';




const Banner = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => {

              const filteredData = data.filter(movie => movie.show?.image !== null) 

                setData(filteredData)
            })
    }, [])


    return (
        <div className='slider'>
            <Swiper
                className='swiper mySwiper'
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 4,
                    slideShadows: true,
                }}
                loop={true}
                modules={[EffectCoverflow]}
            >
                {
                    data.map(movie => <SwiperSlide key={movie.show.id} className='swiper-slide'>
                    <img
                        src={movie.show?.image?.medium}
                        alt=""
                    />
                </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Banner;