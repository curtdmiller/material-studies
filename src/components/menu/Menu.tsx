import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'
import SVGIcon from '../SVGIcon'
import { IoIosReturnRight } from 'react-icons/io'
import { TreeItem, RenderOptions } from './MenuTypes'
import { menuTree } from './MenuTree'

const Menu = styled.ul`
  list-style: none;
  padding: 0;
`
const MenuItem = styled.li`
  ul {
    padding-left: 2rem;
    margin: 0;
  }
`
const MenuLink = styled(Link)`
  color: ${colors.gray.dark};
  font-size: 2rem;
  font-weight: 500;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const renderMenu = ({ tree, level, icons }: RenderOptions) => {
  return tree.map((branch: TreeItem) => {
    if (branch.hasChildren) {
      return (
        <MenuItem>
          {icons && level > 0 && (
            <SVGIcon fontSize="1.5em">
              <IoIosReturnRight />
            </SVGIcon>
          )}
          <MenuLink
            style={{ fontSize: level > 0 ? '1.5rem' : '2rem' }}
            to={branch.url}
          >
            {branch.title}
          </MenuLink>
          <Menu>
            {renderMenu({
              tree: branch.children,
              level: level + 1,
              icons: false
            })}
          </Menu>
        </MenuItem>
      )
    } else {
      return (
        <MenuItem>
          {icons && level > 0 && (
            <SVGIcon fontSize="1.5em">
              <IoIosReturnRight />
            </SVGIcon>
          )}
          <MenuLink
            style={{ fontSize: level > 0 ? '1.5rem' : '2rem' }}
            to={branch.url}
          >
            {branch.title}
          </MenuLink>
        </MenuItem>
      )
    }
  })
}

const MainMenu: React.FC = () => {
  return <Menu>{renderMenu({ tree: menuTree, level: 0, icons: false })}</Menu>
}

export default MainMenu
