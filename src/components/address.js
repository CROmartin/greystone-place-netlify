import React from 'react'

import styles from './address.module.scss'

const Address = () => (
  <article id={'address'}>
    <h3 className={'header'}>Address:</h3>
    <span className={'name'}>Greystone Place</span>
    <span className={'address'}>512 Mohawk Road East</span>
    <span className={'cityPostal'}>Hamilton, L8V 2J2</span>
  </article>
)

export default Address
