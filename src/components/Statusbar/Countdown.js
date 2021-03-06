import * as React from 'react'
import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {color} from "../../theme/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
`

const Title = styled.h3`
  font-weight: 400;
  font-family: "Roboto Mono";
`
const Percentage = styled.h3`
  font-family: 'Roboto Mono', monospace;
  color: ${color.green};
  font-weight: 200;
`
const Goal = styled.div`
  display: flex;
  align-items: center;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  width: 100%;
  padding: 2px;
`
const Progress = styled.div`
  animation: load 3s normal forwards;
  box-shadow: 0 10px 40px -10px ${color.white};
  background-color: ${color.white80};
  height: 10px;
  border-radius: 10em;
  width: 8%;
  transition: all 3s;
`

const Countdown = (props) => {

    const [supply, setSupply] = useState('💰 Loading...')
    const [percentage, setPercentage] = useState('Loading...')
    const maxSupply = 1000000000


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        fetch('https://blocksum.org/api/v1/supply')
            .then(res => {
                if (!res.ok) {
                    throw Error("Progress bar could not fetch data")
                }
                return res.json()
            })
            .then(data => {
                setPercentage(`${((data.supply.current / maxSupply) * 100).toFixed(2)}%`)
                setSupply(`💰 ${numberWithCommas(data.supply.current)} XKR`)
                document.getElementById('progress').style.width = percentage
            })
            .catch(err => console.log(err))
    })

    return (
        <Wrapper>
            <TextWrapper>
                <Title id="mined">{supply}</Title>
                <Percentage id="percentage">{percentage}</Percentage>
            </TextWrapper>

            <Goal>
                <Progress id="progress"></Progress>
            </Goal>
        </Wrapper>

    )
}

export default Countdown