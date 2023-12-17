from django.contrib import admin
from apps.keymonitor.models import Key, Teacher, BorrowedKey
admin.site.register(Key)
admin.site.register(Teacher)
admin.site.register(BorrowedKey)

