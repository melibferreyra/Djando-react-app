from django.urls import path, include
from rest_framework import routers
from tasks import views
# Definir rutas que se van a utilizar en el Front
#GET
#POST
#PUT
#DELETE

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

# versionado api
urlpatterns = [
    path('api/v1/', include(router.urls))
]