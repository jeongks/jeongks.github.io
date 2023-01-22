# 정기석의 작업일지
2023년은 일주일에 한 기능씩 구현해보는 것을 목표로 42주간의 여정을 떠나볼 예정이다. 구현할 기능들은 기본적으로 node를 통한 백엔드 API를 구현할 예정이고 node를 통한 구현 이후에는 자바로 옮기는 작업도 할 예정이다. 즉 구현한 기능의 가짓수는 42개가 나오지 않을 수 있다. 

##알고리즘 공부
https://www.notion.so/521b466e2c1d453994b559213685898e

## 백엔드 로직(API)설계
**1주차: 로그인 기능**
- [x] ~~express환경 구축~~
- [ ] password hashing
- [ ] jwt를 통한 Tokenization
- [ ] cookie 설정을 통한 자동 로그인


<details><summary>password hashing note</summary>
<p>

  ## Hashing, Salting, Encrypting
  **Hashing**<br/>
  Encryption과 같이 문자를 변환하여 문자의 원본내용을 숨기는 함수이다. Encryption과 가장 큰 차이는 단방향 함수라는 점이다. 즉, 한번 변환을 하면 기존으로 되돌릴 수 없다. Hashing algorithm을 통해 고유한 문자 또는 16진수로 변환을 하게된다. 서버에서는 변환된(hashed) 결과물을 저장하고 사용자가 비밀번호를 입력하면 hash된 값이 전달되고 저장된 hashed 문자와 전달된 hashed 문자를 비교하여 authenticate을 증명한다. 유명한 hash algorithm으로는 SHA-256, SHA-512 등이 있다.<br/><br/>
  **Encrypting**<br/>
  수학적 함수를 통해서 문자를 변환하는 것으로 비밀번호 등 보안이 필요한 문자의 원본내용을 숨겨 보안을 강화하는데 사용된다. 하지만 Encription의 경우에는 encript된 문자열을 decript하여 원상태로 복구할 수 있어서 보안에 취약점을 가지고 있다. 물론 decription을 하기 위해서는 key가 필요하다. Encryption을 이용한 비밀번호를 관리하는 경우에는 해당 key를 어떻게 관리하느냐가 보안의 핵심이 된다. <br/><br/>
  **Salting**<br/>
  비밀번호의 보안을 강화하기 위해서 첨가되는 임의의 문자를 Salt라고 한다. 마치 음식에 소금을 더하여 맛을 증대시키듯 보안이 필요한 원본문자에 Salt를 추가하여 보안을 증대시킨다. Salt는 서버에서만 저장되고 각 사용자마다 다른 salt를 제공한다.<br/><br/>
  
  ## password 보안에 필요한 것들
  - [ ] Salting -> bcrypt
  - [ ] Hashing -> bcrypt
  - [ ] 서버에 저장하고 비교할 수 있는 기능 -> JWT
  
  ## 라이브러리를 사용한 이유
  - **bcrypt :** 가장 흔하게 사용되고 hash와 salt 모두 사용되는 라이브러리여서 채택하였다.
  - **jwt :** 백엔드 API에서 data를 기본적으로 json 형태로 전달하고 저장할 생각으로 채택하였다.
</p> 
</details>
