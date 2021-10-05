import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { AddCard, Footer, Main } from '../src/components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: white;
`

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <Main/>
        <AddCard />
        <Footer />
      </Wrapper>
    </>
  )
}

export default Home
