import React, { useState, useEffect } from 'react'
import { Form, Button, Radio, Dropdown, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Popup from 'reactjs-popup'
import TotalCostPopup from './TotalCostPopup'
import { ISIO_OPTIONS } from '../Modules/isioOptions'
import { POMPE_OPTIONS } from '../Modules/pompeOptions'
import { priceCalculation } from '../Modules/priceCalculation'

const Calculator = (props) => {

  const [height, setHeight] = useState(1)
  const [width, setWidth] = useState(1)
  const [type, setType] = useState('')
  const [dimensions, setDimensions] = useState('')
  const [driver, setDriver] = useState('')
  const [axle, setAxle] = useState('')
  const [cost, setCost] = useState('')
  const [errorDisplay, setErrorDisplay] = useState(false)
  const [errors, setErrors] = useState([])
  const [totalCostPopupOpen, setTotalCostPopupOpen] = useState(false)

  useEffect(() => { props.userIn === false && props.history.push('/') })

  const resetForm = () => {
    setHeight(1)
    setWidth(1)
    setType('')
    setDimensions('')
    setDriver('')
    setAxle('')
    setErrorDisplay(false)
    setErrors([])
  }

  const calculateCost = () => {
    if (height < 1 || width < 1 || type === '' || dimensions === '' || driver === '' || axle === '') {
      setErrorDisplay(true)
      setErrors(['You have to fill in all form fields! Remember that minimum height and width is 1.'])
    } else {
      setErrorDisplay(false)
      setErrors([])
      setTotalCostPopupOpen(true)
      setCost(priceCalculation(height, width, type, dimensions, driver, axle))
    }
  }

  return (
    <>
      <Form
        style={{ 'maxWidth': 'fit-content', 'textAlignLast': 'center', 'paddingTop': '1rem', 'paddingLeft': '5rem' }}
      >
        <Form.Field>
          <label>Ύψος σε μέτρα</label>
          <input
            type='number'
            min={1}
            max={3}
            step={0.01}
            defaultValue={height}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Πλάτος σε μέτρα</label>
          <input
            type='number'
            min={1}
            max={2.4}
            step={0.01}
            defaultValue={width}
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <b>Τύπος Κουφώματος</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Ίσιο'
            name='radioGroupType'
            value='isio'
            checked={type === 'isio'}
            onChange={() => { setType('isio'); setDimensions('') }}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Πομπέ'
            name='radioGroupType'
            value='pompe'
            checked={type === 'pompe'}
            onChange={() => { setType('pompe'); setDimensions('') }}
          />
        </Form.Field>
        <Dropdown
          selection
          placeholder='Διαστάσεις'
          value={dimensions}
          disabled={type === '' && true}
          options={type === 'isio' ? ISIO_OPTIONS : type === 'pompe' ? POMPE_OPTIONS : []}
          onChange={(e, { value }) => { setDimensions(value) }}
        />
        <br></br>
        <br></br>
        <Form.Field>
          <b>Υπάρχει οδηγός;</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Ναι'
            name='radioGroupDriver'
            value={true}
            checked={driver === true}
            onChange={() => setDriver(true)}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Όχι'
            name='radioGroupDriver'
            value={false}
            checked={driver === false}
            onChange={() => setDriver(false)}
          />
        </Form.Field>
        <Form.Field>
          <b>Υπάρχει άξωνας;</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Ναι'
            name='radioGroupAxle'
            value={true}
            checked={axle === true}
            onChange={() => setAxle(true)}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Όχι'
            name='radioGroupAxle'
            value={false}
            checked={axle === false}
            onChange={() => setAxle(false)}
          />
        </Form.Field>
        <Button
          color='green'
          onClick={() => calculateCost()}
        >
          Calculate
        </Button>
        <Button
          color='red'
          onClick={() => resetForm()}
        >
          Clear
        </Button>
      </Form>
      {errorDisplay &&
        <Message negative style={{ 'textAlign': 'center' }} >
          {errors}
        </Message>
      }
      <Popup
        modal
        open={totalCostPopupOpen}
        closeOnDocumentClick={true}
        //        onClose={() => { this.setState({ imageUploadPopupOpen: false, uploadedImage: '', imageUploadButton: true }) }}
        position='top center'
      >
        <div>
          <TotalCostPopup
          //          onImageDropHandler={this.onImageDropHandler.bind(this)}
          //          imageUploadButton={this.state.imageUploadButton}
          //          handleSendEvent={this.handleSendEvent.bind(this)}
          //          uploadedImage={this.state.uploadedImage}
          />
        </div>
      </Popup>
    </>
  )
}

const mapStateToProps = (state) => {
  return { userIn: state.auth.userLoggedIn }
}

export default connect(mapStateToProps)(Calculator)
