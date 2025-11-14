const SECURITY_HEADERS = [
    'Content-Security-Policy',
    'Strict-Transport-Security', 
    'X-Frame-Options',
    'X-Content-Type-Options',
    'Referrer-Policy',
    'Permissions-Policy',
    'Access-Control-Allow-Origin'
] as const

const SECURITY_COOKIES = [
    'Secure',
    'HttpOnly',
    'SameSite',
] as const

export const cheker = (headers:Headers) => {
    let result = 'Результат проверки:\n\n'

    SECURITY_HEADERS.forEach(header => {
        if (headers.get(header)) {
            result += `✓ ${header}\n`
        } else {
            result += `х ${header}\n`
        }
    })
    
    const setCookieHeaders = headers.get('Set-Cookie');

    if (setCookieHeaders) {
        result += '✓ Set-Cookie заголовки присутствуют\n'

        SECURITY_COOKIES.forEach(cookie => {
            if (setCookieHeaders.includes(cookie)){
                result +=`✓ ${cookie} flag присутствует\n`
            } else  {
                result +=`x ${cookie} flag отсутствует\n`
            }
        })
    
    } else {
        result += 'х Set-Cookie заголовки отсутствуют\n'
    }

    result += '\n--- Все заголовки ответа ---\n'

    for (const [key, value] of headers.entries()) {
        result += ` ${key}: ${value}\n`
    }

    return result
}