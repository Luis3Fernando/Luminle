export function compareStrings(str1: string, str2: string): boolean {
    console.log("palabras", str1, " : ", str2);
    const str1Normalizada = str1.normalize('NFD').toLowerCase();
    const str2Normalizada = str2.normalize('NFD').toLowerCase();
    return str1Normalizada === str2Normalizada;
}