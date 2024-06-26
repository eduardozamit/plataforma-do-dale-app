import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 30.6rem;
  min-width: 30.6rem;
  min-height: 34rem;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  font-family: 'Montserrat', sans-serif;

  border-radius: 1.6rem;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  > .icons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  > .fav-btn {
    position: absolute;
    background: none;
    border: none;
    right: 1.6rem;
    top: 1.6rem;
  }

  > img {
    margin-bottom: 1.6rem;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    width: 14rem;
    height: 14rem;
  }

  > .name-age {
    display: flex;
    > h1 {
      display: flex;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-transform: capitalize;
    }
  }

  > #city {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  > .education {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.6rem;
    gap: 0.2rem;

    > p {
      font-size: 1.4rem;
    }
  }

  > .tags-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: left;
    gap: 0.2rem;
    margin-bottom: 0.8rem;

    /* 
        > .tags {
            display: flex;
            flex-direction: column;
        } */

    > p {
      font-size: 1.4rem;
      /* margin-bottom: 0.8rem; */
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .links {
    display: flex;
    justify-content: right;
    width: 100%;
  }
`;
