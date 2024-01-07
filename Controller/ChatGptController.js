const axios = require('axios')

const getPrompt = (req,res)=>{
    const request = req.body.request;

    const openAiOptions = {
        method: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
        },
        data: {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `Pretend you're an ai for a social media application, be energetic and be full of charisma.
                Introduce yourself as Mira.`,
            },
            {
              role: "user",
              content: `${request}`,
            },
          ],
          temperature: 0.7,
          stream: false,
        },
      }
      axios.request(openAiOptions)
      .then((data)=>{
        res.send(data)
      })
      .catch((err)=>{
        console.log(err)
      })
}

module.exports={getPrompt}