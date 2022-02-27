import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import NavigatorItem from "./item";
import {
  Navigator,
  PrevNavigator,
  NextNavigator,
  PickerContainer,
  PickerWrap,
} from "./navigator";
import Icon from "../../assets/icons";

const timeLists = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
];
const minLists = ["00", "15", "30", "45"];
const onceList = ["AM", "PM"];

interface Props {
  onChange: (time: object) => void;
}

const TimePicker: React.FC<Props> = (props) => {
  const [time, setTime] = useState<number>(0);
  const [page, setPage] = useState(0);
  const items = [];
  let id = 0;
  onceList.forEach((aa) => {
    timeLists.forEach((time) => {
      minLists.forEach((min) => {
        items.push({
          id: id,
          time: time + ":" + min,
          aa: aa,
        });
        id = id + 1;
      });
    });
  });

  const onSelect = (id: number) => {
    setTime(id);
    props.onChange(items[id]);
  };

  return (
    <div>
      <Navigator>
        <PrevNavigator
          onClick={() => {
            page > 0 && setPage(page - 20);
          }}
        >
          <Icon icon="ios-back" />
          <FormattedMessage id="earlier" defaultMessage="Earlier" />
        </PrevNavigator>
        <NextNavigator
          onClick={() => {
            page < 79 && setPage(page + 20);
          }}
        >
          <FormattedMessage id="later" defaultMessage="Later" />
          <Icon icon="ios-next" />
        </NextNavigator>
      </Navigator>
      <PickerContainer>
        <PickerWrap>
          {items.slice(page, page + 20).map((item, key) => (
            <NavigatorItem
              key={key}
              time={item}
              selected={time === item.id}
              onSelect={onSelect}
            />
          ))}
        </PickerWrap>
      </PickerContainer>
    </div>
  );
};

export default TimePicker;
