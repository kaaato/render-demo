const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://kaaato_db:${password}@cluster0.mxfcarb.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

// to handle wrong password on command

/* mongoose.connect(url)
.catch(error => {
  console.log("the password is not correct")
  process.exit(1)
}) */

//or

/* async function validate(url) {
  try {
    await mongoose.connect(url)
  } catch (error) {
    console.log("the password is not correct")
    process.exit(1)
  }  
}
validate(url) */

mongoose.connect(url)


const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

/* const note = new Note({
  content: 'HTML is easy',
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
}) */



// create multiple documents at once
// either the insertMany or the create method
// the insertMany is faster but doesn't trigger pre-saved miidleware

/* Note.insertMany([
  {
    content: 'HTML is easy',
    important: true,
  },
  {
    content: 'CSS is hard',
    important: false,
  },
  {
    content: 'JavaScript is harder',
    important: true,
  }  
])
.then(result => {
  console.log(result)
  mongoose.connection.close()
})
.catch(e => {
  console.log(e)
  mongoose.connection.close()
}) */

/* Note.create([
  {
    content: 'HTML is easy',
    important: true,
  },
  {
    content: 'CSS is hard',
    important: false,
  },
  {
    content: 'JavaScript is harder',
    important: true,
  }
])
.then(result => {
  console.log(result)
  mongoose.connection.close()
  // Note.find({}).then(result => {
  //   result.forEach(note => {
  //     console.log(note)
  //   })
  //   mongoose.connection.close()
  // })
})
.catch(e => {
  console.log(e)
  mongoose.connection.close()
}) */


// how to delete a document 
/* Note.findOneAndDelete({important: false})
.then(result => {
  console.log(result)
  mongoose.connection.close()
})
.catch(e => {
  console.log(e))
  mongoose.connection.close()
} */

/* Note.findByIdAndDelete('68c6dc4a68e535c9da55b5e0')
.then(result => {
  console.log(result)
  mongoose.connection.close()
})
.catch(e => {
  console.log(e)
  mongoose.connection.close()
}) */

/* Note.deleteMany({})
.then(result => {
  console.log(result)
  mongoose.connection.close()
})
.catch(e => {
  console.log(e)
  mongoose.connection.close()
}) */

// Note.find({ important: true }).then(result => {
//   console.log(result)
//   mongoose.connection.close()
// })
