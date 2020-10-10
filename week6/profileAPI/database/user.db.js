/**
 * @user {id: number, email: string, password: string, name: string}
 */
const users = [
    {id: 1, email: "test@test", password: "1234", name: "홍길동"},
    {id: 2, email: "test2@test2", password: "5678", name: "남태우"},
    {id: 3, email: "test3@test3", password: "98765", name: "임태호"}
]

const getUser  = (userId) => {
    return users.find((user)=>user.id === userId);
}

module.exports={
    users,
    getUser
};