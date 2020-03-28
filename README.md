# Morgorithm API
- user
  - isLoggedIn
  - profile
    - id
    - username
    - email
    - name
    - group
      - id
      - name
      - member_count
    - problem_groups
      - id
      - name
      - problems_count
      - solved_problems_count
    - problems
      - id
      - origin
        - id
        - level
        - url
        - number
        - category
        - title
        - remark
      - is_solved
      - solved_time
    - solutions
      - id
      - creator
      - lang
      - solved
      - view
      - comment_count
      - like_count
    - problems_count
    - solved_problems_count
    - questions_count
- problem
- 

## 더 필요한 API
- getGroup (detail) (request data : groupId)
- getProblemsQuestions (request data : originId(originProb))
- 

## AppContainer
### getState
- isLoggedIn
- user
### dispatch
- copyAndGetProbs ( useEffect(isLoggedIn) )

## SignIn
### dispatch
- signIn
- 

### SignUp (InputEmail, InputUser)
### dispatch
- checkUnique
- sendConfirmCode
- signUp