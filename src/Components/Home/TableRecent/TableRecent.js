import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Segment, Image} from 'semantic-ui-react'

class TableRecentFlights extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.props.history.push(`/flight/${e.iz}`)
  }

  render () {
    let recentBlock = ''
    if (this.props.recent.get('isLoading')) {
      recentBlock = (
        <Segment attached loading test>
          <Image alt='Loading' src='/assets/images/paragraph.png' />
        </Segment>
    )
    } else {
      recentBlock = (
        <Segment attached className='recentbox'>
          <table className='tablerecentflights'>
            <tbody>
              {this.props.recent.get('flights').map((flight, i) => {
                let iz = flight.get('id')
                return (
                  <tr onClick={() => this.handleClick({iz})} key={i}>
                    <td>{flight.get('callsign')}</td>
                    <td className='dep'>{flight.get('depname')}
                    ({flight.get('dep')})</td>
                    <td className='arrow'>►</td>
                    <td className='arr'>{flight.get('arrname')}
                    ({flight.get('arr')})</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Segment>
      )
    }

    return (
      <section>
        {recentBlock}
      </section>
    )
  }
}

export default withRouter(connect()(TableRecentFlights))
