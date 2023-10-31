import React from 'react';

export type PropsType = {
  style?: string;
  content?: string;
  innerStyle?: string;
  icon?: React.ReactNode;
  handlePress?: () => void;
};

export type InputTextProp = {
  placeholder: string;
  style: string;
  secure?: boolean;
  handleChange?: (action: {
    type: string;
    payload: {name: string; value: string | Date};
  }) => void;
  handleInputChange?: (e: string) => void;
  defaultValue?: string;
  name?: string;
  preview?: boolean;
  type?: string;
};

export type DateInputType = {
  handleChange: (action: {
    type: string;
    payload: {name: string; value: string | Date};
  }) => void;
  name: string;
  date: Date;
  preview: boolean;
};

interface ExtendedHTMLImageElement extends HTMLImageElement {
  uri: string;
}

export type ImageUploadType = {
  dispatch: (action: {
    type: string;
    payload: {name: string; value: HTMLImageElement | null};
  }) => void;
  name: string;
  defaultImage: ExtendedHTMLImageElement | null;
  content: string;
  preview: boolean;
};

export type MultiImageUploadType = {
  dispatch: (action: {
    type: string;
    payload: {name: string; value: HTMLImageElement[]};
  }) => void;
  name: string;
  defaultImage: ExtendedHTMLImageElement[];
  content: string;
  preview: boolean;
};
