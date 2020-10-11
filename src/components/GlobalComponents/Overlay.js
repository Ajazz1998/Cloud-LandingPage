/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Overlay = () => <div css={styles} className="overlay"></div>;

const styles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #8a90ff;
`;

export default Overlay;
