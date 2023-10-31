import {View} from 'react-native';
import React from 'react';
import TextComponent from '../../ui/TextComponent';
import DateInput from '../../ui/DateInput';
import InputComponent from '../../ui/InputComponent';
import DropdownComponents from '../../ui/DropdownComponents';
import {FormType} from '../../types/screenComponentsType';
import {commisionerate} from '../../../sampleData/commissionerate';
import {circle, subdivision} from '../../../sampleData/divisionCircle';

const Form1: React.FC<FormType> = ({state, dispatch, preview}) => {
  return (
    <View className="w-[85%] mx-auto">
      <View className="w-full h-[70px] mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="Enter the date"
        />
        <DateInput
          preview={preview}
          handleChange={dispatch}
          name="date"
          date={state.date}
        />
      </View>
      <View className="w-full mt-5 mb-3">
        <TextComponent
          style="text-[18px] text-black"
          content="Enter BIN number"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="123456"
          handleChange={dispatch}
          name="binNumber"
          defaultValue={state.binNumber}
          preview={preview}
          type="numericSymbol"
        />
      </View>
      <View className="w-full mt-5 mb-3">
        <TextComponent
          style="text-[18px] text-black"
          content="Select commissionerate"
        />
        <DropdownComponents
          defaultValue={state.commissioneRate}
          name="commissioneRate"
          handleSelect={dispatch}
          data={commisionerate}
          search={false}
          preview={preview}
        />
      </View>
      <View className="w-full mt-5 mb-3">
        <TextComponent
          style="text-[18px] text-black"
          content="Select division"
        />
        <DropdownComponents
          defaultValue={state.division}
          name="division"
          handleSelect={dispatch}
          data={commisionerate}
          search={false}
          preview={preview}
        />
      </View>
      {state.division && (
        <View className="w-full mt-5 mb-3">
          <TextComponent
            style="text-[18px] text-black"
            content="Select sub-division"
          />
          <DropdownComponents
            defaultValue={state?.subDivision}
            name="subDivision"
            handleSelect={dispatch}
            data={subdivision[state?.division]}
            search={true}
            preview={preview}
          />
        </View>
      )}
      {state.subDivision && (
        <View className="w-full mt-5 mb-3">
          <TextComponent
            style="text-[18px] text-black"
            content="Select circle"
          />
          <DropdownComponents
            defaultValue={state.circle}
            name="circle"
            handleSelect={dispatch}
            data={circle[state.subDivision]}
            search={false}
            preview={preview}
          />
        </View>
      )}
      <View className="w-full mb-3 mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="Enter shop name"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="Easy Fashion"
          handleChange={dispatch}
          name="shopName"
          defaultValue={state.shopName}
          preview={preview}
          type="alphanumericAndSymbol"
        />
      </View>
      <View className="w-full mb-3 mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="Enter brand name (optional)"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="Easy"
          handleChange={dispatch}
          name="brandName"
          defaultValue={state.brandName}
          preview={preview}
          type="alphanumericAndSymbol"
        />
      </View>
      <View className="w-full mb-3 mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="Area / Shopping mall"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="Dhaka"
          handleChange={dispatch}
          name="areaOrshoppingMall"
          defaultValue={state.areaOrshoppingMall}
          preview={preview}
          type="alphanumericAndSymbol"
        />
      </View>
      <View className="w-full mb-3 mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="Business registered address (as per BIN)"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="Dhaka"
          handleChange={dispatch}
          name="businessRegisteredAddress"
          defaultValue={state.businessRegisteredAddress}
          preview={preview}
          type="alphanumericAndSymbol"
        />
      </View>
      <View className="w-full mb-3 mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="Outlet address"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="Dhaka"
          handleChange={dispatch}
          name="outletAddress"
          defaultValue={state.outletAddress}
          preview={preview}
          type="alphanumericAndSymbol"
        />
      </View>
      <View className="w-full mb-3 mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="BIN holder's NID"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="12345436"
          handleChange={dispatch}
          name="nid"
          defaultValue={state.nid}
          preview={preview}
          type="numeric"
        />
      </View>
      <View className="w-full mb-3 mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="BIN holder's name"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="Rashadul Islam"
          handleChange={dispatch}
          name="name"
          defaultValue={state.name}
          preview={preview}
          type="alphanumericAndSymbol"
        />
      </View>
      <View className="w-full mb-3 mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="BIN holder's mobile number"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="0178XXXXXXX"
          handleChange={dispatch}
          name="mobile"
          defaultValue={state.mobile}
          preview={preview}
          type="numeric"
        />
      </View>
      <View className="w-full mb-3 mt-5">
        <TextComponent
          style="text-[18px] text-black"
          content="BIN holder's email (optional)"
        />
        <InputComponent
          style="text-[18px] text-black border-b"
          placeholder="example@gmail.com"
          handleChange={dispatch}
          name="email"
          defaultValue={state.email}
          preview={preview}
          type="alphanumericAndSymbol"
        />
      </View>
    </View>
  );
};

export default Form1;
