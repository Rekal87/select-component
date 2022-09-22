import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  Select  from "../components/Select"
import { useState } from 'react'

const Home: NextPage = () => {

  const options = [
    {label: "First", value: 1},
    {label: "Second", value: 2},
    {label: "Third", value: 3},
    {label: "Fourth", value: 4},
    {label: "Fifth", value: 5},
  ];

const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);

  return (
    <div>
      <Head>
        <title>Select Component</title>
        <meta name="description" content="A app that lets you select stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Select options={options} value={value} onChange={options => setValue(options)} />
    </div>
  )
}

export default Home
