import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client'

import { Header } from '../components/Header';


import { 
  Title, 
  Wrapper,
  Cards,
  Card,
  Image,
  Text,
  Span, 
} from '../styles/home'
// import { 
//   Wrapper,
//   Title,
//   Cards,
//   Card,
//   Image,
//   Text,
//   Span,
// } from './styles';

interface CitiesProps {
  cities: {
    slug: string;
    city: string;
    thmbnail: string;
    qtd: number;
  }[]
}

export default function Home({ cities }: CitiesProps ) {

  return (
    <>
    <Head>
      <title>Inicio | Home</title>
    </Head>
    
    <Header/>

{/* Inicio do Main */}
     <Wrapper>
        <Title>Selecione uma Cidade</Title>

         <Cards>
          {cities.map(city => {
            return (
              <Card key={city.city}>
                <Link href={`/city/${city.slug}`} key={city.city} prefetch>
                <Image src={city.thmbnail} />
                </Link>
                <Text>{city.city}</Text>
                <Span>{city.qtd} Locais</Span>
              </Card>
            )
          })}
        </Cards>
      </Wrapper>
{/* Fim do Main */}

{/* Footer */}

{/* Fim Footer */}
  </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient() 

  const response = await prismic.query<any>([
    Prismic.predicates.at('document.type', 'cities')
  ], {
    fetch: ['cities.city, cities.thmbnail', 'cities.quantidade'],
    pageSize: 100
  })

  console.log(JSON.stringify(response, null, 2))

  const cities = response.results.map(city => {
    return {
      slug: city.uid,
      city: RichText.asText(city.data.city),
      thmbnail: city.data.thmbnail.url,
      qtd: city.data.quantidade,
    }
  })

  return {
    props: {
      cities
    }
  }
}





