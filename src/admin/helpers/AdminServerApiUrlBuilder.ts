declare global {
    interface Window {
        _servicePrefix: string
    }
}

export class AdminServerApiUrlBuilder {
    static build<Url>(url: Url): Url {
        if (!window._servicePrefix) {
            return url
        }
        return `/${window._servicePrefix}${url}` as Url
    }
}