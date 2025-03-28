// Imports
import { GetStaticPaths, GetStaticProps, NextApiRequest } from 'next';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client'

import { Header } from '../../components/Header'
import { getPrismicClient } from '../../services/prismic';

import { FiCoffee, FiCalendar, FiLayers } from 'react-icons/fi'
import { MdTouchApp } from "react-icons/md";
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

// Interface
interface CityProps {
  city: {
    slug: string;
    banner: string;
    title: string;
    description: string;
    descriptionspan: string;
    coffe_drinks: number;
    events: number;
    marketing: number;
    local_rated: {
      thmbnail_local: string;
      category: string;
      title_local: string;
      local: string;
      slug: string;
    }[]
    local100: {
      thmbnail_local: string;
      category: string;
      title_local: string;
      local: string;
      slug: string;
    }[]
  }
}

// Função Principal
export default function city({ city }: CityProps){

  if (Array.isArray(city.local100)) {
    const TotalLocales = city.local100.length;
    console.log(TotalLocales);
    } else {
      // console.log('nao array');
    }
  
  return(
    <>
      <Head>
        <title>Cidade {city.title} | Guia747</title>
      </Head>

      <Header/>


      <ContentImage src={city.banner}/>

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
                <p>{city.marketing}</p>
                <span>
                  Marketing
                </span>
              </li>
              </ul> 
          </ContentPoint>
        </ContentDescription>
      </Content>

      <TopRated>
            <h1>Top avaliados</h1>

          <Cards>
           {city.local_rated.map(local => { 
              return ( 
             <Card key={local.thmbnail_local}> 
               <a href={`/local/${local.slug}`}> 
                <Image src={local.thmbnail_local} /> 
               </a>  
                <Text>{local.title_local}</Text>  
               {/* <hr/>   */}
                <Span>  
                 {local.category}
                 {local.category === "Digital" ? <MdTouchApp size={22}/> : <FiCoffee size={22}/> }
                 {/*   */}
              </Span> 
             </Card>  
            )  
          })}  
            
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
    fallback: 'blocking'
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
    marketing: response.data.marketing,
    local_rated: response.data.local_rated.map((local: { thmbnail_local: { url: any; }; category: any; title_local: any; locale: { uid: any; }; }) => {
      return {
        thmbnail_local: local.thmbnail_local.url,
        category:  RichText.asText(local.category),
        title_local: RichText.asText(local.title_local),
        slug: local.locale.uid
      }
    }),
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
