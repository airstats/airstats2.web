import React, {Component} from 'react'
import {Container, Dropdown, Image, Input, Menu} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import './NavBar.scss'

class NavBar extends Component {
  state = {}

  render() {
    return (
      <Menu size='large' inverted stackable>
        <Container>
          <Menu.Item as={Link} to='/'>Home</Menu.Item>
          <Menu.Item as={Link} to='/live'>Live Flight Tracking</Menu.Item>
          <Dropdown item simple text='Statistics'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/statistics/top'>Top Airports</Dropdown.Item>
              <Dropdown.Item as={Link} to='/statistics/ifr-route'>Route Analyzer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item simple text='About'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/about'>About AirStats</Dropdown.Item>
              <Dropdown.Item as={Link} to='/about/faq'>FAQ</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item as='a' href='https://www.aircharts.org' target='_blank'>AirCharts</Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default withRouter(connect()(NavBar))
