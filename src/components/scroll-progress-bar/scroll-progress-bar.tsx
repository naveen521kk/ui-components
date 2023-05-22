import React from "react";
import { createPortal } from "react-dom";
import { useScroll, animated } from "@react-spring/web";
import styled from "styled-components";

const StyledDiv = styled(animated.div)`
  height: 4px;
  left: 0px;
  position: fixed;
  top: 0px;
  z-index: 9999;
  background: var(--nv-body-color, #fff);
`;

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {createPortal(
        <StyledDiv
          style={{
            width: scrollYProgress.to({
              range: [0, 1],
              output: ["0%", "100%"],
            }),
          }}
        />,
        document.body
      )}
    </>
  );
};

export default ScrollProgressBar;
