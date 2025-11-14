export const cheker = (headers:any) => {
    let result = 'Результат проверки:\n\n'

    if (headers.get('Content-Security-Policy')) {
        result += '✓ Content-Security-Policy\n'
    } else {
        result += 'х Content-Security-Policy\n'
    }

    if (headers.get('Strict-Transport-Security')) {
        result += '✓ Strict-Transport-Security\n'
    } else {
        result += 'х Strict-Transport-Security\n'
    }

    if (headers.get('X-Frame-Options')) {
        result += '✓ X-Frame-Options\n'
    } else {
        result += 'х X-Frame-Options\n'
    }

    if (headers.get('X-Content-Type-Options')) {
        result += '✓ X-Content-Type-Options\n'
    } else {
        result += 'х X-Content-Type-Options\n'
    }

    if (headers.get('Referrer-Policy')) {
        result += '✓ Referrer-Policy\n'
    } else {
        result += 'х Referrer-Policy\n'
    }

    if (headers.get('Permissions-Policy')) {
        result += '✓ Permissions-Policy\n'
    } else {
        result += 'х Permissions-Policy\n'
    }

    if (headers.get('Access-Control-Allow-Origin')) {
        result += '✓ Access-Control-Allow-Origin\n'
    } else {
        result += 'х Access-Control-Allow-Origin\n'
    }
    
    const setCookieHeaders = headers.get('Set-Cookie');

    if (setCookieHeaders) {
        result += '✓ Set-Cookie заголовки присутствуют\n'
    
        if (setCookieHeaders.includes('Secure')) {
            result += '✓ Secure flag присутствует\n'
        } else {
            result += 'х Secure flag отсутствует\n'
        }
        
        if (setCookieHeaders.includes('HttpOnly')) {
            result += '✓ HttpOnly flag присутствует\n'
        } else {
            result += 'х HttpOnly flag отсутствует\n'
        }
        
        if (setCookieHeaders.includes('SameSite')) {
            result += '✓ SameSite flag присутствует\n'
        } else {
            result += 'х SameSite flag отсутствует\n'
        } 
    } else {
        result += 'х Set-Cookie заголовки отсутствуют\n'
    }

    result += '\n--- Все заголовки ответа ---\n'

    for (const [key, value] of headers.entries()) {
        result += `▸ ${key}: ${value}\n`
    }

    return result
}