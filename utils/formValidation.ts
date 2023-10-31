import {ApplicationData} from './../states/state.interface';

export const validation = (state: ApplicationData): boolean => {
  if (state.posSoftwareProvider === 'Personal') {
    if (state.nrbApproved === '') {
      return false;
    }
  }
  if (state.posSoftwareProvider === 'Third Party') {
    if (state.nrbApproved === '' || state.thirdPartyName === '') {
      return false;
    }
  }
  if (state.onlineSaleAvailable === 'Yes') {
    if (state.onlineSaleParcent === '' || state.onlineOrderMode === '') {
      return false;
    }
  }
  if (state.productInfo === 'Type') {
    if (
      state.productName === '' ||
      state.productUnit === '' ||
      state.unitPrice === '' ||
      state.vatParcent === '' ||
      state.sdPercent === '' ||
      state.priceIncludingVat === '' ||
      state.priceExcludingVat === ''
    ) {
      return false;
    }
  }

  const excludedFields = [
    'nrbApproved',
    'thirdPartyName',
    'onlineSaleParcent',
    'onlineOrderMode',
    'productName',
    'productUnit',
    'unitPrice',
    'vatParcent',
    'sdPercent',
    'priceIncludingVat',
    'priceExcludingVat',
    'differentBin',
  ];

  for (const prop in state) {
    if (
      !excludedFields.includes(prop) &&
      state[prop as keyof ApplicationData] === ''
    ) {
      return false;
    }
  }

  return true;
};
