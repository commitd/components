export const copyToClipboard = (text: string) => {
  console.log('Copied to clipboard:', text)
  var textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}
