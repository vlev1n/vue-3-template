function isLocal() {
  return /(localhost|127\.|192\.)/.test(location.host)
}
function getFullURL(url) {
  if (url.startsWith('/')) {
    if (isLocal()) {
      return 'https://new.icity24.xyz' + url
    } else {
      return url
    }
  } else {
    return url
  }
}
export { isLocal, getFullURL }
