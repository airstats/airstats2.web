import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {Image, Segment} from 'semantic-ui-react'

class TableStats extends Component {
  render () {
    let statsBlock = ''
    if (this.props.general.get('isLoading')) {
      statsBlock = (
        <Segment attached loading test>
          <Image alt='Loading' src='/assets/images/paragraph.png' />
        </Segment>
      )
    } else {
      statsBlock = (
        <Segment attached className='statsbox'>
          <table className='tablestats'>
            <tbody>
              <tr>
                <td>Flights Tracked</td>
                <td className='alignright'>{ this.props.general.get('isFetching') ? 'Loading...' : this.props.general.getIn(['stats', 'total']) }</td>
              </tr>
              <tr>
                <td>Airborne Flights</td>
                <td className='alignright'>{ this.props.general.get('isFetching') ? 'Loading...' : this.props.general.getIn(['stats', 'enroute']) }</td>
              </tr>
              <tr>
                <td>Departing Flights</td>
                <td className='alignright'>{ this.props.general.get('isFetching') ? 'Loading...' : this.props.general.getIn(['stats', 'departing']) }</td>
              </tr>
            </tbody>
          </table>
        </Segment>
      )
    }

    return (
      <section>
        {statsBlock}
      </section>
    )
  }
}

export default withRouter(connect()(TableStats))
