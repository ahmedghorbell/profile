import React from 'react'
import styled from 'styled-components'


const ClientSlider = (props) => {
    const { name, img_url  } = props.item;
  return (
    <Container>
            <img src={img_url} alt={name} />
            <div className="details">
                <h1>{name}</h1>
            </div>
    </Container>
  )
}

export default ClientSlider

const Container = styled.div`
    background: #193a52;
    padding: 1.5rem 1rem;
    margin: 0 1rem;
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius : 15px ;
    img{
        width: 4rem;
        height: 4rem;
        border-radius: 50px;
        object-fit: cover;
    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }
    }
`