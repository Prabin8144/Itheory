import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

const Menuoff = () => {
  return (
    <>
    <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen}  >
        {isOpen  = "Find Work"}
      </MenuButton>
      <MenuList>
        <MenuItem>Job Board</MenuItem>
        <p>Find your Dream job</p>
        <MenuItem>Freelansher Project</MenuItem>
        <p>An Exclusive team of Conntarct</p>
      </MenuList>
    </>
  )}
</Menu>
    </>
  )
}

export default Menuoff