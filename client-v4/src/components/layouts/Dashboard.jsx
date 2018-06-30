import React, { PureComponent } from 'react'
import { Page, Splitter, SplitterContent } from 'react-onsenui'
import NavMenu from '../NavMenu'
import AppToolbar from '../AppToolbar'

class Dashboard extends PureComponent {
  state = {
    menuIsOpen: false
  }

  openMenu = () => this.setState({ menuIsOpen: true })
  closeMenu = () => this.setState({ menuIsOpen: false })

  render() {
    return (
      <Splitter>
        <NavMenu
          closeMenu={this.closeMenu}
          openMenu={this.openMenu}
          menuIsOpen={this.state.menuIsOpen}
          navigate={this.props.navigate}
        />
        <SplitterContent>
          <Page renderToolbar={() => <AppToolbar showMenuIcon openMenu={this.openMenu} />}>{this.props.children}</Page>
        </SplitterContent>
      </Splitter>
    )
  }
}

export default Dashboard
