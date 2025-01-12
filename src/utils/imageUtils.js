export const getImagePath = (imageName) => {
    const basePath = import.meta.env.PROD ? '/landingPage' : '';
    return `${basePath}/${imageName}`;
};