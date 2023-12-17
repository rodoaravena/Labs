import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
DATE_FORMAT = 'd/m/Y'

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('DJANGO_SECRET') if os.getenv('DJANGO_SECRET') is not None else 'django-insecure-qr_5n+&dx%l3-1t)-&m84nw-id707e#@$f9_e*)jdb6*e6ri6+'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False if os.getenv('DEBUG') is not None else True

ALLOWED_HOSTS = [os.getenv('URL_HOST') if os.getenv('URL_HOST') is not None else "127.0.0.1"]


# Application definition

INSTALLED_APPS = [
    'daphne',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework.authtoken',
    'rest_auth',
    'drf_yasg',
    'simple_history',
    'api',
    'apps.activity',
    'apps.authentication',
    'apps.core',
    'apps.monitoring',
    'apps.keymonitor',
    'apps.schedules',
    'apps.notification',
    'django_extensions'
]

CRISPY_TEMPLATE_PACK = 'bootstrap4'

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'simple_history.middleware.HistoryRequestMiddleware',
]

# CORS settings

CORS_ORIGIN_ALLOW_ALL = True

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_METHODS = [
    'GET',
    'POST',
    'PUT',
    'DELETE',
]

CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]

CSRF_TRUSTED_ORIGINS = ['https://' + (os.getenv('URL_HOST') if os.getenv('URL_HOST') is not None else '127.0.0.1')]

# Channels configuration
ASGI_APPLICATION = 'labsadmin.asgi.application'

CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [(os.getenv('REDIS_URL'))],
        },
    },
}

#CORS_ORIGIN_WHITELIST = ['https://example.com']

ROOT_URLCONF = 'labsadmin.urls'

APPLICATION_NAME = 'Labs'

# Rest Framework settings

LOGIN_URL = 'rest_framework:login'

LOGOUT_URL = 'rest_framework:logout'

REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ]
}

# Djanjo REST Swagger settings

SWAGGER_SETTINGS = {
    'exclude_namespaces': [],
    'api_version': '0.1',
    'api_path': '/characters/api',
    'enabled_methods': [
        'get',
        'post',
        'put',
        'patch',
        'delete'
    ],
    'api_key': '',
    'is_authenticated': False,
    'is_superuser': False,
    'permission_denied_handler': None,
    'info': {
        'contact': 'test@prueba.cl',
        'description': '',
        'license': 'No Licence',
        'licenseUrl': '',
        'termsOfServiceUrl': '',
        'title': 'Api de Labs',
    },
    'doc_expansion': 'none',
}


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            'template',
            'apps/activity/template',
            'apps/authentication/template',
            'apps/core/template',
            'apps/schedules/template',
            'apps/monitoring/template',
            'apps/keymonitor/template',
            ],
        
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'labsadmin.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

config = {} # This initialize database config

if not DEBUG:
    config = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.getenv('PGDATABASE'),
            'HOST': os.getenv('PGHOST'),
            'USER': os.getenv('PGUSER'),
            'PASSWORD': os.getenv('PGPASSWORD'),
            'PORT': os.getenv('PGPORT'),
        }
    }
    
else:
    config = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

DATABASES = config

# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'es-es'

TIME_ZONE = 'America/Santiago'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

# Static files (CSS, JavaScript, Images)
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]


# Media files
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')
MEDIA_URL = '/media/'

# Login Required Setting
LOGIN_URL = "login"
LOGIN_REDIRECT_URL = '/login/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Email settings

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.getenv('EMAIL_HOST') if os.getenv('EMAIL_HOST') is not None else ""
EMAIL_USE_TLS = os.getenv('EMAIL_USE_TLS') if os.getenv('EMAIL_USE_TLS') is not None else ""
EMAIL_PORT = os.getenv('EMAIL_PORT') if os.getenv('EMAIL_PORT') is not None else ""
EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER') if os.getenv('EMAIL_HOST_USER') is not None else ""
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD') if os.getenv('EMAIL_HOST_PASSWORD') is not None else ""

# Logs settings

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'simple': {
            'format': '%(levelname)s %(message)s'
        },
    },
    'handlers': {
        'console':{
            'level':'INFO',
            'class':'logging.StreamHandler',
            'formatter': 'simple'
        },
    },
    "root": {
        "handlers": ["console"],
        "level": "INFO",
    },
    "loggers": {
        'django.request':{
            'handlers': ['console'],
            'propagate': False,
            'level': 'CRITICAL',
        },
    },
}


GRAPH_MODELS = {
    'all_applications': True,
    'graph_models': True,
}
