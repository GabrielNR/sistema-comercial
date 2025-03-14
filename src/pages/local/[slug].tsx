
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhone
} from 'react-icons/fa'

import {
  Container,
  Header,
  Content,
  Service,
  SocialMedia,
  Background,
  ContentMedia,
  Gallery,
  Doubts,
} from '../../styles/local'


import { GetStaticPaths, GetStaticProps, NextApiRequest } from 'next';
import { useRouter } from 'next/router';
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client'

export interface LocalProps {
  local: {
    slug: string;
    banner: string;
    title: string;
    description_local: string;
    instagram: string;
    facebook: string;
    whatsapp: string;
    phone: string;
    open: string;
    exit: string;
  }
}

export default function place({ local }: LocalProps){
  return(
    <>
    <Header>
      <div>
        <a href="/">
          <img src="/logo.png" />
        </a>
      </div>
    </Header>

    <Container>
      <Content>
        <h1>{local.title}</h1>
        <p>{local.description_local}</p>
        <div>
          <h2>Atendimento:</h2>

          <Service>
            <div>
              <span>Domingo</span>
              <span>Fechado</span>
            </div>

            <div>
              <span>Segunda</span>
              <span>{local.open} - {local.exit}</span>
            </div>

            <div>
              <span>Terça</span>
              <span>{local.open} - {local.exit}</span>
            </div>

            <div>
              <span>Quarta</span>
              <span>{local.open} - {local.exit}</span>
            </div>
          </Service>

          <Service>
            <div>
              <span>Quinta</span>
              <span>{local.open} - {local.exit}</span>
            </div>

            <div>
              <span>Sexta</span>
              <span>{local.open} - {local.exit}</span>
            </div>

            <div>
              <span>Sábado</span>
              <span>{local.open} - {local.exit}</span>
            </div>
          </Service>
        </div>
        <div>
          <h2>Formas de contato:</h2>
          
          
          <SocialMedia>
            <a href={`https://wa.me/${local.whatsapp}`}>
              <div style={{
                background: '#64B161'
              }}>
                <FaWhatsapp />
              </div>
            </a>

            <a href={`${local.instagram}`}>
              <div style={{
                background: '#F9373F'
              }}>
                <FaInstagram />
              </div>
            </a>

            <a href={`${local.facebook}`}>
              <div style={{
                background: '#3B5998'
              }}>
                <FaFacebook />
              </div>
            </a>

            <div style={{
              background: '#D54344',
              width: '166px'
            }}>
              <FaPhone />
              <span>{local.phone}</span>
            </div>
          </SocialMedia>
        </div>
        <div className='Localizacao'>
          <h2>Endereço:</h2>

          <p>São Paulo, São Paulo</p>
          <p>Guilherme Gemalla, Jardim América</p>
          <p>Nº 260</p>
        </div>

      </Content>
      <Background />
    </Container>
    {/* <ContentMedia>
      <div>
      <h1>Youtube</h1>
      <iframe width="495" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>
       

        <Gallery>
          <h1>Galeria de fotos</h1>
          <div>
            <img src='/carregar.png'/>
            <img src='/carregar.png'/>
          </div>
          <div className='gallerySecondary'>
            <img src='/carregar.png'/>
            <img src='/carregar.png'/>
            <img src='/carregar.png'/>
            <img src='/carregar.png'/>
          </div>
        </Gallery>
      </ContentMedia> */}
    
      {/* <Doubts> */}
        {/* <p>Duvidas frequentes</p>
        <p>Duvidas frequentes</p>
        <p>Duvidas frequentes</p>
        <p>Duvidas frequentes</p> */}
      {/* </Doubts> */}
      
    </>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient() 

  const local = await prismic.query<any>([
    Prismic.predicates.at('document.type', 'locale')])

  const paths = local.results.map(local => {
    return {
      params: {
        slug: local.uid
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
  // console.log(slug)
  const response = await prismic.getByUID<any>('locale', String(slug), {})

  // console.log(JSON.stringify(response, null, 2))



  const local = {
    slug: response.uid,
    banner: response.data.banner_local_vertical.url,
    title: RichText.asText(response.data.title),
    description_local: RichText.asText(response.data.description_local),
    open: response.data.aberto, 
    exit: response.data.fechado,
    instagram:response.data.instagram.url,
    facebook:response.data.facebook.url,
    whatsapp:response.data.whatsapp,
    phone: response.data.phone
  }

  console.log(JSON.stringify(local, null, 2))

  return {
    props: {
      local
    }
  }
}