export default function initScript(){
    const head = document.querySelector('head');
    const faScript = document.createElement('script');
    const faKitUrl = `https://kit.fontawesome.com/${process.env.FA_KIT}.js`;
    faScript.setAttribute('src', faKitUrl);
    faScript.setAttribute('crossorigin', '"anonymous"');

    head.appendChild(faScript);
}