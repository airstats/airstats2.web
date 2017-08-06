import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Header, Grid, Container } from 'semantic-ui-react'
import { fetchGeneral } from '../../ducks/general.js'
import { fetchRecent } from '../../ducks/recent.js'
import TableRecent from './TableRecent/TableRecent'
import TableStats from './TableStats/TableStats'
import './Home.scss'

let dispatchGeneral, dispatchRecent
const refreshInterval = 2 * 60 * 1000 // Every 2 minutes

class Home extends Component {
  componentDidMount () {
    this.props.dispatch(fetchGeneral())
    this.props.dispatch(fetchRecent())

    dispatchGeneral = setInterval(() => this.props.dispatch(fetchGeneral()), refreshInterval)
    dispatchRecent = setInterval(() => this.props.dispatch(fetchRecent()), refreshInterval)
  }

  componentWillUnmount () {
    clearInterval(dispatchGeneral)
    clearInterval(dispatchRecent)
  }

  render () {
    return (
      <section>
        <Container style={{ marginTop: '1rem' }}>
          <Grid columns={2}>
            <Grid.Column width={11}>
              <Header as='h4' attached='top' block>Recent Flights</Header>
              <TableRecent recent={this.props.recent} />
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as='h4' attached='top' block>Stats</Header>
              <TableStats general={this.props.general} />
              <Header as='h4' textAlign='right' attached='bottom' block>Since 30 April, 2017</Header>
            </Grid.Column>
          </Grid>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {general: state.get('general'), recent: state.get('recent')}
}

export default connect(mapStateToProps)(Home)
