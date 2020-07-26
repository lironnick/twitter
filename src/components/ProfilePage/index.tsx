import React from 'react'

import Feed from '../Feed'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Tiago Henrique</h1>
        <h2>@lironnick</h2>

        <p>
          Developer at <a href="https://lironnick.com.br">@Lironnick</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Belo horizonte, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 25 de maio de 1986
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>998 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage
