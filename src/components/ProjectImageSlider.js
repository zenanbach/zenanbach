import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import styles from "../scss/project.module.scss"

const ProjectImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    slidesToScroll: 2,
    adaptiveHeight: true,
    // variableWidth: true,
  }
  return (
    <Slider {...settings}>
      {images.map(image => {
        return (
          <div className={styles.projectGridItem}>
            <Img
              className={styles.imageItem}
              fluid={image.src}
              alt={image.title}
            />
          </div>
        )
      })}
    </Slider>
  )
}

export default ProjectImageSlider
