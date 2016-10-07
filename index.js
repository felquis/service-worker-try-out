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

    if (localStorage.getItem('service-worker')) {
      html += 'background: yellow; padding: 1em;'
      html += '">'
      html += 'Refresh the page to see the newest content'
    } else {
      html += 'background: green; padding: 1em;'
      html += '">'
      html += 'Offline Ready'

      localStorage.setItem('service-worker', 'done')
    }

    html += '</div>'

    document.body.insertAdjacentHTML('beforeend', html)
  }
}())
