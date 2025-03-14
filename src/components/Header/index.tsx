import Link from 'next/link'
import { 
  Container,
  HeaderContent,
  Image,
  Nav,
  Buttons,
  Button
} from "./styles";

import { FaGoogle } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { MagnifyingGlass } from 'phosphor-react'

export function Header(){
  return(
    <Container>
      <HeaderContent>
        <Link href="/" prefetch><Image src="/logo.png"/></Link>
        <Nav>
          <input 
            placeholder="Qual cidade você"
          />
          <MagnifyingGlass 
            size={20} 
            color="#A0ACB2"
          />
          </Nav>
          <Buttons>
            <Button><Link href="https://wa.me/+5521967007447" prefetch>Anunciar</Link></Button>
            {/* <Button><Link href="/" prefetch>GuiaCast</Link></Button> */}
          </Buttons>
      </HeaderContent> 
    </Container>
    
  )
}