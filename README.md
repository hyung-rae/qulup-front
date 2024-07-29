## QuLup Project
> 궁금하신점이나 피드백 필요하신부분 슬랙 or 정빈님 통해서 커뮤니케이션 가능 합니다.

### 프로젝트 패키지 설치
`npm i` or `npm i -f`

### next app command
- 로컬 서버 app 실행   
`npm run dev` or `npm run dev -- --port [port number]`
- build   
`npm run build`

### 사용 라이브러리
package.json 참조
- 기본적으로 `mantine` 라이브러리외에 최소화 했습니다.
- api 라이브러리는 `axios` `react-query` 사용

### 프로젝트 구조
#### 라우터 구조
- `pages` 폴더 하위에 디렉토리 구조가 `route` 경로입니다.
-  pages/service/index.jsx : https: // [domain] / service
-  pages/user/info.jsx : https: // [domain] / user / info

#### public 폴더
- static 한 파일들이 있는 곳 입니다.
- image , favicon 등등
- 사용 예시 `src/components/layout/header/Header.presenter.jsx` 참고

#### 컴포넌트 구조
- `pages` 하위에 index 페이지들을 생성 이후 `src/components` 에서 필요 컴포넌트들을 import 해서 사용
- `src/components` 각 페이지들에서 사용할 컴포넌트들 구조화
- `container` `presenter` 구조
  - `container.jsx` 비즈니스 로직 (js, api 함수, 각종 hook) 에 집합체
  - `presenter.jsx` UI 컴포넌트 , `container.jsx` 로 부터 전달 받은 `props`들을 UI에 연결시키는 역할
- `module.css` 컴포넌트에서 사용하는 `css` 파일

### 기타 코드 코멘트
#### Mantine css library
- 프로젝트 ui 컴포넌트는 전부 [mantine](https://mantine.dev/getting-started/) 기반으로 만들었습니다.
- 위에 링크에서 필요한 컴포넌트 설명과 사용법이 자세히 정리되어 있으니 확인 하시면 됩니다.
- 컴포넌트 뿐만 아니라 `hook` 들도 정의 되어 있으니 필요에 따라 사용하시면 됩니다.
  
#### Icon 사용
- icon은 [react tabler](https://react-icons.github.io/react-icons/icons/tb/) 만 사용했습니다.
- 위에 링크된 사이트에서 tabler icon 을 선택후 icon 네이밍에서 `Tb` -> `Icon` 으로 변경후 사용 하시면 됩니다.
- `import { IconShoppingCart, IconUserCog, IconNews } from '@tabler/icons-react'` 
