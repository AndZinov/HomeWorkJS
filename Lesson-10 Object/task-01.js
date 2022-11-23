const users = [
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
          username: 'Bob',
          status: 'online',
          lastActivity: 104
        }
];
const onlineUsers = [];
users.forEach( (object) => {
    if (object.status === 'online'){
       return onlineUsers.push(object.username)
    }
})

console.log()
alert (`Сейчас в онлайн следующие пользователи: ${onlineUsers.join(', ')}`)