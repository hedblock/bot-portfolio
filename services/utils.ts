export const getEllipsisTxt = (str : string, n = 6) => {
    if (str) {
      return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return "";
};

export const round2 = (num : number) => {
    return (num.toFixed(2));
}