import styled from 'styled-components'
import { device } from '../settings/device';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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

const arrowVariant = {
    visible: {
        y: [0, 0, 5, 0, 3, 0, 0],
        transition: {
          duration: 1.9,
          repeat: Infinity
        }
    }
}

interface SectionConfig {
    title: string;
    description: string;
    bgImage: string;
    leftBtnText: string;
    rightBtnText?: string;
}

const Section = (props: SectionConfig) => {

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
            <ButtonGroup>
                <LeftButton>
                    { props.leftBtnText }
                </LeftButton>
                { props.rightBtnText &&
                <RightButton>
                    { props.rightBtnText}
                </RightButton>
                }
            </ButtonGroup>
            <DownArrowWrap>
                <ExpandMoreIcon
                    component={motion.svg}
                    variants={arrowVariant}
                    animate="visible"
                    fontSize='large'
                />
            </DownArrowWrap>
        </motion.div>
    </SectionContainer>
  )
}

export default Section

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
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 46px;
    font-weight: 600;
    letter-spacing: 1.1px;
    font-size: 12px;

    @media ${device.mobile} {
        flex-direction: column;
    }
    
`

const LeftButton = styled.div`
    background-color: black;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.70;
    text-transform: uppercase;
    cursor: pointer;
    margin: 8px;

    @media ${device.mobile} {
        & {
            width: 90vw;
        }
    }
`

const RightButton = styled(LeftButton)`
background-color: white;
color: black;
opacity: 0.70;
`
const DownArrowWrap = styled.div`
    margin-bottom: var(--tds-size--3x);
`