import React from 'react'
import { connect } from 'react-redux'

import { loadSampleImage } from '../commands/loadImage'

import {
  grey50
} from 'material-ui/styles/colors'

const style = {
  label: {
    marginTop: '10px',
    marginBottom: '10px',
    color: grey50,
    fontStyle: 'italic'
  }
}

const LoadSampleButton = ({imageData, busy, loadSampleImage}) => {
  const label = busy
  ? 'patience...'
  : imageData
  ? 'ou'
  : 'On commence par...'

  return (
    <div style={style.label}>
      {label}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    imageData: state.image ? state.image.imageData : null,
    busy: state.busy
  }
}

export default connect(mapStateToProps, {loadSampleImage})(LoadSampleButton)
