import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="images/background.jpg" alt="" />
      </Background>
      <ImageTitle>
        <img src="/images/viewers-disney.png" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 * 7m * Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore odio
        nulla, amet, architecto nobis, consequuntur quae dolorem magnam aliquam
        quia veritatis nostrum nesciunt itaque a sequi facilis expedita id.
        Aperiam earum placeat fugit. Repellat dolores aut esse libero minima
        maiores commodi atque quod quisquam nisi, dolorem aperiam consequatur
        dolor quos.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 178px;
  min-width: 200px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;

  &:hover {
    background: rgb(198, 198, 198);
  }

  span {
    color: black;
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
  span {
    color: white;
  }
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 38px;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
` 

const Description = styled.div`
 line-height: 1.4;
 font-size: 20px;
 margin-top: 16px;
 color: rgb(249, 249, 249);
 max-width: 700px;
`