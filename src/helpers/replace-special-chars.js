export default function replaceSpecialChars (str) {
    if (!str) return
    return str.replace(/[æåą]+/g, 'a')
        .replace(/[øó]+/g, 'o')
        .replace(/ć+/g, 'c')
        .replace(/ś+/g, 's')
        .replace(/ę+/g, 'e')
        .replace(/ł+/g, 'l')
        .replace(/ń+/g, 'n')
        .replace(/[żź]+/g, 'z')
}
