/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import HeroImg from "../../img/heroBg.png";

const HeroBg = () => <img css={styles} src={HeroImg} alt="heroBanner" />;

const styles = css`
  width: 40%;
  height: auto;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
  @media (max-width: 875px) {
    display: none;
  }
  @media (min-width: 876px) and (max-width: 1175px) {
    right: 0;
    left: auto;
    width: 50%;
  }
`;

export default HeroBg;
