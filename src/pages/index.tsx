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

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <a href="https://wa.me/5521967007447"
          style={{position: "fixed", width: 60, height:60, bottom:40, right: 40, backgroundColor: "#25d366", color: "#FFF", borderRadius: 50, textAlign: "center", fontSize: 30, boxShadow: "1px 1px 2px #888", zIndex: 1000}}
          target="_blank"
        >
          <i style={{marginTop: 16}} className="fa fa-whatsapp">
          
        </i>
      </a>
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





