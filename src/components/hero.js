import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Hero = ({ title, text }) => {
  const HeroContainer = styled.div`
    padding-top: 48px;
    padding-bottom: 56px;
    text-align: center;

    h1 {
      max-width: 880px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 12px;
      font-size: 64px;
      line-height: 72px;
      font-weight: 900;
    }

    p {
      max-width: 740px;
      margin: auto;
      font-size: 21px;
      line-height: 32px;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 28px;
      padding-top: 28px;
      margin-bottom: 0;
      position: relative;

      ::before {
        position: absolute;
        content: "";
        width: 40px;
        height: 3px;
        top: 0;
        left: 50%;
        margin-left: -20px;
        background: #ff3366;
      }
    }

    a {
      color: #000;
    }
  `;

  /**
   * Render
   */

  return (
    <HeroContainer>
      <h1>{title}</h1>
      <p>{text}</p>
    </HeroContainer>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]).isRequired
};

export default Hero;
