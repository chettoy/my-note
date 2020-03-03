import PropTypes from 'prop-types'
import { NProgress } from '@tanem/react-nprogress'
import React from 'react'
import Bar from './Bar'
import Container from './Container'
import './index.css'
import Spinner from './Spinner'

const OriginalDesign = ({isAnimating}) => (
  <NProgress isAnimating={isAnimating}>
    {({ isFinished, progress, animationDuration }) => (
      <Container
        isFinished={isFinished}
        animationDuration={animationDuration}
      >
        <Bar progress={progress} animationDuration={animationDuration} />
        <Spinner />
      </Container>
    )}
  </NProgress>
)

OriginalDesign.propTypes = {
  isAnimating: PropTypes.bool.isRequired
}

export default OriginalDesign
