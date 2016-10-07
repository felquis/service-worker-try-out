;(function () {
  if ('serviceWorker' in navigator) {
    return installServiceWorker()
  }

  function offlineNotAvaiable() {
    document.getElementsByTagName('h1')[0].textContent = 'Service Worker Not Available'
  }

  function installServiceWorker() {
    navigator.serviceWorker.register('./service-worker.js')

    navigator.serviceWorker.oncontrollerchange = onControllerChange
  }

  function onControllerChange() {
    var html = '<div style="'
    html += 'position: fixed; bottom: 1em; left: 1em;'
    html += 'background: yellow; padding: 1em;'
    html += '">'
    html += 'Refresh the page to see the newest content'
    html += '</div>'

    document.body.insertAdjacentHTML('beforeend', html)
  }
}())

// navigator.serviceWorker.register('./service-worker.js')

// navigator.serviceWorker.oncontrollerchange = function () {
//   console.log('Refresh to see the newest content')
// }
