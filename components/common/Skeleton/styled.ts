import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledSkeleton = styled(motion.span)`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  background-color: #dddbdd;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.3) 30%,
      rgba(#fff, 0.6) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 1s infinite;
    content: '';
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`
