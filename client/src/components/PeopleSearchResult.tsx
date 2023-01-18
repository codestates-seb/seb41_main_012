import styled from "styled-components";

const UserWrapper = styled.div`
  height: 60px;
  width: 100%;
  margin-bottom: 15px;

  .result-box {
    display: flex;
    margin: 10px;
    padding: 10px;
    border-bottom: 1px solid black;
  }

  .user_thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .text-box {
    width: 80%;
  }
`;

interface PeopleProps {
  userId: number;
  name: string;
  followers: number;
  memo: string;
  thumbnail_url: string;
}

const PeopleSearchResult = ({ people }: { people: PeopleProps }) => {
  return (
    <>
      <UserWrapper>
        <div className="result-box">
          <img
            src={people.thumbnail_url}
            alt="thumbnail"
            className="user_thumbnail"
          />
          <div className="text-box">
            <p>{people.name}</p>
            <p>{people.memo}</p>
            <p>{people.followers}</p>
          </div>
        </div>
      </UserWrapper>
    </>
  );
};

export default PeopleSearchResult;
