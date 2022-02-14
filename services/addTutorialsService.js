import db from '../models'
const Tutorial = db.tutorials;

const addTutorialService = async (tutorial) => {
    try{
    await Tutorial.create({
        title: tutorial.title,
        description: tutorial.description,
    })
    return "Sucessfull"
}
catch(error){
console.log(error.name)
return "error";
}
}

export default addTutorialService
