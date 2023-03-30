import React from "react";
import Footer from './footer';
import {
   Carousel,
   CarouselItem,
   CarouselIndicators,
} from 'reactstrap';


function Home(){ 
   const [activeIndex, setActiveIndex] = React.useState(0);
  
    // State for Animation
    const [animating, setAnimating] = React.useState(false);
  
    // Sample items for Carousel
    const items = [
        {src: 
        'https://picsum.photos/id/10/1000/500',
        },
        {src: 
        'https://picsum.photos/id/12/1000/500',
        },
        {src: 
        'https://picsum.photos/id/11/1000/500',
        },
        {src: 
        'https://picsum.photos/id/14/1000/500',
        },
        {src: 
        'https://picsum.photos/id/15/1000/500',
        },
        {src: 
        'https://picsum.photos/id/16/1000/500',
         },
         {src: 
        'https://picsum.photos/id/17/1000/500',
         },
         {src: 
         'https://picsum.photos/id/18/1000/500',
         },
         {src: 
         'https://picsum.photos/id/19/1000/500',
         }
    ];
  
    // Items array length
    const itemLength = items.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });
    
    return(
    <>
         <div className="container ">
         <div className="row">
          <div className="col-12 ">        
             <div className=" d-block p-5">
            <Carousel previous={previousButton} next={nextButton} 
                activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
            </Carousel>
        </div >
          </div>
         </div>
      </div>

      <Footer/>
    </>
    );

}
export default Home