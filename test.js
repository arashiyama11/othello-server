const {Room,Rooms}=require("./room.js")
const rooms=new Rooms(10)
rooms.add(new Room("hoge"))
rooms.add(new Room("bar"))
console.log(rooms.findKey(room=>room.roomname==="hoge"))