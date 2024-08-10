// src/recoil/atoms.js

import { atom } from 'recoil'
import { v1 } from 'uuid'
// 고객 정보를 저장할 atom
export const userState = atom({
  key: `userState${v1}`, // atom의 고유 키
  default: {
    academyNm: '',
    id: '',
    level: null,
    mberSeq: 0,
    mberTy: 'N',
    memo: null,
    nickname: '',
    nm: '',
    password: null,
    phone: '',
    point: 0,
    time: null,
  },
})
