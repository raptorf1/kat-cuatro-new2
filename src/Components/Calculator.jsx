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

  const [width, setWidth] = useState(1)
  const [height, setHeight] = useState(1)
  const [fillaraki, setFillaraki] = useState('')
  const [fillarakiOptions, setFillarakiOptions] = useState('')
  const [kouti, setKouti] = useState('')
  const [koutiOptions, setKoutiOptions] = useState('')
  const [kinisi, setKinisi] = useState('')
  const [driver, setDriver] = useState('')
  const [remote, setRemote] = useState('')
  const [color, setColor] = useState('')
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
    setKinisi('')
    setDriver('')
    setRemote('')
    setColor('')
    setErrorDisplay(false)
    setErrors([])
  }

  const calculateCost = () => {
    if (height < 1 || height > 6 || width < 1 || width > 6 || fillaraki === '' || fillarakiOptions === '' || kouti === '' || koutiOptions === '' || kinisi === '' || driver === '' || remote === '' || color === '') {
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
      <Form style={{ 'maxWidth': 'fit-content', 'textAlignLast': 'center', 'paddingTop': '1rem', 'paddingLeft': '5rem' }}>

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
            label='Με ιμάντα μειωτήρα'
            name='radioGroupKinisi'
            value='dixos'
            checked={kinisi === 'imantaMeiotira'}
            onChange={() => setKinisi('imantaMeiotira')}
          />
        </Form.Field>
        <br />
        <br />

        <Form.Field>
          <b>Τύπος οδηγού</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Φτερό 6+2'
            name='radioGroupDriver'
            value='ftero 6+2'
            checked={driver === 'ftero 6+2'}
            onChange={() => setDriver('ftero 6+2')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Φτερό 10+2'
            name='radioGroupDriver'
            value='ftero 10+2'
            checked={driver === 'ftero 10+2'}
            onChange={() => setDriver('ftero 10+2')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Φτερό 12+'
            name='radioGroupDriver'
            value='ftero 12+'
            checked={driver === 'ftero 12+'}
            onChange={() => setDriver('ftero 12+')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Δίχως'
            name='radioGroupDriver'
            value='dixos'
            checked={driver === 'dixos'}
            onChange={() => setDriver('dixos')}
          />
        </Form.Field>
        <br />
        <br />

        <Form.Field>
          <b>Υπάρχει τηλεχειρισμός;</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Ναι'
            name='radioGroupRemote'
            value={true}
            checked={remote === true}
            onChange={() => setRemote(true)}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Όχι'
            name='radioGroupRemote'
            value={false}
            checked={remote === false}
            onChange={() => setRemote(false)}
          />
        </Form.Field>
        <br />
        <br />

        <Form.Field>
          <b>Χρώμα</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Λευκό'
            name='radioGroupColor'
            value='white'
            checked={color === 'white'}
            onChange={() => setColor('white')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='RAL'
            name='radioGroupColor'
            value='ral'
            checked={color === 'ral'}
            onChange={() => setColor('ral')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='MAT'
            name='radioGroupColor'
            value='mat'
            checked={color === 'mat'}
            onChange={() => setColor('mat')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Sample'
            name='radioGroupColor'
            value='sample'
            checked={color === 'sample'}
            onChange={() => setColor('sample')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Ξύλου'
            name='radioGroupColor'
            value='wood'
            checked={color === 'wood'}
            onChange={() => setColor('wood')}
          />
        </Form.Field>
        <br />

        {errorDisplay &&
          <Message negative >
            {errors}
          </Message>
        }

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
