import React, { useState, useEffect } from 'react'
import { Form, Button, Radio } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Calculator = (props) => {

  const [height, setHeight] = useState(1)
  const [width, setWidth] = useState(1)
  const [type, setType] = useState('')

  useEffect(() => { props.userIn === false && props.history.push('/') })

  return (
    <Form
    //    style={{ 'maxWidth': 'fit-content', 'textAlignLast': 'center', 'paddingTop': '1rem', 'paddingLeft': '5rem' }}
    >
      <Form.Field>
        <label>Ύψος σε μέτρα</label>
        <input
          type='number'
          min={1}
          max={3}
          step={0.01}
          defaultValue={1}
          required={true}
          onChange={(e) => setHeight(e.target.value)}
        //  onKeyPress={e => { e.key === 'Enter' && login() }}
        />
      </Form.Field>
      <Form.Field>
        <label>Πλάτος σε μέτρα</label>
        <input
          type='number'
          min={1}
          max={2.4}
          step={0.01}
          defaultValue={1}
          required={true}
          onChange={(e) => setWidth(e.target.value)}
        //  onKeyPress={e => { e.key === 'Enter' && login() }}
        />
      </Form.Field>
      <Form.Field>
        <b>Τύπος Κουφώματος</b>
      </Form.Field>
      <Form.Field>
        <Radio
          label='Ίσιο'
          name='radioGroup'
          value='isio'
          checked={type === 'isio'}
          onChange={() => setType('isio')}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='Πομπέ'
          name='radioGroup'
          value='pompe'
          checked={type === 'pompe'}
          onChange={() => setType('pompe')}
        />
      </Form.Field>
      <Button
      //  onSubmit={() => login()}
      >
        Calculate
    </Button>
    </Form>
  )
}

const mapStateToProps = (state) => {
  return { userIn: state.auth.userLoggedIn }
}

export default connect(mapStateToProps)(Calculator)
