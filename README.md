### Install
```yarn``` or ```npm install```

### Run
```npm start```

### Example Query
1. User
```
{
  users {
    id
    name
    groupId
  }
}
```
2. Group
```
{
  groups {
    id
    role
  }
}
```
3. User and Group
```
{
  groups {
    id
    role
    users {
      id
      name
    }
  }
  users {
    id
    name
    groupInfo {
      id
      role
    }
  }
}
```
4. Stack User and Group
```
{
  groups {
    id
    role
    users {
      id
      name
      groupInfo {
        id
        role
        users {
          id
          name
        }
      }
    }
  }
  users {
    id
    name
    groupInfo {
      id
      role
      users {
        id
        name
        groupInfo {
          id
          role
        }
      }
    }
  }
}
```
