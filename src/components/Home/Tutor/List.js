import React from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Tutor from './index'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BackArraw = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={className}
      style={style}
      onClick={onClick}
    />
  );
}

const ForwardArraw = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={style}
      onClick={onClick}
    />
  );
}

const List = props => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    pauseOnHover: true,
    nextArrow: <ForwardArraw />,
    prevArrow: <BackArraw />
  };

  return (
    <div>
      <Slider {...settings}>
        <Tutor image={'./images/1.jpg'} language={'EN'} number={357} />
        <Tutor image={'./images/2.jpg'} language={'AU'} number={357} />
        <Tutor image={'./images/3.jpg'} language={'CN'} number={357} />
        <Tutor image={'./images/4.jpg'} language={'MX'} number={357} />
        <Tutor image={'./images/2.jpg'} language={'IT'} number={357} />
        <Tutor image={'./images/4.jpg'} language={'UK'} number={357} />
        <Tutor image={'./images/1.jpg'} language={'RA'} number={357} />
        <Tutor image={'./images/3.jpg'} language={'UG'} number={357} />
        <Tutor image={'./images/3.jpg'} language={'SP'} number={357} />
        <Tutor image={'./images/1.jpg'} language={'UK'} number={357} />
        <Tutor image={'./images/2.jpg'} language={'JP'} number={357} />
        <Tutor image={'./images/4.jpg'} language={'KK'} number={357} />
      </Slider>
    </div>
  )
}

List.propTypes = {

}

export default List


