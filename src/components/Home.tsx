import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <HomeContainer>
        <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            bgImage="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            bgImage="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            bgImage="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            bgImage="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            bgImage="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            bgImage="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title="Accessories"
            description=""
            bgImage="accessories.jpg"
            leftBtnText="Shop now"
        />
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
    height: 100vh;
`