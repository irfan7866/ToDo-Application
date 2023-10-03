const List = require('../Models/ListSchema');
const User = require('../Models/UserSchema');
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types;

// Add task to list
exports.addListItem = async(req, res) => {
    try {

        const {task, userId} = req.body;

        if (!ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid User Id, Please enter a valid User Id' });
        }

        if(!task) 
            return res.status(500).json({message: `Please enter the task`});

        const existingUser = await User.findOne({ _id: userId });

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found, Please enter a valid User Id' });
        }
        
        const list = List.create({
            task,
            userId
        });

        return res.status(201).json({message: `List Item added Successfully`});

    } catch (error) {
        return res.status(500).json({message: `Internal Server issue`, error});
    }
}

// Update task from the list
exports.updateListItem = async(req, res) => {
    try {

        const listItem = req.params.id;
        const {task, isCompleted} = req.body;

        if (!ObjectId.isValid(listItem)) {
            return res.status(400).json({ message: 'Invalid Item Id, Please enter a valid Item Id' });
        }

        const list_Item = await List.findOne({_id: listItem});

        if(!list_Item) 
            return res.status(404).json({message: `List Item not found, Please enter valid Item Id`});

        if(!task) {
            return res.status(500).json({message: `Please enter the task`})
        }

        list_Item.task = task || list_Item.task;

        list_Item.isCompleted = isCompleted !== undefined ? isCompleted : list_Item.isCompleted;

        await list_Item.save();

        res.status(200).json({ message: 'List item updated successfully', listItem });

    }
    catch (error) {
        return res.status(500).json({message: `Something went wrong`, error});
    }
}

// Delete the List Item 
exports.deleteListItem = async(req, res) => {
    try {

        const itemId = req.params.id;

        if(!ObjectId.isValid(itemId))
            return res.status(400).json({message: `Invalid List Item Id`});

        const deleteItem = await List.findOneAndDelete({_id: itemId});

        if(!deleteItem)
            return res.status(404).json({message: `List Item not found`});

        res.status(200).json({message: `List Item Deleted Successfully`});

    }
    catch (error) {
        return res.status(500).json({message: `Something went wrong`, error});
    }
}

// Read All List Items
exports.getAllListItems = async(req, res) => {
    try {
        const userId = req.params.id;

        if(!ObjectId.isValid(userId))
            return res.status(400).json({message: `Invalid User Id`});

        const user = await User.findById(userId);

        if(!user) 
            return res.status(404).json({message: `User not found`});

        const listItems = await List.find({userId});

        res.status(200).json({listItems});

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({message: `An error occurred, Please try again`, error});
    }
}
