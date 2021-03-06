import {
  houghAccumulation,
  computeForAllRadiusGPU,
  normalize,
  drawMaxima,
} from './hough-accumulation.gpu.optim1'

const circleDetectionGPU = (image, circleCount, threshold, minRadius, maxRadius) => {
  const mergedAccGPU = houghAccumulation(image)

  computeForAllRadiusGPU(mergedAccGPU, threshold)

  normalize(mergedAccGPU)

  drawMaxima(mergedAccGPU, circleCount)

  console.log('done')

  return mergedAccGPU.image
}

export default circleDetectionGPU
