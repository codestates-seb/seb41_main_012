import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userInfoState } from "../../store/userInfoAtoms";

const LogoutModalContainer = styled.div`
  position: absolute;
  bottom: 40vh;
  left: 70px;
  background-color: #fff;
  border-radius: 7px;
  padding: 24px;
  width: 394px;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    font-size: 1.5rem;
  }
`;
const ButtonContainer = styled.div`
  margin-top: 30px;
  button {
    cursor: pointer;
    background-color: #fff;
    text-decoration: none;
    border: none;
    font-size: 20px;
    padding: 10px 30px;
  }
  .yes {
    color: #ad0000;
    &:hover {
      color: #ff8b8b;
    }
  }
  .no {
    &:hover {
      color: #7c7c7c;
    }
  }
`;

interface LogoutModalProps {
  onClickToggleLogoutModal: () => void;
}

const LogoutModal = ({ onClickToggleLogoutModal }: LogoutModalProps) => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoState);
  const logoutHandler = () => {
    localStorage.removeItem("Authorization");
    setUserInfo({});
    navigate("/");
    window.location.reload();
  };
  return (
    <LogoutModalContainer>
      <span>정말 로그아웃 하시겠습니까?</span>
      <ButtonContainer>
        <button className="yes" onClick={logoutHandler}>
          예
        </button>
        <button className="no" onClick={onClickToggleLogoutModal}>
          아니오
        </button>
      </ButtonContainer>
    </LogoutModalContainer>
  );
};

export default LogoutModal;
