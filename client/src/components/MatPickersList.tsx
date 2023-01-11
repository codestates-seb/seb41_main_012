import { useState, useCallback } from "react";
import styled from "styled-components";
import MatPickerUpdate from "./MatPickerModal/MatPickerUpdate";
import MatPickerDelete from "./MatPickerModal/MatPickerDelete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const MatPickerSingleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 15px;
  border-bottom: 1px solid black;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  button {
    background-color: transparent;
  }
  .icon {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 20px;
    background-color: ${(props) => props.color || "gray"};
  }
`;

const ButtonBox = styled.div`
  * {
    margin-right: 8px;
  }
  .update_btn_hidden {
    display: none;
  }
  .delete_btn_hidden {
    display: none;
  }
`;

interface PickersProps {
  id: number;
  name: string;
  color: string;
}

const MatPickersList = ({ picker }: { picker: PickersProps }) => {
  const [isOpenUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const onClickToggleUpdateModal = useCallback(() => {
    setOpenUpdateModal(!isOpenUpdateModal);
  }, [isOpenUpdateModal]);

  const onClickToggleDeleteModal = useCallback(() => {
    setOpenDeleteModal(!isOpenDeleteModal);
  }, [isOpenDeleteModal]);

  return (
    <>
      <MatPickerSingleBox>
        {isOpenUpdateModal && (
          <MatPickerUpdate
            id={picker.id}
            color={picker.color}
            name={picker.name}
            onClickToggleModal={onClickToggleUpdateModal}
          />
        )}
        {isOpenDeleteModal && (
          <MatPickerDelete
            id={picker.id}
            onClickToggleModal={onClickToggleDeleteModal}
          />
        )}
        <NameBox color={picker.color}>
          <div className="icon"></div>
          <div>{picker.name}</div>
        </NameBox>
        <ButtonBox>
          <EditIcon
            className={`update_btn${
              picker.name === "기본 맛픽커즈" ? "_hidden" : ""
            }`}
            onClick={onClickToggleUpdateModal}
          />

          <DeleteIcon
            className={`delete_btn${
              picker.name === "기본 맛픽커즈" ? "_hidden" : ""
            }`}
            onClick={onClickToggleDeleteModal}
          />
        </ButtonBox>
      </MatPickerSingleBox>
    </>
  );
};

export default MatPickersList;
