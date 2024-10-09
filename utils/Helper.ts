export const convertDateTime = (str: string) => {
    const date = new Date(str);
    const localTime = date.toLocaleString();
    return localTime;
}