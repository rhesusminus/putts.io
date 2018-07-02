import React from 'react'
import { Page, SplitterSide, List, ListItem } from 'react-onsenui'

const NavMenu = ({ closeMenu, openMenu, menuIsOpen, navigate }) => {
  const navMenuItems = [
    {
      id: 1,
      title: 'Games',
      url: ''
    },
    {
      id: 2,
      title: 'Profile',
      url: 'profile'
    },
    {
      id: 3,
      title: 'Logout',
      url: '/signout'
    }
  ]

  const handleMenuClick = url => {
    closeMenu()
    navigate(url)
  }

  return (
    <SplitterSide
      side="right"
      width={150}
      collapse={true}
      swipeable={true}
      isOpen={menuIsOpen}
      onClose={closeMenu}
      onOpen={openMenu}
    >
      <Page>
        <List>
          {navMenuItems.map(it => (
            <ListItem key={it.id} onClick={() => handleMenuClick(it.url)}>
              {it.title}
            </ListItem>
          ))}
        </List>
      </Page>
    </SplitterSide>
  )
}

export default NavMenu
