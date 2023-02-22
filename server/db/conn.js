const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(
    `mongodb+srv://naveenbasyal001:12345@cluster0.k73nfoc.mongodb.net/Google_Auth?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("DB connected");
    }
  );