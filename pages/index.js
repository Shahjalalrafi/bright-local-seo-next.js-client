import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Header from '../Component/Header'
import Trusted from '../Component/Trusted'
import Tools from '../Component/Tools'

export default function Home() {

  return (
    <div>
      
      <Header />
      <Trusted />
      <Tools />
    </div>
  )
}
