import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faEye,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedSection = styled.section`
  padding: 50px 0;
  background: #f5f5f5;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  span {
    color: #2c3e50;
  }
`;

const BookBox = styled.div`
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  a {
    color: #2c3e50;
    font-size: 1.5em;
    margin: 0 10px;
    &:hover {
      color: #1b2733;
    }
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const Content = styled.div`
  h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  .price {
    font-size: 1.1em;
    margin-bottom: 20px;
    span {
      text-decoration: line-through;
      margin-left: 10px;
      color: #aaa;
    }
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: #2c3e50;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: #1b2733;
  }
`;

const ArrowButton = styled.div`
  // display: flex;
  justify-content: center;
  align-content: center;
  width: 40px;
  height: 40px;
  background: #2c3e50;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: #1b2733;
    color: white;
  }

  &.slick-prev {
    left: 10px; /* Move the previous button inward */
  }

  &.slick-next {
    right: 10px; /* Move the next button inward */
    align-items: center;
  }
`;

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowButton className={className} style={{ ...style }} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </ArrowButton>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowButton className={className} style={{ ...style }} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </ArrowButton>
  );
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FeaturedBooks = () => {
  return (
    <FeaturedSection id="featured">
      <Heading>
        <span>featured books</span>
      </Heading>
      <Slider {...sliderSettings}>
        {[1, 2, 3, 4, 5, 6].map((book, index) => (
          <BookBox key={index}>
            <Icons>
              <a href="#">
                <FontAwesomeIcon icon={faSearch} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faEye} />
              </a>
            </Icons>
            <Image>
              <img
                src={`https://via.placeholder.com/150?text=Book+${book}`}
                alt={`Book ${book}`}
              />
            </Image>
            <Content>
              <h3>Featured Book {book}</h3>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
              <Button href="#">add to cart</Button>
            </Content>
          </BookBox>
        ))}
      </Slider>
    </FeaturedSection>
  );
};

export default FeaturedBooks;
