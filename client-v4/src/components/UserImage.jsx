import React from 'react'
import PropTypes from 'prop-types'
import '../styles/UserImage.css'

const UserImage = ({ size }) => {
  return <img className="UserImage" id="UserImage" src={`http://placekitten.com/${size}/${size}`} alt="user" />
}

UserImage.propTypes = {
  size: PropTypes.string.isRequired
}

export default UserImage
