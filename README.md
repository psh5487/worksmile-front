# Worksmile Front Framework

## 실행하기
- 터미널 켜기  

- pakage.json 을 바탕으로 node_modules 설치하기  
`yarn install`

- run 하기  
`yarn start`

- 브라우저에서 Open 하기  
http://localhost:3000


## Redux로 전역 상태 관리
- User State는 여러 컴포넌트에서 사용되므로, 매번 부모 컴포넌트에서 자식 컴포넌트를 전달하는 일이 무척 번거롭다.
- 그래서 이처럼 전역적으로 사용되는 State들은 Redux를 사용하여 관리한다.
- 한 두 컴포넌트에서만 사용되는 State 변경은 useState를 사용하고, 필요에 따라서는 React 처음 배울 때 나오는 방식으로 부모 → 자식으로 전달해주면 된다.

## Redux 로 State를 변화시키는 원리
<img width="400" alt="그림4" src="https://user-images.githubusercontent.com/26567880/103455180-220c5500-4d2e-11eb-91ca-02cbeee3f976.png">

1. action 만들기 함수로 action 생성
  - action Type 에 하고자 하는 동작(ex.LOGIN_USER)을 지정하고, action data 에는 업데이트 시킬 값(ex.userInfo)을 넣어 action을 생성한다.
  
2. dispatch 함수로 action 을 발생시킨다.

3. reducer 함수는 action 을 받아, action Type에 따라 분기되고, "특정 State를 변화" 시켜준다.
  - 이 때 spread 연산자를 사용하여, 객체를 새로 만들어서 값을 변경하도록 한다. (리덕스 불변성 유지)
  - 이렇게 불변성을 유지해주어야, 변경 내용이 추적 가능해진다.
  
- 이론적으로 state와 reducer는 store에 저장된다.
- store에 저장된 state에 접근할 때는, useSelector를 사용하여 접근한다.

## 파일 설명
-reducer 폴더
    - 위에서 설명한 Redux 관련 파일들은 reducers 폴더에 있다.
    - reducers/index.js 는 Root Reducer로 여러 reducer 를 관리한다.
    - reducers/user.js 는 User와 관련된 reducer 이다. 이 파일에는 위에서 설명한 userState, Action Type, Action 생성 함수, Reducer 함수 모두 들어있다. 
    - 이렇게 한 파일에서 관리하는 방식을 Ducks 패턴이라고 한다.
- hoc 폴더
    - auth.js 는 각 페이지에 접근 전, 헤더에 access-token을 넣어 서버에 인증을 요청하도록 한다.
    - 인증 받은 사용자만, User Page와 Admin Page를 이용할 수 있다.

## 필수 지식
1. JSX, Component, Props

2. 꼭 알아야하는 Hooks
  - useState
  - useEffect
  - useRef
  
3. Component의 Life Cycle

## 성능 개선 관련 지식
- useMemo, useCallbakc
- React.memo
- useSelector 최적화 방법
(아직 저도 잘은 모름...)

