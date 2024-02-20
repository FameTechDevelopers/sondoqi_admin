import { ImagePath } from "@/Constant";
import { CarouselDataProp, CommonCarouselProp } from "@/Types/BonusUiType";
import { useState } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

const CommonCarousel: React.FC<CommonCarouselProp> = ({
  dark,
  control,
  indecators,
  caption,
  slide,
  interval,
  ride,
  fade,
  lightCaption,
  images,
  token,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = images?.map((image: CarouselDataProp) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={image?.id}
      >
        <img
          style={{ height: "350px" }}
          src={`https://onlinepayment.famewheels.com/public/posts/${token}/${image?.filename}`}
          alt="drawing-room"
          className="d-block w-100 img-responsive img-fluid object-fit-contain p-0"
        />
        {/* {caption && <CarouselCaption className={`d-none d-md-block ${lightCaption ? "carousel-opacity":""}`} captionText={item.captionText} captionHeader={item.captionHeader} />} */}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      fade={fade}
      slide={slide}
      interval={interval}
      ride={ride}
      dark={dark}
    >
      {slides}
      {control && (
        <>
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </>
      )}
      {indecators && (
        <CarouselIndicators
          items={images}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
      )}
    </Carousel>
  );
};

export default CommonCarousel;
