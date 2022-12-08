import React from 'react'
import DH from "../assets/DH.png"
import { useContextGlobal } from './utils/global.context';

const Footer = () => {
  const {state} = useContextGlobal();

  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src={DH} alt='DH-logo' />
    </footer>
  )
}

export default Footer
