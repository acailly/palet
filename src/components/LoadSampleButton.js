import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import Icon from 'material-ui/svg-icons/image/crop-original'

import { loadSampleImage } from '../commands/loadImage'

import {
  blue100
} from 'material-ui/styles/colors'

const style = {
  button: {
    margin: '5px'
  }
}

const LoadSampleButton = ({loadSampleImage}) => {
  const loadSampleHandler = () => {
    loadSampleImage()
  }

  return (
    <div>
      <RaisedButton
        label='LOAD SAMPLE'
        backgroundColor={blue100}
        style={style.button}
        icon={<Icon />}
        onTouchTap={loadSampleHandler} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, {loadSampleImage})(LoadSampleButton)
