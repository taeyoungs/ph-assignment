# Ph Assignment

## 요구사항

- [x] 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다.
- [ ] 검색된 Public Repository를 등록할 수 있다.
  - [ ] 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려준다.
  - [ ] 웹은 LocalStorage, 앱은 Async Storage 등 로컬 저장소를 활용한다. (웹 혹은 앱 선택)
- [ ] 등록된 Repository를 삭제할 수 있다.
- [ ] 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
  - [ ] 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다.
  - [ ] 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다.
  - [ ] 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.

## Todo

- [x] Search Skeleton
- [x] Search Pagination
  - [x] Pagination 컴포넌트 구현
  - [ ] Pagination 컴포넌트 리팩토링
- [ ] 레포지토리 등록
  - [ ] 최대 개수 시 알림
- [ ] Delete Repository
  - [ ] 이미 등록된 레포라면 등록 버튼이 삭제 버튼이 되도록
- [ ] ...
