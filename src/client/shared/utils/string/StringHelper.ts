export class StringHelper {
    
    static slice(string: string, length: number): string {
        if (!string) {
            return ''
        }
        if (string.length <= length) {
            return string
        }
        return `${string.slice(0, length)}...`
    }
    
    static stripHtmlTags(input: string): string {
        return input.replace(/<[^>]*>/g, '').trim()
    }
}