import React, {Component} from 'react'
import {RadioButton} from 'material-ui/RadioButton'
import moment from 'moment'

export default class LayoutTemplateGetAppointment extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      navOpen: false,
      confirmationModalOpen: false,
      confirmationTextVisible: false,
      stepIndex: 0,
      appointmentDateSelected: false,
      appointmentMeridiem: 0,
      validEmail: true,
      validPhone: true,
      smallScreen: window.innerWidth < 768,
      confirmationSnackbarOpen: false
    }

    this.handleSetAppointmentMeridiem = this.handleSetAppointmentMeridiem.bind(this)
  }

  renderAppointmentTimes() {
    if (!this.state.loading) {
      const slots = [...Array(8).keys()]
      return slots.map(slot => {
        const appointmentDateString = moment(this.state.appointmentDate).format('YYYY-DD-MM')
        const t1 = moment().hour(9).minute(0).add(slot, 'hours')
        const t2 = moment().hour(9).minute(0).add(slot + 1, 'hours')
        const scheduleDisabled = this.state.schedule[appointmentDateString] ? this.state.schedule[moment(this.state.appointmentDate).format('YYYY-DD-MM')][slot] : false
        const meridiemDisabled = this.state.appointmentMeridiem ? t1.format('a') === 'am' : t1.format('a') === 'pm'
        return <RadioButton
            label={t1.format('h:mm a') + ' - ' + t2.format('h:mm a')}
            key={slot}
            value={slot}
            style={{marginBottom: 15, display: meridiemDisabled ? 'none' : 'inherit'}}
            disabled={scheduleDisabled || meridiemDisabled}/>
      })
    } else {
      return null
    }
  }

  handleSetAppointmentMeridiem(meridiem) {
    this.setState({appointmentMeridiem: meridiem})
  }

  render() {
    const {stepIndex, loading, navOpen, smallScreen, confirmationModalOpen, confirmationSnackbarOpen, ...data} = this.state
    //const contactFormFilled = data.firstName && data.lastName && data.phone && data.email && data.validPhone && data.validEmail
    return (
        <div className="appointment-section">
          <div className="appointment-container">
            <div className="appointment-item">
              <button className="appointment-button" tabIndex="0" type="button">
               <span className="appointment-sub-title">
                 <span className="appointment-circle">
                    <svg viewBox="0 0 24 24" className="appointment-circle-format">
                        <circle cx="12" cy="12" r="10"></circle>
                        <text x="12" y="16" text-anchor="middle" font-size="12" fill="#fff">1</text>
                    </svg>
                 </span>
                 Choose an available day for your appointment
                </span>
              </button>
              <div icon="1" className="appointment-date">
                <div className="appointment-date-container">
                  <div className="appointment-date-format">
                    <div className="appointment-date-select">Select a date</div>
                    <input type="text" value="2020-06-14" className="appointment-date-control"/>
                    <div>
                      <hr className="appointment-date-hr1" aria-hidden="true"/>
                      <hr className="appointment-date-hr2" aria-hidden="true"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="appointment-space">
              <span className="appointment-space-after-item"/>
            </div>
          </div>
        </div>
    )
  }
}
