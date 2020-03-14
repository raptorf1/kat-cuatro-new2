import React, { useState, useEffect } from 'react'
import { Form, Button, Radio, Dropdown, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Popup from 'reactjs-popup'
import TotalCostPopup from './TotalCostPopup'
import { ISIO_OPTIONS } from '../Modules/isioOptions'
import { POMPE_OPTIONS } from '../Modules/pompeOptions'
import { THERMO_ISIO_OPTIONS } from '../Modules/thermoIsioOptions'
import { THERMO_POMPE_OPTIONS } from '../Modules/thermoPompeOptions'
import { EKSOTERIKO_OPTIONS } from '../Modules/eksoterikoOptions'
import { FILLARAKI_ALOUMINIOU_OPTIONS } from '../Modules/fillarAloumOptions'
import { FILLARAKI_POLIORETHANIS_OPTIONS } from '../Modules/fillarPolOptions'
// import { priceCalculation } from '../Modules/priceCalculation'

const Calculator = (props) => {

  const [height, setHeight] = useState(1)
  const [width, setWidth] = useState(1)
  const [fillaraki, setFillaraki] = useState('')
  const [fillarakiOptions, setFillarakiOptions] = useState('')
  const [kouti, setKouti] = useState('')
  const [koutiOptions, setKoutiOptions] = useState('')
  const [driver, setDriver] = useState('')
  const [kinisi, setKinisi] = useState('')
  const [cost, setCost] = useState('')
  const [errorDisplay, setErrorDisplay] = useState(false)
  const [errors, setErrors] = useState([])
  const [totalCostPopupOpen, setTotalCostPopupOpen] = useState(false)

  useEffect(() => { props.userIn === false && props.history.push('/') })

  const resetForm = () => {
    setHeight(1)
    setWidth(1)
    setFillaraki('')
    setFillarakiOptions('')
    setKouti('')
    setKoutiOptions('')
    setDriver('')
    setKinisi('')
    setErrorDisplay(false)
    setErrors([])
  }

  const calculateCost = () => {
    if (height < 1 || height > 6 || width < 1 || width > 6 || fillaraki === '' || fillarakiOptions === '' || kouti === '' || koutiOptions === '' || kinisi === '' || driver === '') {
      setErrorDisplay(true)
      setErrors(['Παρακαλώ συμπληρώστε όλη τη φόρμα! Το ελάχιστο ύψος και πλάτος είναι 1μ, το μέγιστο ύψος και πλάτος είναι 6μ!'])
    } else {
      setErrorDisplay(false)
      setErrors([])
      //  setCost(priceCalculation(height, width, type, dimensions, driver, axle))
      setTotalCostPopupOpen(true)
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
            max={6}
            step={0.01}
            defaultValue={height}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Form.Field>
        <br />
        <br />

        <Form.Field>
          <label>Πλάτος σε μέτρα</label>
          <input
            type='number'
            min={1}
            max={6}
            step={0.01}
            defaultValue={width}
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </Form.Field>
        <br />
        <br />

        <Form.Field>
          <b>Τύπος Φυλλαράκι</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Πολυουρεθάνης'
            name='radioGroupFillaraki'
            value='poliorethanis'
            checked={fillaraki === 'poliorethanis'}
            onChange={() => { setFillaraki('poliorethanis'); setFillarakiOptions('') }}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Αλουμινίου'
            name='radioGroupFillaraki'
            value='alouminiou'
            checked={fillaraki === 'alouminiou'}
            onChange={() => { setFillaraki('alouminiou'); setFillarakiOptions('') }}
          />
        </Form.Field>
        <Dropdown
          selection
          placeholder='Επιλογές'
          value={fillarakiOptions}
          disabled={fillaraki === '' && true}
          options={fillaraki === 'poliorethanis' ? FILLARAKI_POLIORETHANIS_OPTIONS : fillaraki === 'alouminiou' ? FILLARAKI_ALOUMINIOU_OPTIONS : []}
          onChange={(e, { value }) => { setFillarakiOptions(value) }}
        />
        <br />
        <br />
        <br />
        <br />

        <Form.Field>
          <b>Τύπος Κουτιού</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Ίσιο'
            name='radioGroupType'
            value='isio'
            checked={kouti === 'isio'}
            onChange={() => { setKouti('isio'); setKoutiOptions('') }}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Πομπέ'
            name='radioGroupType'
            value='pompe'
            checked={kouti === 'pompe'}
            onChange={() => { setKouti('pompe'); setKoutiOptions('') }}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Θερμό Ίσιο'
            name='radioGroupType'
            value='thermoIsio'
            checked={kouti === 'thermoIsio'}
            onChange={() => { setKouti('thermoIsio'); setKoutiOptions('') }}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Θερμό Πομπέ'
            name='radioGroupType'
            value='thermoPompe'
            checked={kouti === 'thermoPompe'}
            onChange={() => { setKouti('thermoPompe'); setKoutiOptions('') }}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Εξωτερικό'
            name='radioGroupType'
            value='eksoteriko'
            checked={kouti === 'eksoteriko'}
            onChange={() => { setKouti('eksoteriko'); setKoutiOptions('') }}
          />
        </Form.Field>
        <Dropdown
          selection
          placeholder='Επιλογές'
          value={koutiOptions}
          disabled={kouti === '' && true}
          options={kouti === 'isio' ? ISIO_OPTIONS : kouti === 'pompe' ? POMPE_OPTIONS : kouti === 'thermoIsio' ? THERMO_ISIO_OPTIONS : kouti === 'thermoPompe' ? THERMO_POMPE_OPTIONS : kouti === 'eksoteriko' ? EKSOTERIKO_OPTIONS : []}
          onChange={(e, { value }) => { setKoutiOptions(value) }}
        />
        <br />
        <br />
        <br />
        <br />

        <Form.Field>
          <b>Τύπος Κίνησης</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Με ιμάντα'
            name='radioGroupKinisi'
            value='imanta'
            checked={kinisi === 'imanta'}
            onChange={() => setKinisi('imanta')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Με μοτέρ'
            name='radioGroupKinisi'
            value='moter'
            checked={kinisi === 'moter'}
            onChange={() => setKinisi('moter')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Με μανιβέλα'
            name='radioGroupKinisi'
            value='manivela'
            checked={kinisi === 'manivela'}
            onChange={() => setKinisi('manivela')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Με μοτέρ μανιβέλας'
            name='radioGroupKinisi'
            value='moterManivela'
            checked={kinisi === 'moterManivela'}
            onChange={() => setKinisi('moterManivela')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Δίχως'
            name='radioGroupKinisi'
            value='dixos'
            checked={kinisi === 'dixos'}
            onChange={() => setKinisi('dixos')}
          />
        </Form.Field>
        <br />
        <br />

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
        onClose={() => { setTotalCostPopupOpen(false); setCost('') }}
        position='top center'
      >
        <div>
          <TotalCostPopup
            cost={cost}
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
