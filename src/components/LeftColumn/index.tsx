import React from 'react';

import LoadingProfilePanel from '../Shimmer/LoadingProfilePanel';
import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';

//o LODINGPROPS é usado para remodelar o componente
const LeftColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (

    /*Nessa parte é usado como uma condição para aparecer o efeito*/
    <Container className="left-column">
      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
        <>
          <ProfilePanel />
          <HashtagPanel />
        </>
      )}
    </Container>
  );
};

export default LeftColumn;
