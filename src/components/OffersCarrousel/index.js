/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'

import Offer from '../../assets/OFERTAS.png'
import { useCart } from '../../hooks/CartContext'
import apiCodeB from '../../services/api'
import format from '../../utils/FormatedCurrency'
import { Container, OfferLogo, ContainerItens, OfferImage, OfferButton } from './styles'

export function OfferCarrousel() {

    const { putInfoInCart, } = useCart()

    const [Offers, setOffers] = useState([])
    const { push } = useHistory()



    const { isFetching } = useQuery('Products', async () => {
        const { data: Offersfetch } = await apiCodeB.get('products')
        const offersProducts = Offersfetch.filter(product => product.offer).map(offer => {
            return { ...offer, formatedValue: format(offer.price) }
        })
        setOffers(offersProducts)
        //Revalidate on focus:: sair e voltar ja atualiza 
    })

    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
    ]


    return (
        <Container>
            <OfferLogo src={Offer} />
            <Carousel
                itemsToShow={4}
                style={{ width: '90%' }}
                breakPoints={breakpoints}
            >

                {Offers &&
                    Offers.map(Offer => (

                        <ContainerItens key={Offer.id}>
                            <OfferImage src={Offer.url} alt='Imagem da Oferta' />
                            <p>{Offer.name}</p>
                            <p>{Offer.formatedValue}</p>
                            <OfferButton

                                onClick={
                                    () => {
                                        putInfoInCart(Offer)
                                        push('/carrinho')
                                    }
                                }>
                                Peça agora</OfferButton>
                        </ContainerItens>

                    ))
                }

            </Carousel>
            {isFetching && <p>Carregando...</p>}
        </Container>
    )
}

