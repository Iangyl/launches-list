import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardStyled from './CardStyled';
import Thumbnail from 'components/Thumbnail/Thumbnail';
import { useModal } from 'components/ModalProvider/ModalProvider';
import { ILaunch } from 'hooks/useGetLaunches/useGetLaunches.types';

const Card = ({ id, links }: Pick<ILaunch, 'links' | 'id'>) => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const handleClick = () => {
    navigate(`/${id}`);
    openModal();
  };

  return (
    <a onClick={handleClick}>
      <CardStyled>
        <Thumbnail
          src={`https://img.youtube.com/vi/${links.youtube_id}/0.jpg`}
        />
      </CardStyled>
    </a>
  );
};

export default Card;
