from django.urls import path, include
from . import views


urlpatterns = [

    path('agregar_llave/', views.crear_llave, name="agregar_llave"),
    path('calendario_dia/', views.calendario_day, name="calendario_dia"),
    path('entregar_llave/', views.entregar_llave, name="entregar_llave"),
    path('listar_llave/', views.listar_llave, name="listar_llave"),
    path('listar_docente/',views.listar_docente, name="listar_docente"),
    path('agregar_docente/',views.crear_docente, name="agregar_docente"),
    path('eliminar_docente/',views.eliminar_docente, name="eliminar_docente"),
    path('eliminar_llave/<int:id>',views.eliminar_llavelog, name="eliminar_llave")
    
]

#vista con clase
#path('listar_llave/', views.ListadoLlave.as_view(), name="listar_llave"), 
#path('editar_docente/<int:pk>',views.EditaDocente.as_view(), name="editar_docente"),
#path('agregar_llave/',views.CrearLlave.as_view(), name="agregar_llave"),
#path('eliminar_llave/<int:pk>',views.EliminarLlavelog.as_view, name="eliminar_llave"),
#path('eliminar_docente/<int:pk>',views.EliminarDocente.as_view, name="eliminar_docente")