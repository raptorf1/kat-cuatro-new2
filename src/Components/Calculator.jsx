import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Calculator = (props) => {

  const [height, setHeight] = useState(1)
  const [width, setWidth] = useState(1)

  useEffect(() => { props.userIn === false && props.history.push('/') })

  return (
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
