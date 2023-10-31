import {View} from 'react-native';
import React from 'react';
import TextComponent from '../../ui/TextComponent';
import InputComponent from '../../ui/InputComponent';
import {FormType} from '../../types/screenComponentsType';
import DropdownComponents from '../../ui/DropdownComponents';
import {
  conditionalData,
  producUnit,
  productInfo,
} from '../../../sampleData/sampleDropdown';

const Form3: React.FC<FormType> = ({state, dispatch, preview}) => {
  return (
    <View className="w-[85%] mx-auto">
      <View className="w-full mb-3 mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="Monthly average sales"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="123456"
          handleChange={dispatch}
          name="monthlyAverageSales"
          defaultValue={state.monthlyAverageSales}
          preview={preview}
          type="numeric"
        />
      </View>
      <View className="w-full mb-3 mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="Monthly average customer"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="123456"
          handleChange={dispatch}
          name="monthlyAverageCustomer"
          defaultValue={state.monthlyAverageCustomer}
          preview={preview}
          type="numeric"
        />
      </View>
      <View className="w-full mt-5 mb-3">
        <TextComponent
          style="text-[18px] text-black"
          content="Online sale available"
        />
        <DropdownComponents
          defaultValue={state.onlineSaleAvailable}
          name="onlineSaleAvailable"
          handleSelect={dispatch}
          data={conditionalData}
          search={false}
          preview={preview}
        />
      </View>
      {state.onlineSaleAvailable === 'Yes' && (
        <>
          <View className="w-full mb-3 mt-5">
            <TextComponent
              style="text-[18px] text-black"
              content="Online sell percent"
            />
            <InputComponent
              style="text-[18px] text-black border-b"
              placeholder="12"
              handleChange={dispatch}
              name="onlineSaleParcent"
              defaultValue={state.onlineSaleParcent}
              preview={preview}
              type="numeric"
            />
          </View>
          <View className="w-full mb-3 mt-5">
            <TextComponent
              style="text-[18px] text-black"
              content="Online Order mode"
            />
            <InputComponent
              style="text-[18px] text-black border-b"
              placeholder="Website"
              handleChange={dispatch}
              name="onlineOrderMode"
              defaultValue={state.onlineOrderMode}
              preview={preview}
              type="alphanumericAndSymbol"
            />
          </View>
        </>
      )}
      <View className="w-full mt-5 mb-3">
        <TextComponent
          style="text-[18px] text-black"
          content="Product information"
        />
        <DropdownComponents
          defaultValue={state.productInfo}
          name="productInfo"
          handleSelect={dispatch}
          data={productInfo}
          search={false}
          preview={preview}
        />
      </View>
      {state.productInfo === 'Type' && (
        <>
          <View className="w-full mb-3 mt-5">
            <TextComponent
              style="text-[18px] text-black"
              content="Product name"
            />
            <InputComponent
              style="text-[18px] text-black border-b"
              placeholder="garments"
              handleChange={dispatch}
              name="productName"
              defaultValue={state.productName}
              preview={preview}
              type="alphanumericAndSymbol"
            />
          </View>
          <View className="w-full mt-5 mb-3">
            <TextComponent
              style="text-[18px] text-black"
              content="Product unit"
            />
            <DropdownComponents
              defaultValue={state.productUnit}
              name="productUnit"
              handleSelect={dispatch}
              data={producUnit}
              search={false}
              preview={preview}
            />
          </View>
          <View className="w-full mb-3 mt-5">
            <TextComponent
              style="text-[18px] text-black"
              content="Unit price"
            />
            <InputComponent
              style="text-[18px] text-black border-b"
              placeholder="123"
              handleChange={dispatch}
              name="unitPrice"
              defaultValue={state.unitPrice}
              preview={preview}
              type="numeric"
            />
          </View>
          <View className="w-full mb-3 mt-5">
            <TextComponent style="text-[18px] text-black" content="VAT %" />
            <InputComponent
              style="text-[18px] text-black border-b"
              placeholder="2"
              handleChange={dispatch}
              name="vatParcent"
              defaultValue={state.vatParcent}
              preview={preview}
              type="numeric"
            />
          </View>
          <View className="w-full mb-3 mt-5">
            <TextComponent style="text-[18px] text-black" content="SD %" />
            <InputComponent
              style="text-[18px] text-black border-b"
              placeholder="2"
              handleChange={dispatch}
              name="sdPercent"
              defaultValue={state.sdPercent}
              preview={preview}
              type="numeric"
            />
          </View>
          <View className="w-full mb-3 mt-5">
            <TextComponent
              style="text-[18px] text-black"
              content="Price including VAT"
            />
            <InputComponent
              style="text-[18px] text-black border-b"
              placeholder="2"
              handleChange={dispatch}
              name="priceIncludingVat"
              defaultValue={state.priceIncludingVat}
              preview={preview}
            />
          </View>
          <View className="w-full mb-3 mt-5">
            <TextComponent
              style="text-[18px] text-black"
              content="Price excluding VAT"
            />
            <InputComponent
              style="text-[18px] text-black border-b"
              placeholder="2"
              handleChange={dispatch}
              name="priceExcludingVat"
              defaultValue={state.priceExcludingVat}
              preview={preview}
              type="numeric"
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Form3;
