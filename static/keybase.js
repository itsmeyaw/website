fetch('https://keybase.io/_/api/1.0/user/lookup.json?usernames=itsmeyaw',
    {
        method: 'GET',
        mode: 'cors'
    }
).then(response => {
    if (response.ok) {
        response.json().then(data => {
            const fingerprint = data.them[0]['public_keys']['primary']['key_fingerprint']
            let html_fingerprint = ''
            if (fingerprint !== undefined && fingerprint != null) {
                for (let i = 1; i <= fingerprint.length; i++) {
                    html_fingerprint += fingerprint.charAt(i - 1).toUpperCase()
                    if (i % 4 === 0) {
                        html_fingerprint += ' '
                    }
                }
                document.querySelector('#fingerprint-placeholder').textContent = html_fingerprint
            }
        })
    }
})