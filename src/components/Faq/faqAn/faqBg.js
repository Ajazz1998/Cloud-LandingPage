/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const FaqBg = ({ hidden, type }) => {
  return (
    <div
      css={styles}
      className={(hidden === type ? "" : "hidden") + " faqData"}
    >
      <p>1. Grow Your Investments Funds</p>
      <p>2. A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country.</p>
      <p>3. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>
  );
};

const styles = css`
  height: 170px;
  opacity: 1;
  margin: 10px 0;
  transition: all 600ms ease-in-out;
  overflow: hidden;
  &.hidden {
    height: 0;
    opacity: 0;
  }
  p {
    padding: 8px 14px;
  }
`;

export default FaqBg;
