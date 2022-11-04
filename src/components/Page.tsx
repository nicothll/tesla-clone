import styled from 'styled-components'
import { device } from '../settings/device';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Info, { InfoConfig } from './Info';

const fadeVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.8 },
    },
    exit: {
        opacity: 0,
        transition: { ease: 'easeInOut' },
    }
}

interface PageConfig {
    title: string;
    description: string;
    bgImage: string;
    information?: InfoConfig[];
}

const Page = (props: PageConfig) => {

    const control = useAnimation()
    const [ refView, inView ] = useInView({
        threshold: 0.8,
    })

    useEffect(() => {
        if (inView) {
            control.start("visible")
        } else {
            control.start("hidden")
        };
    }, [ control, inView ])

  return (
    <SectionContainer backgroundImg={props.bgImage} ref={refView}>
        <Title
            as={motion.div}
            variants={fadeVariants}
            initial="hidden"
            animate={control}
            exit="exit"
        >
            <h1>{ props.title }</h1>
            <p>{ props.description }</p>
        </Title>
        <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate={control}
            exit="exit"
        >
            <InformationGroup>
                <MetricsWrapper>{
                        props.information && (
                            props.information.map((info, index) => (
                            <Info key={index} title={info.title} description={info.description}/>
                            ))
                        )
                    }
                </MetricsWrapper>
                <OrderButton>
                    Order Now
                </OrderButton>
            </InformationGroup>
        </motion.div>
    </SectionContainer>
  )
}

export default Page

interface Props {
    backgroundImg: string;
}

const SectionContainer = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: not-repeat;
    background-image: ${props =>`url('/images/${props.backgroundImg}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.div`
    padding-top: 15vh;
    text-align: center;
    h1 {
        font-weight: 500;
    }
`
const InformationGroup = styled.div`
    display: flex;
    margin-bottom: 46px;
    letter-spacing: 1.1px;
    font-size: 12px;
    align-items: center;
    font-weight: 500;

    @media ${device.tablet} {
        flex-direction: column;
        grid-template-columns: repeat(2, 1fr);
    }
    
`
const MetricsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.3rem;
`


const OrderButton = styled.div`
    background-color: transparent;
    border: 3px solid white;
    border-radius: 100px;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.70;
    text-transform: uppercase;
    cursor: pointer;
    margin: 8px;
    background-color: transparent;
    transition: all 0.5s ease;

    &:hover {
        background-color: white;
        color: black;
    }

    @media ${device.mobile} {
        & {
            width: 90vw;
        }
    }
`