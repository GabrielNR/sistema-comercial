import Head from 'next/head'
import { 
  ContentImage,
  Content,
  ContentDescription,
  Description,
  ContentPoint,
  TopRated,
  MeetEveryone,
  Cards,
  Card,
  Image,
  Text,
  Span,
} from '../../styles/city'

import { FiCoffee, FiCalendar, FiLayers } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextApiRequest } from 'next';
import { useRouter } from 'next/router';
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client'


interface CityProps {
  city: {
    slug: string;
    banner: string;
    title: string;
    description: string;
    descriptionspan: string;
    coffe_drinks: number;
    events: number;
    local100: {
      thmbnail_local: string;
      category: string;
      title_local: string;
      local: string;
      slug: string;
    }[]
  }
}

export default function city({ city }: CityProps){

  return(
    <>
      <Head>
        <title>Cidade X | Guia747</title>
      </Head>

      <Header/>

      {/* <ContentImage src={city.banner}/> */} <ContentImage src=""/>
     

      <Content>
        <ContentDescription>
          <Description>
            <h1>{city.title}</h1>
            <p>
              {city.description}
            </p>
            <span>
              {city.descriptionspan}
            </span>
          </Description>
          
          <ContentPoint>
            <ul>
              <li>
                <div>
                  <FiCoffee size={40} color='#F25D27'/>
                </div>
                <hr/>
                <p>{city.coffe_drinks}</p>
                <span>
                 comida e bebida
                </span>
              </li>

              <li>
                <div>
                  <FiCalendar size={40} color='#F25D27'/>
                </div>
                <hr/>
                <p>{city.events}</p>
                <span>
                  eventos organizados
                </span>
              </li>

              <li>
                <div>
                  <FiLayers size={40} color='#F25D27'/>
                </div>
                <hr/>
                <p>2</p>
                <span>
                  Marketing
                </span>
              </li>
              </ul> 
          </ContentPoint>
        </ContentDescription>
      </Content>

      <TopRated>
            {/* <h1>Top avaliados</h1> */}

          <Cards>
            {/* {city.local100.map(local => { */}
               {/* return ( */}
              {/* <Card key={local.thmbnail_local}> */}
                {/* <a href={`/local/${local.slug}`}> */}
                 {/* <Image src={local.thmbnail_local} /> */}
                {/* </a>  */}
                 {/* <Text>{local.title_local}</Text>  */}
                {/* <hr/>  */}
                 {/* <Span>  */}
                  {/* {local.category}  */}
                  {/* <FiCoffee size={24}/>  */}
               {/* </Span> */}
              {/* </Card>  */}
             {/* )  */}
           {/* })}  */}
            
          </Cards>
          
      </TopRated>

      <MeetEveryone>
          <h1>Conheça todos</h1>

         
          <Cards>
            {city.local100.map(local => {
               return ( 
               <Card key={local.title_local}> 
                <a href={`/local/${local.slug}`}> 
                 <Image src={local.thmbnail_local} /> 
                 </a> 
                 <Text>{local.title_local}</Text> 
                 {/* <hr/>  */}
                 <Span> 
                   {local.category} 
                   {/* <FiCoffee size={24}/>  */}
                 </Span>
               </Card> 
               ) 
             })} 
          </Cards>
      </MeetEveryone>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient() 

  const city = await prismic.query<any>([
    Prismic.predicates.at('document.type', 'cities')])

  const paths = city.results.map(city => {
    return {
      params: {
        slug: city.uid
      }
    }
  });

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const prismic = getPrismicClient() 

  const { slug } = context.params

  const response = await prismic.getByUID<any>('cities', String(slug), {})

  // console.log(JSON.stringify(response, null, 2))


  const city = {
    slug: response.uid,
    banner: response.data.banner.url,
    title: RichText.asText(response.data.title),
    description: RichText.asText(response.data.description),
    descriptionspan: RichText.asText(response.data.descriptionspan),
    coffe_drinks: response.data.coffe_e_drinks,
    events: response.data.events,
    local100: response.data.local100.map((local: { thmbnail_local: { url: any; }; category: any; title_local: any; locale: { uid: any; }; }) => {
      return {
        thmbnail_local: local.thmbnail_local.url,
        category:  RichText.asText(local.category),
        title_local: RichText.asText(local.title_local),
        slug: local.locale.uid
      }
    }),
  }

  console.log(JSON.stringify(city, null, 2))

  return {
    props: {
      city
    }
  }
}
