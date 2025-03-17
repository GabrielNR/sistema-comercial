
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
    address_state: string;
    address_city: string;
    address_road: string;
    address_neighborhood: string;
    house_number: string;
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
        <div dangerouslySetInnerHTML={{ __html: local.description_local }}/>
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
            <a href={`https://wa.me/${local.whatsapp}`} target="_blank">
              <div style={{
                background: '#64B161'
              }}>
                <FaWhatsapp />
              </div>
            </a>

            <a href={`${local.instagram}`} target="_blank">
              <div style={{
                background: '#F9373F'
              }}>
                <FaInstagram />
              </div>
            </a>

            <a href={`${local.facebook}`} target="_blank">
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

          <p>{local.address_city}, {local.address_state}</p>
          <p>{local.address_road}, {local.address_neighborhood}</p>
          <p>Nº {local.house_number}</p>
        </div>

      </Content>
      <Background src={local.banner} width={743} height={930}/>
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
    description_local: RichText.asHtml(response.data.description_local),
    open: response.data.aberto, 
    exit: response.data.fechado,
    instagram:response.data.instagram.url,
    facebook:response.data.facebook.url,
    whatsapp:response.data.whatsapp,
    phone: response.data.phone,
    address_state: RichText.asText(response.data.address_state) || null,
    address_city: RichText.asText(response.data.address_city) || null,
    address_road: RichText.asText(response.data.address_road) || null,
    address_neighborhood: RichText.asText(response.data.address_neighborhood) || null,
    house_number: RichText.asText(response.data.house_number) || null
  }

  console.log(JSON.stringify(local, null, 2))

  return {
    props: {
      local
    }
  }
}