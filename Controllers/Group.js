import Group from '../models/Groups.js'

export const createGroup = async (req, res) => {
    try {
        const {name} = req.body;
        const group = await Group.create({name})
        if(!name){return res.json('Name field is required')}
        res.json(group)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
 
}

export const deleteGroup = async (req, res) =>{
    try {
        const {id} = req.paramss.id;
        const group = await Group.findByIdAndDelete(id)
        if(!id) {
           return  res.json('No Id found')
        }
        res.json({msg: 'Group Deleted',  group})
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
export const getGroups = async(req, res) =>{
    try {
        const groups = await Group.find();
        if(!groups){ return res.json('No group yet!')}
        res.json(groups)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
export const updateGroup = async (req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        const group = await Group.findByIdAndUpdate(id,{name}, {new:true})
        if(!id){ return res.json('No Id found')}
        if(!group){ return res.json('No group found')}
        res.json(group)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}