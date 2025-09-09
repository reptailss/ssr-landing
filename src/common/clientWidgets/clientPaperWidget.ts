export type ClientPaperWidget = {
    title: string  | null
    children: ClientPaperChildren[]
}


export type ClientPaperChildren =   ClientPaperList | ClientPaperCard

export type ClientPaperList = {
    type:'client-paper-list'
    title:string
    children: ClientPaperListChildren[]
}

export type ClientPaperListChildren = {
    image:string
    content:string
}

export type ClientPaperCard = {
    type:'client-paper-card'
    title: string
    subtitle: string | null
    image: string
    children: ClientPaperCardChildren
}


export type ClientPaperCardChildren = ClientPaperCardEditor  | ClientPaperCardUl

export type ClientPaperCardEditor = {
    type:'client-paper-card-editor'
    content:string
}

export type ClientPaperCardUl = {
    type:'client-paper-card-ul'
    list:string[]
    advantages:string[]
}
