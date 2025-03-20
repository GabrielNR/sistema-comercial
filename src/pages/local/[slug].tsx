
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
  Site,
  Background,
  ContentMedia,
  Gallery,
  ContentLeft,
  Doubts,
} from '../../styles/local'


import { GetStaticPaths, GetStaticProps, NextApiRequest } from 'next';
import { useRouter } from 'next/router';
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client'
import { Browser } from 'phosphor-react';

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
    site: string;
    open: string;
    exit: string;
    photo01: string,
    photo02: string,
    photo03: string,
    photo04: string,
    photo05: string,
    photo06: string,
    address_state: string;
    address_city: string;
    address_road: string;
    address_neighborhood: string;
    house_number: string;
    video: string;
    gallery: {
      photo01: string;
      photo02: string;
      photo03: string;
      photo04: string;
      photo05: string;
      photo06: string;
    }[]
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
            {local.whatsapp === null ? <></> :
              <>
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
                </>
              }

              <div style={{
                background: '#D54344',
                width: '166px'
              }}>
                <FaPhone />
                <span>{local.phone}</span>
              </div>
            </SocialMedia>
            
            {local.site === null ? <div/> :
              <Site>
                <div>
                  <Browser />
                  <a href={local.site} target="_blank">Site Profissional</a>
                </div> 
              </Site>
            }
          </div>

          <div className='Localizacao'>
            
            <h2>Endereço:</h2>
            {local.address_city === null ? <div /> :
              <p>{local.address_city}, {local.address_state}</p>
            }
            {local.address_road === null ? <div/> :
              <>
                <p>{local.address_road}, {local.address_neighborhood}</p>
                <p>Nº {local.house_number}</p>
              </>
            }
          </div>
          
          {local.video === null ? <div/> :
            <div className="youtube">
              <iframe width="495" height="315"
                src={`https://www.youtube.com/embed/${local.video}`}>
              </iframe>
            </div>
           }
      </Content>

      <ContentLeft>
        <Background src={local.banner} width={743} height={930}/>
      
        <ContentMedia>
            {local.gallery[0].photo01 === null ? <div/> :
              <Gallery>
                <h1>Galeria de fotos</h1>
                {local.gallery.map(local => {
                  return (
                    <>
                      <div>
                        <img src={local.photo01}/>
                        <img src={local.photo02}/>
                        
                      </div>
                      <div className='gallerySecondary'>
                        <img src={local.photo03}/>
                        <img src={local.photo04}/>
                        <img src={local.photo05}/>
                        <img src={local.photo06}/>
                      </div>
                    </>
                  )
                })}
              </Gallery>
            }
        </ContentMedia> 
      </ContentLeft>
    </Container>
    
    
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

  console.log(JSON.stringify(response, null, 2))



  const local = {
    slug: response.uid,
    banner: response.data.banner_local_vertical.url || null,
    title: RichText.asText(response.data.title),
    description_local: RichText.asHtml(response.data.description_local),
    open: response.data.aberto, 
    exit: response.data.fechado,
    instagram:response.data.instagram.url || null,
    facebook:response.data.facebook.url || null,
    whatsapp:response.data.whatsapp || null,
    phone: response.data.phone || null,
    site: response.data.professional_website.url || null,
    address_state: RichText.asText(response.data.address_state) || null,
    address_city: RichText.asText(response.data.address_city) || null,
    address_road: RichText.asText(response.data.address_road) || null,
    address_neighborhood: RichText.asText(response.data.address_neighborhood) || null,
    house_number: RichText.asText(response.data.house_number) || null,
    video: RichText.asText(response.data.id_do_video) || null,
 
    gallery: response.data.gallery.map((
      gallery: { 
        photo01: { url: any; }; 
        photo02: { url: any; }; 
        photo03: { url: any; }; 
        photo04: { url: any; }; 
        photo05: { url: any; }; 
        photo06: { url: any; }; 
        
      }) => {
      return {
        photo01: gallery.photo01.url || null,
        photo02: gallery.photo02.url || null,
        photo03: gallery.photo03.url || null,
        photo04: gallery.photo04.url || null,
        photo05: gallery.photo05.url || null,
        photo06: gallery.photo06.url || null,
      }
    })
  }

  console.log(JSON.stringify(local, null, 2))

  return {
    props: {
      local
    }
  }
}
