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
    - problems_count
    - solved_problems_count
    - questions_count
  - currentUser
    - id
    - username
    - email
    - name
    - group
      - id
      - group name
      - members_count
    - problems_count
    - solved_problems_count
    - questions_count
  - group
  - searchedGroup...?(검색)
- problem
  - problemList
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
- solution
  - solutionList
    - id
    - creator
      - id
      - username
      - name
    - lang
    - solved
    - view
    - comment_count
    - like_count
  - questionList
    - id
    - creator
      - id
      - username
      - name
    - lang
    - solved
    - view
    - comment_count
  - currentSolution
    - id
    - creator
      - id
      - username
      - name
    - code
    - lang
    - caption
    - view
    - solved
    - likes
      - id
      - username
      - name
    - like_count
    - comments
      - id
      - creator
      - message
      - likes
      - like_count
      - sub_comments
        - id
        - creator
        - message
        - likes
        - like_count
    - comment_count

## 더 필요한 API
- getUser (userInfo) (request data : userId)
- getGroup (detail) (request data : groupId)
- getProblems
  - request data
    - group : all or probGroupId
    - category : array of category
    - level
    - search
    - solved : [[solved], [unsolved]]
- getProblemsQuestions (request data : originId(originProb))

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