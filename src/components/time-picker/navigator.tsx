import styled from "styled-components";

export const Navigator = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 15px;
  background: #353535;
  width: 300px;
`;

export const PrevNavigator = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  color: #fff;
  display: flex;
  align-items: center;
  grid-gap: 8px;
  cursor: pointer;
`;
export const NextNavigator = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  color: #fff;
  display: flex;
  align-items: center;
  grid-gap: 8px;
  cursor: pointer;
`;

export const PickerContainer = styled.div`
  width: 300px;
  height: 288px;
  background: #353535;
  padding: 32px;
`;

export const TimeItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  font-size: 10px;
  cursor: pointer;
  &.selected {
    background: #20a5f5;
  }
  .ap {
    font-size: 8px;
  }
`;

export const PickerWrap = styled.div`
  border-left: 1px solid #000;
  border-top: 1px solid #000;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 4px;
`;

export const PickerHeader = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 300px;
  color: white;
  font-size: 18px;
  line-height: 32px;
  position: relative;
  .asap {
    padding: 5px 10px;
    background: #353535;
    border-radius: 5px;
    font-size: 14px;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
`;
