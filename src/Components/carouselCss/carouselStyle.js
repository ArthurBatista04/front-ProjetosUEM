import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  .carousel {
    height: 100%;
    .axis-horizontal {
      height: 100%;
    }
    .slider {
      height: 100%;
    }
    .slide {
      height: 100%;
      img {
        max-height: 992px;
        max-width: 2880px;
        height: 850px;
      }
    }
  }
`;
