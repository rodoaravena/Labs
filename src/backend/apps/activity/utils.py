import base64
from apps.activity.models import Session
from datetime import datetime, timedelta
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad, pad

def get_dashboard_chart():
    ranges = getThisWeekTimestamps()
    sessions = Session.objects.filter(start__gte=ranges[0], end__lte=ranges[1]).order_by("start").values_list("start","end", "alive")
    data = [0] * (len(ranges)+1) # array de ceros, donde se llenaran los valores para cada rango de tiempo.
    try:
        for idx, session in enumerate(sessions):
            sessionStart, sessionEnd, sessionLastAlive = session
            if sessionEnd is None:
                if sessionLastAlive is None:
                    continue
                else:
                    sessionEnd = sessionLastAlive
            sessionTime = int(sessionEnd) - int(sessionStart)
            rangeStart, rangeEnd = ranges
            if (sessionStart >= rangeStart and sessionStart < rangeEnd):
                currentEnd = min(sessionEnd, rangeEnd)
                sessionRangeTime = currentEnd - sessionStart
            elif (sessionEnd > rangeStart and sessionEnd <= rangeEnd):
                sessionRangeTime = sessionEnd - max(sessionStart, rangeStart)
            else:
                continue

            data[idx] += sessionRangeTime
            sessionTime -= sessionRangeTime
            if (sessionTime == 0):
                break
            elif (sessionTime > 0):
                sessionStart = rangeEnd
                
    except Exception as exception:
        import traceback
        print(traceback.format_exc())
        
    print(data)

def formatTimestamp(timestamp):
    return datetime.fromtimestamp(timestamp / 1000).strftime("%H:%M:%S  %d/%m/%Y")

def getCurrentTimestamp():
    now = datetime.now()
    return getTimestamp(now)

def getSessionsBetweenTimestamps(gte, lte):
    if gte is None or lte is None:
        sessions = Session.objects.all().order_by("workstation", "start").values()
    else:
        if gte > lte:
            return None
        sessions = Session.objects.filter(start__gte=gte, start__lte=lte).order_by("workstation", "start").values()
    return sessions

def getTimestamp(dt):
    return int(datetime.timestamp(dt)) * 1000

def getStartOfDay(dt):
    return datetime(dt.year, dt.month, dt.day)

def getTodayTimestamps():
    now = datetime.now()
    today = getStartOfDay(now)
    return (getTimestamp(today), getTimestamp(now))

def getThisWeekTimestamps():
    now = datetime.now()
    today = getStartOfDay(now)
    dayss=today.weekday()
    startOfWeek = today - timedelta(days=today.weekday())
    return (getTimestamp(startOfWeek), getTimestamp(now))

def getThisMonthTimestamps():
    now = datetime.now()
    today = getStartOfDay(now)
    startOfMonth = today.replace(day=1)
    return (getTimestamp(startOfMonth), getTimestamp(now))

def getThisYearTimestamps():
    now = datetime.now()
    today = getStartOfDay(now)
    startOfYear = today.replace(day=1, month=1)
    return (getTimestamp(startOfYear), getTimestamp(now))

def getSessionsByOption(option):
    if option == "today":
        timestamps = getTodayTimestamps()
    elif option == "week":
        timestamps = getThisWeekTimestamps()
    elif option == "month":
        timestamps = getThisMonthTimestamps()
    elif option == "year":
        timestamps = getThisYearTimestamps()
    else:
        return None
    gte, lte = timestamps
    return getSessionsBetweenTimestamps(gte, lte)

def formatSessions(sessions):
    for s in sessions:
        if (s.end is not None):
            td = timedelta(milliseconds=s.end - s.start)
            s.time = str(td).split(".")[0]
            s.end = datetime.fromtimestamp(s.end / 1000).strftime("%d/%m/%Y - %H:%M:%S")
        else:            
            s.time = "-"
            s.end = "Activo"
        s.start = datetime.fromtimestamp(s.start / 1000).strftime("%d/%m/%Y - %H:%M:%S")
    return sessions

def decryptAES(ciphertext, key):
    key = key.encode("utf-8")
    ciphertext = base64.b64decode(ciphertext)

    # Configuración del cifrado
    cipher = AES.new(key, AES.MODE_CBC, b"\x00" * 16)

    # Desencriptar el texto cifrado
    plaintext = unpad(cipher.decrypt(ciphertext), AES.block_size)

    # Decodificar el resultado a una cadena de texto
    return plaintext.decode("utf-8")


def encryptAES(plaintext, key):
    key = key.encode("utf-8")

    # Configuración del cifrado
    cipher = AES.new(key, AES.MODE_CBC, b"\x00" * 16)

    # Rellenar el texto plano
    plaintext_padded = pad(plaintext.encode("utf-8"), AES.block_size)

    # Encriptar el texto plano
    ciphertext = cipher.encrypt(plaintext_padded)

    # Codificar el resultado en base64
    ciphertext_base64 = base64.b64encode(ciphertext).decode("utf-8")

    return ciphertext_base64
