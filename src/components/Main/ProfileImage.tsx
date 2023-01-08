import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
// const PROFILE_IMAGE_LINK =
//   'https://cdn.pixabay.com/photo/2022/12/07/11/39/foam-7640940__480.jpg'

  const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
// const ProfileImage = (): FunctionComponent =>{
const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage