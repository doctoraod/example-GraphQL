### Install
```yarn``` or ```npm install```

### Run
```npm start```

### Example Query
- User
```
{
  users {
    id
    name
    groupId
  }
}
```
- Group
```
{
  groups {
    id
    role
  }
}
```
- User and Group
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
- Stack User and Group
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
