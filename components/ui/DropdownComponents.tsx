/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import TextComponent from './TextComponent';

type IDProps = {
  defaultValue: string;
  name: string;
  handleSelect: (action: {
    type: string;
    payload: {name: string; value: string};
  }) => void;
  data: {label: string; value: string}[];
  search: boolean;
  preview: boolean;
};

const DropdownComponents: React.FC<IDProps> = ({
  defaultValue,
  name,
  handleSelect,
  data,
  search,
  preview,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<{label: string; value: string}[] | []>([]);

  useEffect(() => {
    setItems(data);
  }, [data]);

  useEffect(() => {
    handleSelect({
      type: 'INPUT',
      payload: {name: name, value: value},
    });
  }, [value]);

  return (
    <>
      {preview ? (
        <TextComponent
          style="text-black text-[18px] mt-3 border-b pb-2"
          content={defaultValue}
        />
      ) : (
        <DropDownPicker
          style={{
            backgroundColor: 'rgb(226 232 240)',
            borderRadius: 0,
            borderWidth: 0,
            borderBottomWidth: 1.2,
            zIndex: 0,
          }}
          textStyle={{
            fontFamily: 'InriaSerif-Regular',
            fontSize: 18,
          }}
          open={open}
          value={defaultValue}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          maxHeight={300}
          searchable={search}
          listMode="SCROLLVIEW"
          scrollViewProps={{
            nestedScrollEnabled: true,
          }}
          listItemContainerStyle={{
            height: 'auto',
            marginTop: 8,
            marginBottom: 8,
          }}
        />
      )}
    </>
  );
};

export default DropdownComponents;
