import { PageDefaultContentJsonWriter } from '@modules/pagesDefaultContent/services/PageDefaultContentJsonWriter'

new PageDefaultContentJsonWriter().writeJson().then(() => {
    console.log('Successfully written!')
}).catch((error) => {
    console.log(error)
})