# Ph Assignment

## 목차

- [Ph Assignment](#ph-assignment)
  - [목차](#목차)
  - [과제 시작일](#과제-시작일)
  - [화면 구성](#화면-구성)
    - [`검색` 페이지](#검색-페이지)
    - [`등록된 Repository` 페이지](#등록된-repository-페이지)
    - [`Issue 모음` 페이지](#issue-모음-페이지)
    - [그 외](#그-외)
  - [실행 방법](#실행-방법)
  - [요구사항](#요구사항)
  - [추가한 라이브러리](#추가한-라이브러리)
  - [폴더 구조](#폴더-구조)
  - [한계점](#한계점)

## 과제 시작일

- 제출자 성명: 장태영
- 23/01/28 ~ 23/02/01

## 화면 구성

총 3개의 화면으로 구성되어 있습니다.

- `검색`
- `등록된 Repository`
- `Issue 모음`

### `검색` 페이지

<img width="1048" alt="검색 페이지" src="https://user-images.githubusercontent.com/52184469/215984201-97251a27-6081-4259-8f53-2a72d34398da.png">

- 상단의 검색창을 이용하여 Repository를 검색할 수 있습니다.
- 사용자에게 보여주는 각 Repository 정보는 `Repository명`, `Description`, `Star`, `주 사용 언어`, `업데이트 날짜`입니다.
  - `Repository명`을 클릭할 경우 새 탭을 띄우면서 해당 Repository로 이동합니다.
- 각 Repository를 등록할 수 있으며 최대 4개까지 등록이 가능합니다.
  - 4개인 상태에서 추가로 등록하려고 할 경우 브라우저 기본 알림창이 발생합니다.
  - 등록된 Repository는 삭제가 가능합니다(등록 후 등록 버튼이 삭제 버튼으로 변경).
- 한 번에 10개의 Repository가 노출이 되며 하단에 페이지를 변경할 수 있는 부분이 있습니다.

### `등록된 Repository` 페이지

<img width="1034" alt="등록된 Repository" src="https://user-images.githubusercontent.com/52184469/215984575-0282942d-11ff-4d7a-a423-85ec56539157.png">

- 등록했었던 Repository의 목록을 보여줍니다.
- 등록된 Repository가 없다면 이에 따른 안내 문구가 노출됩니다.

### `Issue 모음` 페이지

<img width="1055" alt="Issue 모음" src="https://user-images.githubusercontent.com/52184469/215984634-c7241539-b7b3-4061-b933-c8e3ca2266ed.png">

- 등록했었던 Repository별로 해당 Repository의 Issue 목록(오픈된 Issue)을 확인할 수 있습니다.
- 등록된 Repository 당 1개의 탭을 가지고 있습니다.
  - 선택된 Repository와 선택되지 않은 Repository에 대한 스타일 차이가 존재합니다.
  - 선택된 Repository를 변경할 경우 페이지가 1부터 다시 시작됩니다.
- 사용자에게 보여주는 각 Issue 정보는 `Issue명`, `Issue 내용의 일부`, `Repository명`, `Issue 작성자`, `업데이트 날짜`입니다.
- 등록된 Repository가 없다면 안내 문구가 노출됩니다.
- 한 번에 10개의 Issue가 노출이 되며 하단에 페이지를 변경할 수 있는 부분이 있습니다.

### 그 외

<img width="584" alt="페이지네이션" src="https://user-images.githubusercontent.com/52184469/215986269-4b553fdb-dcec-4379-9a24-14ef1e9e42aa.png">

- `검색`과 `Issue 모음` 페이지 모두 위 이미지와 같은 페이지네이션을 사용합니다.
- 이전 또는 다음 페이지가 없을 경우 각 버튼은 비활성화됩니다.
- 현재 페이지가 일정 페이지가 이상 또는 이하가 될 경우 줄임표('...')가 노출됩니다.
- props로 전달하는 `totalCount`와 query string에 존재하는 페이지 번호(`p`)를 기준으로 그려집니다.

## 실행 방법

```shell
yarn
yarn start
```

## 요구사항

- [x] 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다.
- [x] 검색된 Public Repository를 등록할 수 있다.
  - [x] 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려준다.
  - [x] 웹은 LocalStorage, 앱은 Async Storage 등 로컬 저장소를 활용한다. (웹 혹은 앱 선택)
- [x] 등록된 Repository를 삭제할 수 있다.
- [x] 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
  - [x] 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다.
  - [x] 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다.
  - [x] 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.

## 추가한 라이브러리

create-react-app에 의하여 자동으로 설치되는 라이브러리는 제외했습니다.

- `react-router-dom`
  - 클라이언트 사이드 라우팅을 위해 설치한 라이브러리입니다. 클라이언트 사이드 라우팅이 해당 라이브러리가 있어야만 할 수 있는건 아니지만 비교적 익숙하고 라우팅을 위한 여러 가지 기능을 제공하기 때문에 추가했습니다.
  - v6.4+부터 제공하는 loader, action, defer 등을 고려하여 사용할 가치는 충분하다고 생각했습니다.
- `@tanstack/react-query`
  - 서버 상태에 대한 관리를 위임하여 관심사를 분리할 수 있고 페이지 내에서 이루어지는 상호 작용에 따라 발생하는 네트워크 요청을 컨트롤하기 좋은 라이브러리라고 생각하여 추가했습니다.
- `@octokit/core`, `@octokit/types`
  - Github REST API 문서에서 해당 라이브러리를 이용하는 예시를 제공하고 있어서 그대로 따라 추가했습니다.
- `@emotion/css`
  - 스타일링을 위해서 추가했습니다.
- `quantumic-design`
  - `Lubycon`이라는 집단에서 만든 UI Kit입니다. 다른 UI 컴포넌트에 비해 비교적 가볍고 제가 필요한 기능이 존재해서 추가했습니다.

## 폴더 구조

```
src
 ┣ api
 ┃ ┣ getIssuesByPage.ts         # Github 특정 Repository의 Issue 목록을 조회하는 API 관련 함수
 ┃ ┗ index.ts                   # Octokit 인스턴스 생성 및 export
 ┣ components
 ┃ ┣ Issues                     # 'Issue 모음' 탭 관련 컴포넌트 모음
 ┃ ┃ ┣ IssueItem.tsx
 ┃ ┃ ┣ IssueList.tsx
 ┃ ┃ ┣ IssueSkeleton.tsx
 ┃ ┃ ┣ Tab.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Pagination                 # Pagination 관련 컴포넌트 및 커스텀 훅
 ┃ ┃ ┣ PaginationItem.tsx
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ usePagination.ts
 ┃ ┣ Search                     # '검색' 탭 관련 컴포넌트 모음
 ┃ ┃ ┣ SearchForm.tsx
 ┃ ┃ ┣ SearchSkeleton.tsx
 ┃ ┃ ┣ SearchedItem.tsx
 ┃ ┃ ┣ SearchedList.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Button.tsx                 # 공용 버튼 컴포넌트
 ┃ ┣ Header.tsx                 # 상단 헤더 컴포넌트
 ┃ ┣ Input.tsx                  # 공용 인풋 컴포넌트
 ┃ ┗ Spinner.tsx                # 공용 로딩 스피너 컴포넌트
 ┣ hooks
 ┃ ┣ useNavigationStatus.ts     # React Router의 navigation 객체를 이용한 상태값을 반환하는 커스텀 훅
 ┃ ┗ usePersistedState.ts       # localStorage와 동기화를 위한 useState 래핑 커스텀 훅
 ┣ lib
 ┃ ┗ react-query
 ┃ ┃ ┣ factory.ts               # React Query의 Query Key 모음
 ┃ ┃ ┗ options.ts               # React Query의 Query Option 모음
 ┣ routes
 ┃ ┣ Search                     # '검색' 페이지 컴포넌트
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ options.ts               # '검색' 페이지를 위한 loader 함수 (React Router)
 ┃ ┣ EnrolledRepositories.tsx   # '등록된 Repository' 페이지 컴포넌트
 ┃ ┣ Issues.tsx                 # 'Issue 모음' 페이지 컴포넌트
 ┃ ┗ Layout.tsx                 # 공용 레이아웃 컴포넌트
 ┣ App.tsx
 ┣ colors.ts
 ┣ constant.ts                  # 각종 문자, 숫자를 상수 처리한 변수 모음
 ┣ index.tsx
 ┗ utils.ts                     # 각종 헬퍼 함수 모음
```

## 한계점

- 어느 정도 규모의 컴포넌트가 제일 적당한지는 아직도 의문이 듭니다. 버튼이나 인풋같은 재사용 가능한 작은 단위의 컴포넌트는 UI 컴포넌트 라이브러리들이 추구하는 정도의 규모가 적당하다고 생각이 들지만 그 이상을 넘어가서 페이지를 구성하고 있는 요소들을 어느 정도 규모의 컴포넌트로 분리하는 것이 좋은지 아니면 분리하지 않는 것이 좋은지 잘 모르겠습니다.
  - 현재 과제에서는 버튼이나 인풋과 같은 작은 단위의 컴포넌트를 제외하면 하나의 섹션을 담당하거나 분리된 다른 컴포넌트들과의 추상화 단계를 맞춘다거나 하위 컴포넌트로의 분리가 필요하다고 느껴서 컴포넌트를 생성하거나 분리했습니다.
