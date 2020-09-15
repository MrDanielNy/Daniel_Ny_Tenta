import React from 'react'
import { ContainerWrapper } from '../elements/containerElements'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'

export const Container = ({children})=> {
    return (
        <ContainerWrapper>
            <Nav />
            {children}
            <Footer />
        </ContainerWrapper> 
    )
    
}