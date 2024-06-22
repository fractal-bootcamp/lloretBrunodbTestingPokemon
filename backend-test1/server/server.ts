import app from "./index.ts"

const port = process.env.PORT

app.listen(port, () => console.log(`listening on port ${port}`))
