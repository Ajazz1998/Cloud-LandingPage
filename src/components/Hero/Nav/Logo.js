/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Logo = () => <h2 css={styles}>Cloud Service</h2>;

const styles = css`
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
  color: #fff;
  cursor: pointer;
`;

export default Logo;
