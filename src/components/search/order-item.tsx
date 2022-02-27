import styled from "styled-components";
import { Collapse } from "antd";

const CourierItemWrapper = styled(Collapse)`
  .ant-collapse-header {
    min-height: 110px;
    color: white;
  }
`;

const CourierItem = styled.div`
  display: flex;
  align-items: center;
  // height: 100%;
  gap: 10px;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  > .ant-space-horizontal {
    width: 100%;
  }
`;

const CourierItemHalfFirst = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  gap: 20px;
`;

const CourierInfo = styled.div`
  display: flex;
  width: calc(100% - 120px);
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const CourierItemHalfLast = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  @media (max-width: 1280px) {
    justify-content: space-between;
  }
`;

const CourierEquipment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const CourierDetails = styled.div`
  padding: 10px 0 0;
  border-top: 1px solid #737373;
  .value {
    color: white;
  }
`;

const PlaceHolder = styled.div`
  height: 10px;
`;

export {
  CourierItemWrapper,
  CourierItem,
  CourierItemHalfFirst,
  CourierInfo,
  CourierItemHalfLast,
  CourierEquipment,
  CourierDetails,
  PlaceHolder,
};
