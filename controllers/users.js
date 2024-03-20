import{ v4 as uuidv4} from 'uuid';

let users = [];

export const Getusers = (req,res)=>{ 
    res.send(users);
}
export const Createuser = (req,res)=>{
    
    const user=req.body;
   users.push({...user, id: uuidv4()});
   res.send(`user  ${user.name} information added`);
   console.log({users});

 }

 export const Getuserbyid = (req,res)=>{ 
    const { id } =req.params;
   const founduser=users.find((user)=> user.id==id);
 
     res.send(founduser);
 }
 export const DeleteUser =  (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== id);
    res.send(`user with id ${id} deleted`);
  }

  export const UpdateUser = (req, res) => {
    const id = req.params.id;
    const {name,branch,age}=req.body;
    const user=users.find((user)=> user.id==id);
    if(name){
        user.name=name;
    }
    if(branch){
        user.branch=branch;
    }
    if(age){
        user.age=age;
    }
    res.send(`user with id ${id} Updated`);
  }